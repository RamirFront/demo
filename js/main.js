const hamburder = document.querySelector('.header-content--logo');
const nav = document.querySelector('.header-content--nav');
const overlay = document.querySelector('.overlay');
const overlayPopUp = document.querySelector('.overlay-popUp');
const btn = document.querySelector('.btn-ac');
const popUp = document.querySelector('.popUp');
const popBtn = document.querySelector('.popUp-block--btn');
const btnDis = document.querySelector('.btn-dis');
const navLink = document.querySelector('.header-content--nav-link')

// burger
hamburder.addEventListener("click", ()=>{
    hamburder.classList.toggle("active");
    nav.classList.toggle("active");
    overlay.classList.toggle('active');
});

navLink.addEventListener('click', ()=>{
    hamburder.classList.remove('active');
    overlay.classList.remove('active');
    nav.classList.remove('active');
});

// pop Up
btnDis.addEventListener('click', ()=>{
    popUp.classList.toggle('active');
    overlayPopUp.classList.toggle('active');
});

btn.addEventListener('click', ()=>{
    popUp.classList.toggle('active');
    overlayPopUp.classList.toggle('active');
});

popBtn.addEventListener('click', ()=>{
    popUp.classList.remove('active');
    overlayPopUp.classList.remove('active');
});

overlayPopUp.addEventListener("click", ()=>{ 
    hamburder.classList.remove("active");
    nav.classList.remove('active');
    overlayPopUp.classList.remove('active');
    popUp.classList.remove('active');
});

// overlay

overlay.addEventListener("click", ()=>{ 
    hamburder.classList.remove("active");
    nav.classList.remove('active');
    overlay.classList.remove('active');
});
