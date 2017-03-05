$(function(){
  addClickEvents();
  setTimeout(moveDividerUfoLeft, 100);
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

function moveDividerUfoLeft(){
  let ufo = $('#dividerUFO');
  let width = $(document).width();
  ufo.animate({
    left: width
  }, 10000, function(){
    setTimeout(moveDividerUfoRight, 50);
  });
}

function moveDividerUfoRight(){
  let ufo = $('#dividerUFO');
  let width = $(document).width();
  ufo.animate({
    left: 0
  }, 5000, function(){
    setTimeout(moveDividerUfoLeft, 50);
  });
}
