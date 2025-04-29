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
			ratio: '16:9',
		})
	})
})

export default {}
