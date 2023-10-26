// Owl Carousel Menu Item Script
function carousel(className, items){
  $(document).ready(function () {
    let owl = $(className);
    owl.owlCarousel({
      loop: true,
      items: items,
      dots: false,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          loop: true,
        },
        576: {
          items: 2,
          loop: true,
        },
        768: {
          items: 3,
          loop: true,
        },
        1000: {
          items: items,
          loop: true,
        },
      },
    });
    // Go to the next item
    $(".owl-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    // Go to the previous item
    $(".owl-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
  });
}
carousel(".popular_menu_card_block .owl-carousel", 3);
carousel(".review_card_block .owl-carousel", 4);
carousel(".menu_item_block .owl-carousel", 4);

// Navbar active Script
const navBar = document.querySelector(".navbar");
const navbarTogglerBtn = document.querySelector(".navbar-toggler");
let isClicked = true;
window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});
navbarTogglerBtn.addEventListener('click', () => {
  if(isClicked){
    navBar.classList.add("show");
    isClicked = false;
  } else{
    navBar.classList.remove("show");
    isClicked = true;
  }
})

// JOSH.JS Initialization

const josh = new Josh(
  {
    // DOM CSS class to Animate, default is "josh-js"
    initClass: "josh-js",

    // Animation CSS class from Animate.css library
    animClass: "animate__animated",

    // Element distance of viewport to triggering the animation. default is 0.2 means 20% of element view animation will trigger
    offset: 0.2,

    // Animation will trigger on Mobile or not. Default is true
    animateInMobile: true,

    // Animation will trigger on newly added element or not. Default is false
    onDOMChange: false,
  }
);