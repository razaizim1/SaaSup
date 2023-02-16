$(document).ready(function () {
  // Mobile Menu
  $(".nav-btn").click(function () {
    $(".menu").slideToggle(1000);
  });

  // MagnificPopUp
  $(".youtube-popup").magnificPopup({
    type: "iframe", // this is default type
  });
});

// PURE COUNTER
new PureCounter();

// Animation
TweenMax.staggerFrom(
  "nav ul li",
  1,
  {
    opacity: 0,
    x: -5,
    delay: 2,
    ease: Bounce.easeInOut,
  },
  0.08
);

TweenMax.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

// TweenMax.fromTo(
//   ".menu-btn a",
//   1,
//   {
//     opacity: 0,
//     x: -40,
//     ease: Expo.easeIn,
//   },
//   {
//     opacity: 1,
//     x: 00,
//     delay: 1,
//   }
// );

// TweenMax.from(".banner-content ul li .video-btn", 1, {
//   opacity: 0,
//   x: -200,
//   ease: Expo.easeInOut,
// });
// TweenMax.from(".banner-content ul li .btn-2", 1, {
//   opacity: 0,
//   delay: 1,
//   x: -200,
//   ease: Elastic.easeOut.config(1, 0.3),
// });

const tl = gsap.timeline({
  ease: "Expo.easeOut",
});

tl.fromTo(".box", { width: "100%" }, { width: "5%", duration: 1 });
tl.fromTo(
  ".box2",
  { width: "100%" },
  { width: "0", duration: 1, ease: "Expo.easeIn" }
);

tl.fromTo(
  ".navbox",
  { width: "100%", opacity: "1" },
  { opacity: "0", width: "0%", duration: 1, ease: "Expo.easeIn" },
  "-=1"
);
tl.fromTo(
  ".btn-box",
  { width: "100%", opacity: "1" },
  { opacity: "0", width: "0%", duration: 1, ease: "Expo.easeIn" },
  "-=1"
);
tl.fromTo(
  ".box",
  { width: "5%" },
  { width: "0", duration: 1, ease: "Expo.easeIn" },
  "-=1"
);

tl.fromTo(
  ".banner-area",
  { opacity: 0 },
  { opacity: 1, ease: "back.out(1.7)" }
);

tl.fromTo(".banner-content", { x: "-100", opacity: 0 }, {x: "0" ,opacity: 1, ease: "back.out(1.7)" });
// tl.fromTo(".banner-img", { y: "100", opacity: 0 }, {y: "0" ,opacity: 1, ease: "back.out(1.7)" });

const header = document.querySelector(".gsap-heading");
const letter = header.textContent.split("");

header.textContent = "";
letter.forEach((letter) => {
  header.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay:2.7, stagger: 0.05, ease: "back.out" }
);



// const tl2 = gsap.timeline({
//   default: { duration: 0.75, ease: "Power3.easeOut" },
// });

// tl2.fromTo(
//   ".gsap-img",
//   { scale: 1.4, borderRadius: "0rem" },
//   {
//     scale: 1,
//     borderRadius: "2rem",
//     delay: 4,
//     duration: 2.5,
//     ease: "elastic.out(2.5,2",
//   }
// );

// var mySplitText = new SplitText(".gsap-heading",{type: "words,chars"});
// console.log(mySplitText.words)
