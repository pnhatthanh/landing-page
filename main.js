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
    home.style.display = 'none';

    var blogSub = document.querySelector('.blog-sub');
    var blog = document.querySelector('.blog-2');
    blog.style.display = 'none';

    var headerBars=document.querySelector('.header-bars');
    var subHeader=document.querySelector('.sub-header');
    subHeader.style.display = 'none';

    var close=document.querySelector('.close-btn');
    var container=document.querySelector('.menu-backdrop')

    headerBars.addEventListener('click',function(){
        event.stopPropagation();
        if(subHeader.style.display == 'none'){
            subHeader.style.display='block'
            container.style.visibility='visible';
        }else {
            container.style.visibility='hidden';
            subHeader.style.display = 'none';
        }
    })
    close.addEventListener('click',function(){
        container.style.visibility='hidden';
        subHeader.style.display = 'none';
    })
    container.addEventListener('click',function(){
        container.style.visibility='hidden';
        subHeader.style.display = 'none';
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