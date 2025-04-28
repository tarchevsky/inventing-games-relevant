import Plyr from 'plyr'
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
	// Инициализация слайдера с видео
	const videoSlider = new Swiper('#video-slider', {
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
			// Инициализировать Plyr после загрузки слайдера
			init: initPlyrOnVisibleSlides,
			resize: () => {
				// Переопределить размеры Plyr при изменении размера окна
				setTimeout(updatePlyrInstancesSize, 300)
			},
		},
	})

	// Инициализация Plyr для всех видео в слайдере
	const videoPlayers = Array.from(
		document.querySelectorAll('.video-player')
	).map(player => {
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
			ratio: isMobile() ? 'auto' : '16:9', // Автоматические пропорции для мобильных
			responsive: true, // Отзывчивость
			seekTime: 10,
			disableContextMenu: false,
		})
	})

	// Функция для инициализации Plyr только на видимых слайдах
	function initPlyrOnVisibleSlides() {
		const visibleSlides = document.querySelectorAll(
			'.swiper-slide-visible .video-player'
		)
		visibleSlides.forEach(player => {
			if (player.plyr) {
				player.plyr.ratio = isMobile() ? 'auto' : '16:9'
			}
		})
	}

	// Функция для обновления размеров Plyr
	function updatePlyrInstancesSize() {
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

				// Триггерим ресайз для корректного обновления интерфейса
				window.dispatchEvent(new Event('resize'))
			}
		})
	}

	// Обработчик события изменения размера окна
	window.addEventListener('resize', () => {
		setTimeout(updatePlyrInstancesSize, 300)
	})

	// Проверка на мобильные устройства
	function isMobile() {
		return window.innerWidth <= 768
	}
})

export default {}
