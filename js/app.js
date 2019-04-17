var currentInterval;

(function () {
  onPageLoad();
  setupSlick();
  setupPulseArrowScroller();
  setupContactClick();
}());

function onPageLoad() {
  setTimeout(function () {
    titleOverlaySlideDown();
  }, 500);

  setTimeout(function () {
    diminsionTypeTextStart();
    headerFadeIn();
  }, 1500);
}

function setupPulseArrowScroller() {
  $('#pulseArrowScroller').click(function () {
    var el = $('#menuList').children().get(0);
    menuItemClick('aboutMeSection', el, true);
  })
}

function titleOverlaySlideDown() {
  var overlay = $('#titleOverlay');
  var afterWidth = window.getComputedStyle(document.querySelector('#titleOverlay'), ':after').width.split('p')[0];
  var finalWidth = overlay.width() + parseInt(afterWidth);
  var width = '-' + finalWidth + 'px';
  overlay.css({
    left: width,
    display: 'block'
  });
  overlay.animate({
    left: '0'
  }, 750);
}

function headerFadeIn() {
  $('#pageHeader').fadeIn();
}

var lastScrollTop = 0;
$(window).scroll(function () {
  var currentScrollTop = $(document).scrollTop();
  slideUpDownHeader();
  dividerSlideIn();
});

function slideUpDownHeader() {
  var currentScrollTop = $(document).scrollTop();
  var pageHeaderHeight = $('#pageHeader').outerHeight();
  if (($('#pageHeader').hasClass('up-scroll') || $('#pageHeader').hasClass('top')) && currentScrollTop > lastScrollTop) {
    $('#pageHeader').removeClass('up-scroll top').addClass('down-scroll');
    $('#pageHeader').animate({
      top: '-' + pageHeaderHeight + 'px'
    }, 500);
  } else if ($('#pageHeader').hasClass('down-scroll') && currentScrollTop < lastScrollTop) {
    $('#pageHeader').removeClass('down-scroll').addClass('up-scroll');
    $('#pageHeader').animate({
      top: '0'
    }, 500);
  }
  lastScrollTop = currentScrollTop;
  if (lastScrollTop === 0) {
    $('#pageHeader').removeClass('up-scroll').addClass('top');
  }
}

function dividerSlideIn() {
  var currentScrollTop = $(document).scrollTop();
  var pageBottom = currentScrollTop + $(window).height();
  var dividerPosition = $('#dividerOverlay').offset().top;
  if (dividerPosition < pageBottom && !$('#dividerOverlay').hasClass('showing')) {
    $('#dividerOverlay').animate({
      width: '0%'
    }, 1750);
    $('#dividerOverlay').addClass('showing');
  }
}

function menuClick() {

  var menu = $('.menu');
  var menuButton = $('.menu-button');

  if (menuButton.hasClass('menu-button-open')) {
    menuButton.removeClass('menu-button-open');
    menu.fadeOut();
  } else {
    menuButton.addClass('menu-button-open');
    menu.css("display", "flex")
      .hide()
      .fadeIn();
  }
}

function menuItemClick(scrollTo, el, skipMenuClose) {

  $('#menuList').find('.current-section').removeClass('current-section');
  $(el).find('a').addClass('current-section');

  if (!skipMenuClose) {
    menuClick();
  }


  var scrollEl = $('#' + scrollTo);

  $('html, body').animate({
    scrollTop: scrollEl.offset().top
  }, 1000);
}

function setupSlick() {
  $('.quote-slick').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800
  });
}

function setupContactClick() {
  $('#contactMeContainer').click(function () {
    var el = $('#menuList').children().get(3);
    menuItemClick('contactSection', el, true);
  });
}