// start nav menu

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "390px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// end nav menu




//  start h1 Scroll Animation in landing 
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

//  end h1 Scroll Animation in landing 





// start counter 
let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// end counter 






// start swiper js
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    520:{
      slidesPerView:2,
    },
    950:{
      slidesPerView:3,
    },
  },
});
// end swiper js
