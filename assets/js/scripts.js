$(document).ready(function () {
  //COUNTER UP

  jQuery(document).ready(function ($) {
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  });
});

const tl = gsap.timeline({
  ease: "Expo.easeOut",
});

tl.fromTo(".box",{width:"100%"},{width:"0", duration: 1, delay: 1})
