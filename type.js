var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    if (this.loopNum < this.toRotate.length) {
        setTimeout(function () {
            that.tick();
        }, delta);
    }
    else{
        $('.typewriter-container').hide();
        $('.diminsion-title').fadeIn();
    }

};

window.onload = function () {
    var element = document.getElementById('typewriteTitle');
    var toRotate = ["hello.", "my name is tony.", "i like to", "be creative.", "build things.", "innovate.", "let's build something, together."];
    var period = 1000;
    new TxtType(element, toRotate, period);
};