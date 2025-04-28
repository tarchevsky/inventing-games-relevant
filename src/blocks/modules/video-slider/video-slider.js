import Plyr from 'plyr'
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
	let videoPlayers = [] // Объявляем переменную сразу
	let videoSlider

	// Функция для проверки на мобильные устройства
	function isMobile() {
		return window.innerWidth <= 768
	}

	// Функция для инициализации всех плееров Plyr
	function initAllPlayers() {
		try {
			// Сначала инициализируем все видео-плееры, чтобы избежать проблем с первыми слайдами
			const playerElements = document.querySelectorAll('.video-player')

			if (playerElements.length === 0) {
				console.error('Видео-плееры не найдены')
				return false
			}

			// Очищаем предыдущие экземпляры плееров, если они есть
			if (videoPlayers.length > 0) {
				videoPlayers.forEach(player => {
					if (player && typeof player.destroy === 'function') {
						player.destroy()
					}
				})
				videoPlayers = []
			}

			// Создаем новые экземпляры плееров для всех видео
			videoPlayers = Array.from(playerElements).map(player => {
				return new Plyr(player, {
					controls: [
						'play-large',
						'play',
						'progress',
						'current-time',
						'mute',
						'volume',
						'fullscreen',
					],
					ratio: isMobile() ? 'auto' : '16:9',
					responsive: true,
					seekTime: 10,
					disableContextMenu: false,
					autoplay: false, // Отключаем автоплей, чтобы избежать проблем
				})
			})

			return videoPlayers.length > 0
		} catch (error) {
			console.error('Ошибка инициализации Plyr:', error)
			return false
		}
	}

	// Функция для обновления размеров Plyr
	function updatePlyrInstancesSize() {
		// Проверяем существует ли массив videoPlayers и не пустой ли он
		if (!videoPlayers || videoPlayers.length === 0) return

		videoPlayers.forEach(player => {
			if (player && player.elements && player.elements.container) {
				// Обновить размер контейнера Plyr
				if (isMobile()) {
					player.ratio = 'auto' // Автоматические пропорции для мобильных
					// Принудительно выставляем стили для мобильных
					if (player.elements.wrapper) {
						player.elements.wrapper.style.maxWidth = '100%'
						player.elements.wrapper.style.height = 'auto'
					}
					if (player.elements.container) {
						player.elements.container.style.maxWidth = '100%'
						player.elements.container.style.width = '100%'
						player.elements.container.style.height = 'auto'
					}
				} else {
					player.ratio = '16:9' // Стандартное соотношение для десктопа
				}
			}
		})

		// Триггерим ресайз для корректного обновления интерфейса
		window.dispatchEvent(new Event('resize'))
	}

	// Функция для применения настроек к активным слайдам
	function setupActiveSlides() {
		// Находим активные и видимые слайды
		const activeSlides = document.querySelectorAll(
			'.swiper-slide-active .video-player, .swiper-slide-visible .video-player'
		)

		// Специальная обработка для первых двух слайдов
		const firstSlides = document.querySelectorAll(
			'.swiper-slide:nth-child(1) .video-player, .swiper-slide:nth-child(2) .video-player'
		)

		// Обрабатываем как активные, так и первые слайды
		const slidesToProcess = [...new Set([...activeSlides, ...firstSlides])]

		slidesToProcess.forEach((videoElement, index) => {
			// Получаем индекс плеера в массиве videoPlayers
			const playerIndex = Array.from(
				document.querySelectorAll('.video-player')
			).indexOf(videoElement)

			if (playerIndex >= 0 && playerIndex < videoPlayers.length) {
				const player = videoPlayers[playerIndex]
				if (player && player.elements) {
					// Применяем настройки к плееру
					if (player.elements.container) {
						player.elements.container.style.maxWidth = '100%'
						player.elements.container.style.width = '100%'
					}

					// Устанавливаем соотношение сторон
					player.ratio = isMobile() ? 'auto' : '16:9'

					// Обновляем размеры для первых двух слайдов специальным образом
					if (index < 2) {
						// Форсируем обновление первых двух слайдов
						setTimeout(() => {
							if (player.elements && player.elements.container) {
								player.elements.container.style.maxWidth = '100%'
								player.elements.container.style.width = '100%'
								player.elements.container.style.opacity = '1'
							}
						}, 100)
					}
				}
			}
		})
	}

	// Инициализируем все плееры перед инициализацией слайдера
	const plyrInitialized = initAllPlayers()

	// Добавляем небольшую задержку перед инициализацией слайдера
	setTimeout(() => {
		// Инициализация слайдера с видео
		videoSlider = new Swiper('#video-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: false,
			speed: 500,
			modules: [Navigation, Pagination, Mousewheel],
			pagination: {
				el: '.video-slider-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.video-slider-button-next',
				prevEl: '.video-slider-button-prev',
			},
			mousewheel: {
				invert: false,
			},
			breakpoints: {
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			on: {
				// Приостановить все видео при переключении слайдов
				slideChange: () => {
					document.querySelectorAll('.video-player').forEach(video => {
						if (video.plyr) {
							video.plyr.pause()
						}
					})
				},
				// После инициализации слайдера
				init: () => {
					console.log('Слайдер инициализирован')

					// Форсируем обновление размеров всех плееров
					updatePlyrInstancesSize()

					// Настраиваем активные слайды
					setupActiveSlides()

					// Если изначальная инициализация не удалась, пробуем еще раз
					if (!plyrInitialized) {
						console.log('Повторная инициализация плееров')
						initAllPlayers()
						setTimeout(setupActiveSlides, 100)
					}
				},
				// При изменении размера
				resize: () => {
					updatePlyrInstancesSize()
					setupActiveSlides()
				},
			},
		})

		// Дополнительно настраиваем плееры после небольшой задержки
		setTimeout(() => {
			setupActiveSlides()
			updatePlyrInstancesSize()
		}, 300)
	}, 100)

	// Обработчик события изменения размера окна
	window.addEventListener('resize', () => {
		setTimeout(() => {
			updatePlyrInstancesSize()
			setupActiveSlides()
		}, 300)
	})
})

export default {}
