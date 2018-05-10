var t = '';
var random;
var dotBlink = '';
for(x = 3.5; x < 1400; x+= 40.6){
    for(y = 3.5; y < 360; y+= 40.6){
        random = Math.random();
        if(random > 0.8){
            random = ' dot' + (Math.floor(Math.random() * 10) + 1);
        }else{
            random = '';
        }
        t += '<circle class="st0' + random + '" cx="' + x.toFixed(1)  + '" cy="' + y.toFixed(1) + '" r="2"/> \n';
    }
}

console.log(t);

//ps1
var ps1 = document.getElementById("personalSkill1");
var ps1Length = ps1.getTotalLength();
ps1.style.strokeDasharray = ps1Length;
ps1.style.strokeDashoffset = ps1Length;

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

        var draw = ps1Length * percentScrolled;

        // Reverse the drawing (when scrolling upwards)
        ps1.style.strokeDashoffset = ps1Length - draw;
    }else if (personalPosition < pageBottom && pageBottom >= personalPositionBottom) {
        $('#personalSkillCreative').fadeIn();
        $('#personalSkillsSvg').fadeOut();
    }



}