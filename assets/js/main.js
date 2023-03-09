//smooth scrolling in page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

$(document).ready(function() {
  var burger = $('#target-burger');
  var nav = $('#nav-menu');
  burger.click(function(e) {
    nav.addClass('open');
    $(body).css('overflow', 'hidden');
    e.preventDefault();
  });
  $('.menu-close-btn').click(function(e) {
    nav.removeClass('open');
    $(body).css('overflow', '');
    e.preventDefault();
  });
  $('.menu-mask').click(function(e) {
    nav.removeClass('open');
    $(body).css('overflow', '');
    e.preventDefault();
  });
});
$(window).scroll(function() {
  var headerTxt = $('.header-txt-wrap');
  var navHeight = $('#header').innerHeight();
  if($(window).scrollTop() > headerTxt.innerHeight() ) {
    $('#header').addClass('fixed');
    $('.l-main').css('margin-top',navHeight);
  } else {
    $('#header').removeClass('fixed');
    $('.l-main').css('margin-top',0);
  }

  if($(window).scrollTop() > 150) {
    $('#backToTop').fadeIn();
  } else {
    $('#backToTop').fadeOut();
  }
});
$('#backToTop').click(function(e){
  e.preventDefault();
  $('html,body').animate({'scrollTop': 0}, 'slow');
});

// =============================== Modals =================================
$(document).ready(function(){
  $('.modalShowBtn').on('click', function(){
    var target = $(this).attr('data-target');
    $(target).addClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap').removeClass('visible');
  });

  var modalWidth = 1200;
  var modalHeight;

  setDimensions();

  function setDimensions() {
    modalHeight = $(window).innerHeight() - 120;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     modalWidth = $(window).innerWidth() - 30;
     modalHeight = $(window).innerHeight() - 30;
    }
    $('.modal').css('max-width', modalWidth);
    $('.modal').css('max-height', modalHeight);
  }
  $('.close-btn').on('click', function(){
    $('.modal-wrap').removeClass('visible');
  });

  $('.crossBtn').on('click', function(){
    $('.modal-wrap').removeClass('visible');
  });
});
// ============================== End of Modals ===================================

//パスワードの表示・非表示機能
function pushHideButton() {
  var txtPass = document.getElementById("textPassword");
  var btnEye = document.getElementById("buttonEye");
  if (txtPass.type === "text") {
    txtPass.type = "password";
    btnEye.className = "fa fa-eye toggle-eyes";
  } else {
    txtPass.type = "text";
    btnEye.className = "fa fa-eye-slash toggle-eyes";
  }
}
function pushHideButton2() {
  var txtPass = document.getElementById("textPassword-2");
  var btnEye = document.getElementById("buttonEye-2");
  if (txtPass.type === "text") {
    txtPass.type = "password";
    btnEye.className = "fa fa-eye toggle-eyes";
  } else {
    txtPass.type = "text";
    btnEye.className = "fa fa-eye-slash toggle-eyes";
  }
}


function openTab(evt, tabname) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

class Pagination {
  constructor(dotsSelector) {
    this.dotsSelector = dotsSelector;

    this.maxLinks = 5;
    this.maxOffset = Math.ceil(this.maxLinks / 2);

    document.querySelector(this.dotsSelector).innerHTML = "";
  }

  generate(currentSlide, countSlides) {
    this.currentSlide = currentSlide + 1;
    this.countSlides = countSlides;

    this.offset_left = this.currentSlide > this.maxOffset;
    this.offset_right = this.currentSlide <= this.countSlides - this.maxOffset;

    if (this.countSlides > this.maxLinks) {
      if (this.currentSlide <= Math.floor(this.countSlides / 2)) {
        this.generateLeftPosition();
      } else if (this.currentSlide > Math.floor(this.countSlides / 2)) {
        this.generateRightPosition();
      }
    } else {
      this.generateDefault();
    }
  }

  generateDot(i, text, className = false, current = false) {
    var dot = document.createElement("li");

    if (className) {
      dot.classList.add(className);
    }

    if (i != "" && this.currentSlide == i) {
      dot.classList.add("active");
    }

    dot.id = i - 1;
    dot.innerText = text;

    document.querySelector(this.dotsSelector).appendChild(dot);
  }

