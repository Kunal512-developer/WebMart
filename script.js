var typed = new Typed('#typed-output', {
    strings: ["Welcome to WebMart", "Most Advanced Websites And Products", "Easy To Use Templates","Responsive and Good Looking Designs","SEO Friendly Websites","Lowest And Affordable Prices"],
    typeSpeed: 60, // Speed in milliseconds per character
    startDelay: 0, // Time before typing starts
    backSpeed: 30, // Speed in milliseconds per character for backspacing
    backDelay: 500, // Time before starting to backspace
    showCursor:false,
    loop: true, // Loop the typing effect
});
var typed = new Typed('.adjective', {
    strings: ["HI I Am Kunal Sunaria","A Professional Web Developer","A Graphic Designer","A Android Developer"],
    typeSpeed: 60, // Speed in milliseconds per character
    startDelay: 0, // Time before typing starts
    backSpeed: 30, // Speed in milliseconds per character for backspacing
    backDelay: 500, // Time before starting to backspace
    showCursor:false,
    loop: true, // Loop the typing effect
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "top top",
    end: "bottom end",
    pin: true,
    scrub: 0.001,
  }
});
tl.to(".videodiv", {
  '--clip': "0%",
  ease: "Power2.easeOut",
})
gsap.registerPlugin(ScrollTrigger);
gsap.from(".heading", {
  scrollTrigger: {
    trigger: ".home",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  x: -100,
  opacity: 0,
  duration: 1,
});
gsap.from(".para", {
  scrollTrigger: {
    trigger: ".home",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  x: 100,
  opacity: 0,
  duration: 1,
});
gsap.from(".moving-text h1", {
  scrollTrigger: {
    trigger: ".home",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
});
gsap.from("img[src='Logo.png']", {
  scrollTrigger: {
    trigger: ".home",
    start: "top top", // Animation starts when .home reaches the top of the viewport
    end: "center center", // Animation ends when .home reaches the center of the viewport
    scrub: 1, // Smooth scroll-based animation
  },
  y: -100, // Move logo from 100px above its initial position
  opacity: 0, // Start with logo being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
gsap.from("#typed-output", {
  scrollTrigger: {
    trigger: ".About",
    start: "top bottom", // Animation starts when the top of .About is at the bottom of the viewport
    end: "top top", // Animation ends when the top of .About reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 50, // Move #typed-output up from below its final position
  opacity: 0, // Start with #typed-output being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
// Animate the .image section
gsap.from(".image", {
  scrollTrigger: {
    trigger: ".About",
    start: "top bottom", // Animation starts when the top of .About is at the bottom of the viewport
    end: "top top", // Animation ends when the top of .About reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  x: 100, // Move .image in from the right
  opacity: 0, // Start with .image being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
// Animate the section heading
gsap.from(".Templates h1", {
  scrollTrigger: {
    trigger: ".Templates",
    start: "top bottom", // Animation starts when the top of .Templates is at the bottom of the viewport
    end: "top center", // Animation ends when the top of .Templates reaches the center of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: -50, // Move the heading up from 50px above
  opacity: 0, // Start with the heading being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
// Animate the paragraph
gsap.from(".Templates p", {
  scrollTrigger: {
    trigger: ".Templates",
    start: "top center", // Animation starts when the top of the section reaches the center of the viewport
    end: "top top", // Animation ends when the top of the section reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 50, // Move the paragraph up from 50px below
  opacity: 0, // Start with the paragraph being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
gsap.from(".boxes", {
  scrollTrigger: {
    trigger: ".Templates",
    start: "top bottom", // Animation starts when the top of .Templates is at the bottom of the viewport
    end: "top top", // Animation ends when the top of .Templates reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 100, // Move .boxes up from 100px below
  opacity: 0, // Start with .boxes being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
gsap.from(".box", {
  scrollTrigger: {
    trigger: ".Templates",
    start: "top bottom", // Animation starts when the top of .Templates is at the bottom of the viewport
    end: "top top", // Animation ends when the top of .Templates reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 50, // Move each .box up from 50px below
  opacity: 0, // Start with each .box being invisible
  duration: 1, // Duration of the animation
  stagger: 0.2, // Stagger delay between each .box
  ease: "power3.out" // Easing effect
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".adjective", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top bottom", // Animation starts when the top of .portfolio is at the bottom of the viewport
    end: "top center", // Animation ends when the top of .portfolio reaches the center of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 50, // Move adjective section from 50px below
  opacity: 0, // Start with the section being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
// Animate the paragraph
gsap.from(".portfolio p", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top center", // Animation starts when the top of the section reaches the center of the viewport
    end: "top top", // Animation ends when the top of the section reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 50, // Move paragraph from 50px below
  opacity: 0, // Start with paragraph being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
// Animate the image
gsap.from(".portfolio .image img", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top center", // Animation starts when the top of .portfolio reaches the center of the viewport
    end: "top top", // Animation ends when the top of .portfolio reaches the top of the viewport
    scrub: 1, // Smooth scroll-based animation
    markers: false // Set to true for debugging
  },
  y: 100, // Move image from 100px below
  opacity: 0, // Start with image being invisible
  duration: 1, // Duration of the animation
  ease: "power3.out" // Easing effect
});
Shery.imageEffect(".back",{
  style: 5,
  
  config:{"a":{"value":1,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7499949402070223},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.4}},"shapeEdgeSoftness":{"value":0.1,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.05,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.47,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]}},
  gooey:true
})
const video=document.querySelector(".videodiv");
document.querySelector(".main-effect").addEventListener("click",function(){
  video.style.visibility="hidden";
})
const side=document.querySelector(".sidebar");
const menu=document.querySelector(".menu");

function updateTheme(newTheme) {
    document.body.setAttribute('theme', newTheme);
}
// Array of sections with data-theme attributes
const sections = document.querySelectorAll('.home, .About, .Templates , .portfolio , .project');
sections.forEach(section => {
    const theme = section.getAttribute('data-theme');
    ScrollTrigger.create({
        trigger: section,
        start: 'top center', // Trigger theme change when the section reaches the center of the viewport
        end: 'bottom center', // End theme change when the section's bottom leaves the center of the viewport
        onEnter: () => updateTheme(theme), // Change theme when entering the section
        onEnterBack: () => updateTheme(theme), // Change theme when re-entering the section from below
        onLeave: () => updateTheme(''), // Optionally reset the theme when leaving the section
        onLeaveBack: () => updateTheme(''), // Optionally reset the theme when scrolling back out of the section
    });
});
Shery.imageEffect(".Templates img", {
  style: 4,
  config:{"uColor":{"value":true},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.69,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.599972006777753},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} 
});
Shery.makeMagnet("button" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.hoverWithMediaCircle(".home" /* Element to target.*/, {
  images: [""] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
 gsap.to(".loader",{
    height :"0px",
    delay: 4,
    duration: 0.5,
  })// Ensure GSAP and ScrollTrigger are loaded

// Animation for the project text and button
gsap.from(".project-text", {
  scrollTrigger: {
    trigger: "#project",
    start: "top 30%",  // Start animation when the top of #project is 30% from the top of the viewport
    end: "bottom 70%",  // End animation when the bottom of #project is 10% from the top of the viewport
    scrub: true,
  },
  y: 100,  // Move up from 100px
  opacity: 0,  // Start from transparent
  duration: 1,
});

gsap.from("button", {
  scrollTrigger: {
    trigger: "#project",
    start: "top 40%",  // Start animation when the top of #project is 40% from the top of the viewport
    end: "bottom 20%",  // End animation when the bottom of #project is 20% from the top of the viewport
    scrub: true,
  },
  y: 50,  // Move up from 50px
  opacity: 0,  // Start from transparent
  duration: 1,
});
gsap.from(".contact-text h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-text h1",
    start: "top 80%",
    end: "top 50%",
    scrub: true
  }
});
gsap.from(".contact-text p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".contact-text p",
    start: "top 80%",
    end: "top 50%",
    scrub: true
  }
});
gsap.from(".bg-white", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".bg-white",
    start: "top 80%",
    end: "top 60%",
    scrub: true
  }
});

