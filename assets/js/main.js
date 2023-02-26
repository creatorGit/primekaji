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