

// Animation
TweenMax.staggerFrom("nav ul li", 1, {
  opacity: 0,
  x: -20,
  ease: Power3.easeInOut
}, 0.08);

TweenMax.from(".logo",1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.fromTo(".menu-btn a",1, {
  opacity: 0,
  x: -40,
  ease: Expo.easeIn,

},({
  opacity: 1,
  x: 00,
  delay: 1
}));

TweenMax.from(".banner-content ul li .video-btn",1,{
  opacity: 0,
  delay: 1,
  x: -200,
  ease: Expo.easeInOut
})
TweenMax.from(".banner-content ul li .btn-2",1,{
  opacity: 0,
  delay: 2,
  x: -200,
  ease: Elastic.easeOut.config(1,0.3)
})


$(document).ready(function () {


  // Mobile Menu
  $(".nav-btn").click(function(){
    $(".menu").slideToggle(1000);
  })

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



