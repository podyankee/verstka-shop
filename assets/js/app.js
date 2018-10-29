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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgXHJcblxyXG5cdGxldCBiYW5uZXJTbGlkZXIgPSAoKSA9PiB7XHJcblx0XHQkKCcuanMtc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0cHJldkFycm93OiBcIi5zbGlkZXJfX25hdmlnYXRpb24tLXByZXZcIixcclxuXHRcdFx0bmV4dEFycm93OiBcIi5zbGlkZXJfX25hdmlnYXRpb24tLW5leHRcIixcclxuXHRcdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDQ4MCxcclxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRcdGFycm93czogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGRvdHM6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0Y3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICc8YSBjbGFzcz1cInNsaWRlcl9fZG90XCI+PC9hPic7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGFwcGVuZERvdHM6ICcuc2xpZGVyX19kb3RzJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0XHRiYW5uZXJTbGlkZXIoKTtcclxuICAgIH0pOyJdfQ==
