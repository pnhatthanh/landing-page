window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.header').style.position = 'fixed';
        document.querySelector('.header').style.paddingTop = "0px";
        document.querySelector('.header').style.paddingBottom = "0px";
        document.querySelector('.container-header').style.background = '#030B15';
        document.querySelector('.container-header').style.position = 'fixed';
    } else {
        document.querySelector('.header').style.position = 'relative';
        document.querySelector('.header').style.paddingTop = "60px";
        document.querySelector('.header').style.paddingBottom = "60px";
        document.querySelector('.container-header').style.backgroundColor = 'transparent';
        document.querySelector('.container-header').style.position = 'relative';
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var homeSub = document.querySelector('.home-sub');
    var home = document.querySelector('.home-2');

    var blogSub = document.querySelector('.blog-sub');
    var blog = document.querySelector('.blog-2');

    homeSub.addEventListener('click', function() {
        if (home.style.display == 'none') {
            homeSub.style.transform= 'rotate(90deg)';
            home.style.display = 'block';
        } else {
            home.style.display = 'none';
            homeSub.style.transform= 'rotate(0)';
        }
    });

   blogSub.addEventListener('click', function() {
        if (blog.style.display == 'none') {
            blog.style.display = 'block';
            blogSub.style.transform= 'rotate(90deg)';
        } else {
            blog.style.display = 'none';
            blogSub.style.transform= 'rotate(0)';
        }
    });


})