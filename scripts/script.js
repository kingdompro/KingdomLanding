gsap.from(".fade-in", {
    y: -15, 
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 3
});

gsap.from(".fadeAsset", {
    opacity:0,
    duration: 1,
    stagger: 0.5,
    delay:2
});

gsap.to(".spinner-wrapper", {
    opacity:0,
    duration: 1,
    // stagger: 0.5,
    delay:2
});