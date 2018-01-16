var triangle = document.getElementById("rectangleStart");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {

    var currentScrollTop = $(document).scrollTop();
    var pageBottom = currentScrollTop + $(window).height();
    var personalPosition = $('#personalSkillsSection').offset().top;

    var personalPositionBottom = personalPosition + $('#personalSkillsSection').height();
    if (personalPosition < pageBottom && pageBottom < personalPositionBottom) {
        var amountScrolled = pageBottom - personalPosition;
        var percentScrolled = amountScrolled / $('#personalSkillsSection').height();

        var draw = length * percentScrolled;

        // Reverse the drawing (when scrolling upwards)
        triangle.style.strokeDashoffset = length - draw;
    }else if (personalPosition < pageBottom && pageBottom >= personalPositionBottom) {
        $('#personalSkillCreative').fadeIn();
        $('#personalSkillsSvg').fadeOut();
    }



}