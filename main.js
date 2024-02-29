window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.header').style.position = 'fixed';
        document.querySelector('.header').style.paddingTop = "0px";
        document.querySelector('.header').style.paddingBottom = "0px";
        document.querySelector('.container-header').style.background = '#030B15';
        document.querySelector('.container-header').style.position = 'fixed';
        document.querySelector('.container-header').style.animation='1000ms ease-in-out upTodown';
    } else {
        document.querySelector('.header').style.position = 'relative';
        document.querySelector('.header').style.paddingTop = "60px";
        document.querySelector('.header').style.paddingBottom = "60px";
        document.querySelector('.container-header').style.backgroundColor = 'transparent';
        document.querySelector('.container-header').style.position = 'relative';
        document.querySelector('.container-header').style.animation='none';
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var over=document.body;

    var homeSub = document.querySelector('.home-sub');
    var home = document.querySelector('.home-2');
    home.style.display = 'none';

    var blogSub = document.querySelector('.blog-sub');
    var blog = document.querySelector('.blog-2');
    blog.style.display = 'none';

    var headerBars=document.querySelector('.header-bars');
    var subHeader=document.querySelector('.sub-header');

    var close=document.querySelector('.close-btn');
    var container=document.querySelector('.menu-backdrop')

    headerBars.addEventListener('click',function(){
        event.stopPropagation();
            subHeader.style.display='block'
            subHeader.style.transform='translateX(0%)';
            container.style.visibility='visible';
            over.style.overflow='hidden';
            subHeader.style.overflow= 'auto';
    })
    close.addEventListener('click',function(){
        container.style.visibility='hidden';
        subHeader.style.transform='translateX(101%)';
        over.style.overflow='auto';
    })
    container.addEventListener('click',function(){
        container.style.visibility='hidden';
        subHeader.style.transform='translateX(101%)';
        over.style.overflow='auto';
    })



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