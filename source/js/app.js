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

		bannerSlider();
    });