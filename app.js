const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

//display mobile menu
const mobileMenu = () => {
    console.log("inside function");
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    console.log("function end");
}

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling

const highlightMenu = () => {
    const elem=document.querySelector('.highlight');
    const homeMenu=document.querySelector('#home-page');
    const aboutMenu=document.querySelector('#about-page');
    const serviceMenu=document.querySelector('#services-page');

    let scrollPos = window.scrollY

    // add highlight class to menu items

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400){
        homeMenu.classList.remove('highlight')
        aboutMenu.classList.add('highlight')
        serviceMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight')
        serviceMenu.classList.add('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);











