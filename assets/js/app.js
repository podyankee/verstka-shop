$(document).ready(function(){
    $(document).ready(function () {
	let openSearchForm = () => {
		$(document).on('click', '.search__icon', function () {
			$(this).parent().addClass('search--open');
		});
	};

	let clearSearchForm = () => {
		$(document).on('click', '.search__clear', function () {
			$('.search__input').val('');
		});
	};

	let bannerSlider = () => {
		$('.js-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".banner__navigation--prev",
			nextArrow: ".banner__navigation--next",
			dots: true,
			customPaging: function () {
			return '<a class="banner__dot"></a>'; 
			},
			appendDots: '.banner__dots'
		});
	};

	let tabs = function  () {
		$('.tabs-navigation__item').click(function () {
			let tabName = $(this).attr('show-tab'),
					tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
					tab = $(tabsBody).find('.' + tabName);
			$(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
			$(tab).addClass('tab--active').siblings().removeClass('tab--active');
			if ($(tabsBody).find(' .js-products-line-slider').length) {
				$('.js-products-line-slider').each(function  () {
					$(this).slick('refresh');
				});
				$('.js-products-prev__slider').each(function () {
					$(this).slick('refresh');
				});
			}
		});
	};



			let productPrevSlider = function () {
				$('.js-product-prev__slider').each(function (idx) {
					let carouselId = 'carousel' + idx;
					this.closest('.product-prev').id = carouselId;
					$(this).slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
						swipe: false,
						infinity: false,
						appendDots: '#' + carouselId + ' .product-prev__colors',
						customPaging: function (slider, i) {
							let color = $(slider.$slides[i]).data('color');
							return '<a class="product-prev__color" style="background-color: ' + color + '  " ></a>';
						}
					});
				});
			};

	let productLineSlider = function  () {
		$('.js-products-line-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1139,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: false,
			
						appendDots: '.products-line-slider__dots',
						customPaging: function (slider, i) {
						return '<div class=".products-line-slider__dot"></div>';
					},
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};
	let productBorderLineSlider = function  () {
		$('.js-products-border-line-slider').each(function (idx) {
			let productsBorderLineSliderID = "products-border-line-slider-" + idx;
			this.closest('.products-border-line-slider').id = productsBorderLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--prev',
				nextArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--next'
			});
		});
	};

	let categorySlider = function () {
		$('.js-category-slider').slick({
			slidesToShow: 6,
			arrow: false
		});
	};

	let select = function  () {
		$(document).on('click', '.select__header',function  () {
			$(this).parent().toggleClass('select--open').siblings('.filter__row').find('.select').removeClass('select--open');
		});
		$(document).on('click', '.select-list__item',function  () {
			let current = $(this).closest('.select').find('select__current')[0];
			$(this).closest('.select').removeClass('select--open');
			$(current).text($(this).text());
		});
	};

	let productSlider = function () {
		$('.js-product-slider-dots').slick({
			asNavFor: '.js-product-slider',
			slidesToShow: 3,
			slidesToScroll: 1,
			vertical: true,
			prevArrow: '.product-slider-dots__btn--prev',
			nextArrow:'.product-slider-dots__btn--next'
		});
		$('.js-product-slider').slick({
			asNavFor: '.js-product-slider-dots',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		});
	};

	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
	productBorderLineSlider();
	categorySlider();
	select();
	productSlider();
});



    });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0bGV0IG9wZW5TZWFyY2hGb3JtID0gKCkgPT4ge1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZWFyY2hfX2ljb24nLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3NlYXJjaC0tb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IGNsZWFyU2VhcmNoRm9ybSA9ICgpID0+IHtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VhcmNoX19jbGVhcicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCgnLnNlYXJjaF9faW5wdXQnKS52YWwoJycpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IGJhbm5lclNsaWRlciA9ICgpID0+IHtcclxuXHRcdCQoJy5qcy1iYW5uZXInKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdHByZXZBcnJvdzogXCIuYmFubmVyX19uYXZpZ2F0aW9uLS1wcmV2XCIsXHJcblx0XHRcdG5leHRBcnJvdzogXCIuYmFubmVyX19uYXZpZ2F0aW9uLS1uZXh0XCIsXHJcblx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gJzxhIGNsYXNzPVwiYmFubmVyX19kb3RcIj48L2E+JzsgXHJcblx0XHRcdH0sXHJcblx0XHRcdGFwcGVuZERvdHM6ICcuYmFubmVyX19kb3RzJ1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IHRhYnMgPSBmdW5jdGlvbiAgKCkge1xyXG5cdFx0JCgnLnRhYnMtbmF2aWdhdGlvbl9faXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IHRhYk5hbWUgPSAkKHRoaXMpLmF0dHIoJ3Nob3ctdGFiJyksXHJcblx0XHRcdFx0XHR0YWJzQm9keSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYnMnKS5maW5kKCcudGFic19fYm9keScpWzBdLFxyXG5cdFx0XHRcdFx0dGFiID0gJCh0YWJzQm9keSkuZmluZCgnLicgKyB0YWJOYW1lKTtcclxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygndGFicy1uYXZpZ2F0aW9uX19pdGVtLS1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCd0YWJzLW5hdmlnYXRpb25fX2l0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0XHQkKHRhYikuYWRkQ2xhc3MoJ3RhYi0tYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygndGFiLS1hY3RpdmUnKTtcclxuXHRcdFx0aWYgKCQodGFic0JvZHkpLmZpbmQoJyAuanMtcHJvZHVjdHMtbGluZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKCcuanMtcHJvZHVjdHMtbGluZS1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uICAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnNsaWNrKCdyZWZyZXNoJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JCgnLmpzLXByb2R1Y3RzLXByZXZfX3NsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5zbGljaygncmVmcmVzaCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdFx0XHRsZXQgcHJvZHVjdFByZXZTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JCgnLmpzLXByb2R1Y3QtcHJldl9fc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoaWR4KSB7XHJcblx0XHRcdFx0XHRsZXQgY2Fyb3VzZWxJZCA9ICdjYXJvdXNlbCcgKyBpZHg7XHJcblx0XHRcdFx0XHR0aGlzLmNsb3Nlc3QoJy5wcm9kdWN0LXByZXYnKS5pZCA9IGNhcm91c2VsSWQ7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnNsaWNrKHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0XHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0c3dpcGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRpbmZpbml0eTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGFwcGVuZERvdHM6ICcjJyArIGNhcm91c2VsSWQgKyAnIC5wcm9kdWN0LXByZXZfX2NvbG9ycycsXHJcblx0XHRcdFx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjb2xvciA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmRhdGEoJ2NvbG9yJyk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICc8YSBjbGFzcz1cInByb2R1Y3QtcHJldl9fY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICcgIFwiID48L2E+JztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblxyXG5cdGxldCBwcm9kdWN0TGluZVNsaWRlciA9IGZ1bmN0aW9uICAoKSB7XHJcblx0XHQkKCcuanMtcHJvZHVjdHMtbGluZS1zbGlkZXInKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdHJlc3BvbnNpdmU6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRicmVha3BvaW50OiAxMTM5LFxyXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0XHRcdFx0aW5maW5pdGU6IGZhbHNlLFxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0YXBwZW5kRG90czogJy5wcm9kdWN0cy1saW5lLXNsaWRlcl9fZG90cycsXHJcblx0XHRcdFx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCIucHJvZHVjdHMtbGluZS1zbGlkZXJfX2RvdFwiPjwvZGl2Pic7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YnJlYWtwb2ludDogNjAwLFxyXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YnJlYWtwb2ludDogNDgwLFxyXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRsZXQgcHJvZHVjdEJvcmRlckxpbmVTbGlkZXIgPSBmdW5jdGlvbiAgKCkge1xyXG5cdFx0JCgnLmpzLXByb2R1Y3RzLWJvcmRlci1saW5lLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKGlkeCkge1xyXG5cdFx0XHRsZXQgcHJvZHVjdHNCb3JkZXJMaW5lU2xpZGVySUQgPSBcInByb2R1Y3RzLWJvcmRlci1saW5lLXNsaWRlci1cIiArIGlkeDtcclxuXHRcdFx0dGhpcy5jbG9zZXN0KCcucHJvZHVjdHMtYm9yZGVyLWxpbmUtc2xpZGVyJykuaWQgPSBwcm9kdWN0c0JvcmRlckxpbmVTbGlkZXJJRDtcclxuXHRcdFx0JCh0aGlzKS5zbGljayh7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGluZmluaXRlOiBmYWxzZSxcclxuXHRcdFx0XHRwcmV2QXJyb3c6ICcjJyArIHByb2R1Y3RzQm9yZGVyTGluZVNsaWRlcklEICsgJyAucHJvZHVjdHMtYm9yZGVyLWxpbmUtc2xpZGVyX19idG4tLXByZXYnLFxyXG5cdFx0XHRcdG5leHRBcnJvdzogJyMnICsgcHJvZHVjdHNCb3JkZXJMaW5lU2xpZGVySUQgKyAnIC5wcm9kdWN0cy1ib3JkZXItbGluZS1zbGlkZXJfX2J0bi0tbmV4dCdcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgY2F0ZWdvcnlTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcuanMtY2F0ZWdvcnktc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDYsXHJcblx0XHRcdGFycm93OiBmYWxzZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IHNlbGVjdCA9IGZ1bmN0aW9uICAoKSB7XHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlbGVjdF9faGVhZGVyJyxmdW5jdGlvbiAgKCkge1xyXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzZWxlY3QtLW9wZW4nKS5zaWJsaW5ncygnLmZpbHRlcl9fcm93JykuZmluZCgnLnNlbGVjdCcpLnJlbW92ZUNsYXNzKCdzZWxlY3QtLW9wZW4nKTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZWxlY3QtbGlzdF9faXRlbScsZnVuY3Rpb24gICgpIHtcclxuXHRcdFx0bGV0IGN1cnJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zZWxlY3QnKS5maW5kKCdzZWxlY3RfX2N1cnJlbnQnKVswXTtcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ3NlbGVjdC0tb3BlbicpO1xyXG5cdFx0XHQkKGN1cnJlbnQpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IHByb2R1Y3RTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcuanMtcHJvZHVjdC1zbGlkZXItZG90cycpLnNsaWNrKHtcclxuXHRcdFx0YXNOYXZGb3I6ICcuanMtcHJvZHVjdC1zbGlkZXInLFxyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdFx0cHJldkFycm93OiAnLnByb2R1Y3Qtc2xpZGVyLWRvdHNfX2J0bi0tcHJldicsXHJcblx0XHRcdG5leHRBcnJvdzonLnByb2R1Y3Qtc2xpZGVyLWRvdHNfX2J0bi0tbmV4dCdcclxuXHRcdH0pO1xyXG5cdFx0JCgnLmpzLXByb2R1Y3Qtc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0XHRhc05hdkZvcjogJy5qcy1wcm9kdWN0LXNsaWRlci1kb3RzJyxcclxuXHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0YXJyb3dzOiBmYWxzZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0b3BlblNlYXJjaEZvcm0oKTtcclxuXHRjbGVhclNlYXJjaEZvcm0oKTtcclxuXHRiYW5uZXJTbGlkZXIoKTtcclxuXHR0YWJzKCk7XHJcblx0cHJvZHVjdFByZXZTbGlkZXIoKTtcclxuXHRwcm9kdWN0TGluZVNsaWRlcigpO1xyXG5cdHByb2R1Y3RCb3JkZXJMaW5lU2xpZGVyKCk7XHJcblx0Y2F0ZWdvcnlTbGlkZXIoKTtcclxuXHRzZWxlY3QoKTtcclxuXHRwcm9kdWN0U2xpZGVyKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4gICAgfSk7Il19
