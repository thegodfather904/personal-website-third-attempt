$(function(){
  addClickEvents();
});

function addClickEvents(){
  menuClick();
}

function menuClick(){
  $('.menu-button').click(function(){

    var menu = $('.menu');
    var menuButton = $('.menu-button');

    if(menuButton.hasClass('menu-button-open')){
      menuButton.removeClass('menu-button-open');
      menu.fadeOut();
    }
    else{
      menuButton.addClass('menu-button-open');
      menu.fadeIn();
    }

  });
}

function skillsSquareClick(element){
  $(element).addClass('active-skill');

  $('.skills-section-inner .skills-column').children().each(function(index){
    if(!$(this).hasClass('active-skill')){
      $(this).delay(100 * index).animate({
        opacity: 0
      })
    }
  });

  setTimeout(function(){
    $('.skills-section-inner').addClass('skill-is-active');
    $(element).animate({
      width: '100%',
      height: '100%'
    });
    $(element).find('.skills-square-content').fadeOut();
  }, 1000);

}
