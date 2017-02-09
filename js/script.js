(function($) {

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// if ($('.lnk-fancybox').length){
 //  	$('.lnk-fancybox').fancybox({
 //  		wrapCSS: "my-fancy-popup",
 //  		helpers: {
 //  			overlay: {
 //  				locked: false
 //  			}
 //  		}
 //  	});
 //  }; 

  //slick slider
  //documentation http://kenwheeler.github.io/slick/
  $('.review-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$('.special-offers-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}
		]
	});

	//выпадашка для меню
	$(".nav-main__lnk").click(function () {
		if ($(this).hasClass('noslide')) {
			return true;
		}else{
			$(this).parent().toggleClass("droping");
			return false;
		}
	});


	//меню услуги
	$(".services-btn").click(function () {
		$(this).parent().toggleClass("show");
		// $( ".block" ).animate({ "left": "-=150px" }, "slow" );
		$(".services-menu").slideToggle();
	});


	/* детальный просмотр */


  $('.goods-detail__img-big').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.goods-detail__img-preview'
  });

  $('.goods-detail__img-preview').slick({
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	asNavFor: '.goods-detail__img-big',
  	dots: false,
  	arrows: false,
  	centerMode: false,
  	focusOnSelect: true,
  	responsive: [
  	{
  		breakpoint: 470,
  		settings: {
  			slidesToShow: 4,
  			slidesToScroll: 1
  		}
  	}
  	]
  });  

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	// function carousel_1() {
	// 	var owl = $(".carousel");
	// 	owl.owlCarousel({
	// 		items : 1,
	// 		loop : true,
	// 		autoHeight : true,
	// 		dots : true,
	// 		singleItem : true
	// 	});
	// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 		if (e.deltaY > 0) {
	// 			owl.trigger("owl.prev");
	// 		} else {
	// 			owl.trigger("owl.next");
	// 		}
	// 		e.preventDefault();
	// 	});
	// 	$(".next_button").click(function() {
	// 		owl.trigger("owl.next");
	// 	});
	// 	$(".prev_button").click(function() {
	// 		owl.trigger("owl.prev");
	// 	});
	// 	owl.on("resized.owl.carousel", function(event) {
	// 		var $this = $(this);
	// 		$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
	// 	});
	// 	setTimeout(function() {
	// 		owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
	// 	}, 5000);
	// };
	// carousel_1();
}(jQuery));
