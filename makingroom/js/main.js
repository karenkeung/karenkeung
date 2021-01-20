$(document).ready(function(){
  $('.gallery').slick({
      centerMode: true,
      arrows: false,
	  centerPadding: '200px',
	  speed: 400,
	  infinite: false,
	  // prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
	  slidesToShow: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '120px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 790,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '60px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 660,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '36px',
	        slidesToShow: 1
	      }
	    }
	  ]
	  });

	$('.slick-slider').on('click', '.slick-slide', function (e) {
	    e.stopPropagation();
	    var index = $(this).data("slick-index");
	    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
	      $('.slick-slider').slick('slickGoTo', index);
	    }
	});

	
	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
		img.setAttribute('src', img.getAttribute('data-src'));
		img.onload = function() {
			img.removeAttribute('data-src');
		};
	});

});

