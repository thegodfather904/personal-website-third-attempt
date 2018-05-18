$('#personalSkillCreative').mouseenter(function (e) {
    $('.overlay').css("display", "flex")
        .hide()
        .fadeIn();;
    var img = $('.img');
    img.css({
        position: "absolute",
        left: e.pageX - 20,
        top: e.pageY - 20
    });
    img.fadeIn();
    // $('body').append('<div class="overlay">TRESTY</div>');
});

// $('.img').mouseleave(function (e) {
//     $(this).fadeOut();
//     $('.overlay').fadeOut();
// });