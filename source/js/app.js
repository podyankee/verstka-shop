$(document).ready(function(){
    

	let bannerSlider = () => {
		$('.js-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			prevArrow: ".slider__navigation--prev",
			nextArrow: ".slider__navigation--next",
			responsive: [
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						dots:true,
						customPaging: function () {
							return '<a class="slider__dot"></a>';
						},
						appendDots: '.slider__dots'
					}
				}
			]
		});
	};
	let featuredSlider = () => {
		$('.js-featured').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			prevArrow: ".featured__navigation--prev",
			nextArrow: ".featured__navigation--next",
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 0,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
			]
		});
	};

		bannerSlider();
		featuredSlider();
    });