$('#personalSkillCreative').mouseenter(function (e) {
    $('.overlay').css("display", "flex")
        .hide()
        .fadeIn();
    var img = $('.img');
    img.css({
        position: "absolute",
        left: e.pageX - 20,
        top: e.pageY - 20
    });
    img.fadeIn();
});

$('.img').mouseleave(function (e) {
    $(this).fadeOut();
    $('.overlay').fadeOut();
});