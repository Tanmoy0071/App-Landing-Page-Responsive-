$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    }
    else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  $(".features-carousel").owlCarousel({
    margin: 0,
    loop: true,
    autoplay:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $.scrollIt({
    topOffset: -50,
  });
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
