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
