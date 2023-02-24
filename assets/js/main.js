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
});