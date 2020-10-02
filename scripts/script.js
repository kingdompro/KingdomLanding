

// gsap.to(".spinner-wrapper", {
//     opacity:0,
//     duration: 1,    
//     // stagger: 0.5,
//     // delay:2
    
// });

window.addEventListener('load', function(event){
    gsap.to(".spinner-wrapper", {
        opacity:0,
        duration: 1  
        // stagger: 0.5,
        // delay:2       
    });
    const swrapper = document.querySelector(".spinner-wrapper");    
    swrapper.style.zIndex = -4;
    gsap.from(".fadeAsset", {
        opacity:0,
        duration: 1,
        stagger: 0.5,
        // delay:0
    });    
    gsap.from(".fade-in", {
        y: -15, 
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: 2
    });
});