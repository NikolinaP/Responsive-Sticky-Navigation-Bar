let nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop>20){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
})

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navigation = document.querySelector('.nav');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    nav.classList.toggle('white');
})