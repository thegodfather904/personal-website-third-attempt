function skillsCalloutFader(){
    $('#skillsCalloutContainer').children('span').each(function(){
        $(this).fadeIn('1000', function(){
            $(this).delay(2000).fadeOut('1000');
        });
    });
}