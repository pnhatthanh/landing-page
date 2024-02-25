window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.header').style.position = 'fixed';
        document.querySelector('.header').style.paddingTop = "0px";
        document.querySelector('.header').style.paddingBottom = "0px";
        document.querySelector('.container-header').style.background = '#030B15';
        document.querySelector('.container-header').style.position = 'fixed';
    } else {
        document.querySelector('.header').style.position = 'relative';
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.header').style.paddingTop = "60px";
        document.querySelector('.header').style.paddingBottom = "60px";
        document.querySelector('.container-header').style.backgroundColor = 'transparent';
        document.querySelector('.container-header').style.position = 'relative';
    }
});