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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIFxyXG5cclxuXHRsZXQgYmFubmVyU2xpZGVyID0gKCkgPT4ge1xyXG5cdFx0JCgnLmpzLXNsaWRlcicpLnNsaWNrKHtcclxuXHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdHByZXZBcnJvdzogXCIuc2xpZGVyX19uYXZpZ2F0aW9uLS1wcmV2XCIsXHJcblx0XHRcdG5leHRBcnJvdzogXCIuc2xpZGVyX19uYXZpZ2F0aW9uLS1uZXh0XCIsXHJcblx0XHRcdHJlc3BvbnNpdmU6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRicmVha3BvaW50OiA0ODAsXHJcblx0XHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRkb3RzOnRydWUsXHJcblx0XHRcdFx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnPGEgY2xhc3M9XCJzbGlkZXJfX2RvdFwiPjwvYT4nO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRhcHBlbmREb3RzOiAnLnNsaWRlcl9fZG90cydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0pO1xyXG5cdH07XHJcblx0bGV0IGZlYXR1cmVkU2xpZGVyID0gKCkgPT4ge1xyXG5cdFx0JCgnLmpzLWZlYXR1cmVkJykuc2xpY2soe1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0cHJldkFycm93OiBcIi5mZWF0dXJlZF9fbmF2aWdhdGlvbi0tcHJldlwiLFxyXG5cdFx0XHRuZXh0QXJyb3c6IFwiLmZlYXR1cmVkX19uYXZpZ2F0aW9uLS1uZXh0XCIsXHJcblx0XHRcdG1vYmlsZUZpcnN0OiB0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YnJlYWtwb2ludDogMCxcclxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0XHRcdGFycm93czogZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDQ4MCxcclxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMixcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDEwMjQsXHJcblx0XHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0XHRiYW5uZXJTbGlkZXIoKTtcclxuXHRcdGZlYXR1cmVkU2xpZGVyKCk7XHJcbiAgICB9KTsiXX0=