  generateLeftPosition() {
    if (this.currentSlide != 1) {
      for (
        var i = this.currentSlide - 1;
        i < this.currentSlide - 1 + this.maxOffset;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
      this.generateDot("", "...");
      this.generateDot(this.countSlides, this.countSlides, "dot");
    } else {
      for (
        var i = this.currentSlide;
        i < this.currentSlide + this.maxOffset;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
      this.generateDot("", "···");
      this.generateDot(this.countSlides, this.countSlides, "dot");
    }
  }

  generateRightPosition() {
    if (this.currentSlide != this.countSlides) {
      this.generateDot(1, 1, "dot");
      this.generateDot("", "···");
      for (
        var i = this.currentSlide - 1;
        i < this.currentSlide - 1 + this.maxOffset;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
    } else {
      this.generateDot(1, 1, "dot");
      this.generateDot("", "···");
      for (
        var i = this.countSlides + 1 - this.maxOffset;
        i <= this.countSlides;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
    }
  }

  generateDefault() {
    for (var i = 1; i < this.countSlides + 1; i++) {
      this.generateDot(i, i, "dot");
    }
  }
}

$(document).ready(function() {
  if ($("#defaultOpen")) {
    document.getElementById("defaultOpen").click();
    $('.tab').change(function(event){
      openTab(event, $(this).val())
    })
  }

  if ($("#g2-slider")) {
    var g2Slider = $("#g2-slider");

    function addSliderListeners() {
      var dots = document.querySelectorAll(".dot");
      dots.forEach(function (el) {
        el.addEventListener("click", function () {
          g2Slider.slick("slickGoTo", el.id);
        });
      });
    }

    g2Slider.on("init", function (event, slick) {
      var pag = new Pagination("#g2-slider-pagination-list");
      pag.generate(slick.currentSlide, slick.slideCount);
      addSliderListeners();
    });

    g2Slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var pag = new Pagination("#g2-slider-pagination-list");
        pag.generate(nextSlide, slick.slideCount);

        addSliderListeners();
      }
    );

    /* slider initialization */
    g2Slider.slick({
      infinite: true,
      adaptiveHeight: true,
      fade: true,
      speed: 500,
      cssEase: "linear",
      prevArrow: $(".g2-slider-pagination .prev"),
      nextArrow: $(".g2-slider-pagination .next")
    });
  }
});

$(function () {
	var winWidth;

	function getWidth() {
		winWidth = $(window).width();
	}

	function showItemOnInit(winWidth) {
		$(".slice-articles").each(function () {
			$(this).children('li').slice(0, 20).slideDown();
      if ($(".slice-articles" + " .article-wrap:hidden").length == 0) {
        $(".btn-load").fadeOut('slow'); // Change to your need
      }
		});
	}

	function showItem(winWidth, obj) {
		// console.log(winWidth);
		$this = $(obj);
		$grid = $this.data('grid');
    // console.log($grid);
		$("." + $grid + " .article-wrap:hidden").slice(0, 4).slideDown();
	}


	getWidth();
	showItemOnInit(winWidth);

	$(".btn-load").on('click', function (e) {
    var currentHeight = $('.slice-articles').height();
    var btnWrapHeight = $('.btn-load-wrap').height();
    var headerHeight = $('#header').height();

    // console.log(currentHeight);
		e.preventDefault();
		getWidth();

		showItem(winWidth, this);
		$grid = $(this).data('grid');
    
		if ($("." + $grid + " .article-wrap:hidden").length == 0) {
			$(this).fadeOut('slow');
		}
    var newHeight = $('.slice-articles').height();
    
    var scrollHeight = newHeight - currentHeight + btnWrapHeight + headerHeight;
    console.log(scrollHeight);
		$('html,body').animate({
			scrollTop: $(this).offset().top - scrollHeight
		}, 1500);
	});
});


window.addEventListener('DOMContentLoaded', (event) => {
  let mySwiper1 = new Swiper('.prime-blog-container', {
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    slidesPerView: 3.5,
    loop:false,
    watchOverflow: true,
     breakpoints: {
      slidesPerView: 1,
      spaceBetween: 10,
      240: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 45
      },
    }
  });
});

$(document).ready(function() {
  $('.search-sel-btn').click(function() {
    $(this).toggleClass('active');
    var target = $(this).attr('data-target');
    if ($(target).height() == 0) {
      var height = $(target).children('.inner').innerHeight();
      $(target).css('max-height', height);
    } else {
      $(target).css('max-height', '');
    }    
  });

  $('.search-close-btn').click(function() {
    $(this).parent().parent().css('max-height', '');
  })
});