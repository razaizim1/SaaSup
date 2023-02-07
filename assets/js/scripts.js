$(document).ready(function () {
  // MagnificPopUp

  $(".youtube-popup").magnificPopup({
    type: "iframe", // this is default type
  });
});

const tl = gsap.timeline({
  ease: "Expo.easeOut",
});

tl.fromTo(".box", { width: "100%" }, { width: "0", duration: 1, delay: 1 });

// PURE COUNTER
new PureCounter();
