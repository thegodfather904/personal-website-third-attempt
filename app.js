var currentInterval;

function menuClick() {

  var menu = $('.menu');
  var menuButton = $('.menu-button');

  if (menuButton.hasClass('menu-button-open')) {
    menuButton.removeClass('menu-button-open');
    menu.fadeOut();
  } else {
    menuButton.addClass('menu-button-open');
    menu.fadeIn();
  }
}

function menuItemClick(scrollTo, el) {

  $('#menuList').find('.current-section').removeClass('current-section');
  $(el).find('a').addClass('current-section');

  menuClick();

  var scrollEl = $('#' + scrollTo);

  $('html, body').animate({
    scrollTop: scrollEl.offset().top
  }, 1000);
}

function skillsSquareClick(element, skillsColumnIndex) {
  $(element).addClass('active-skill');

  $('.skills-section-inner .skills-column').children().each(function (index) {
    if (!$(this).hasClass('active-skill')) {
      $(this).delay(100 * index).animate({
        opacity: 0
      });
    }
  });

  setTimeout(function () {
    $('.skills-section-inner .skills-column').each(function (index) {
      if (index !== skillsColumnIndex) {
        $(this).fadeOut();
      }
    });
  }, 400);

  setTimeout(function () {
    $('.skills-section-inner').addClass('skill-is-active');
    $(element).animate({
      width: '100%',
      height: '100%'
    }, function () {
      currentInterval = generateParticelForId($(element).find('canvas').attr('id'));
    });
    $(element).find('.skills-square-content').fadeOut();
    $(element).find('.skills-square-inner-hidden').fadeIn();
  }, 1000);

}

$(".skills-close-container").click(function (event) {
  event.stopPropagation();

  clearInterval(currentInterval);

  var skillsSquare = $(this).closest('.skills-square');
  skillsSquare.find('.skills-square-inner-hidden').fadeOut();

  skillsSquare.animate({
    width: '240px',
    height: '240px',
  }, 300);
  skillsSquare.css({
    overflow: 'initial'
  });

  setTimeout(function () {
    $('.skills-section-inner .skills-column').each(function (index) {
      $(this).fadeIn();
    });
  }, 400);

  setTimeout(function () {
    skillsSquare.removeClass('active-skill');
    skillsSquare.find('.skills-square-content').fadeIn();
  }, 400);

  setTimeout(function () {
    $('.skills-section-inner .skills-column').children().each(function (index) {
      if (!$(this).hasClass('active-skill')) {
        $(this).delay(100 * index).animate({
          opacity: 1.0
        });
      }
    });

    $('.skills-section-inner').removeClass('skill-is-active');
  }, 400);
});
