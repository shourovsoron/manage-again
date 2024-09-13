const primaryNav=document.querySelector(".primary-navigation");
const MobilToggleBtn=document.querySelector(".mobile-menu-btn");
const MobileBtn=document.querySelector(".mobile-menu-btn img");

MobilToggleBtn.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("data-visible");

    if(primaryNav.hasAttribute("data-visible")){
      MobileBtn.src="./images/icon-close.svg"
    }else{
      
      MobileBtn.src="./images/icon-hamburger.svg"
    }
})





// for other======

