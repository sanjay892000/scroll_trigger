var timeline=gsap.timeline();
timeline.from(".left h1 , .center h1 , .right i , .right span" , {
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.1
})
timeline.from(".left-page h1 , .left-page button" , {
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.1
})
gsap.from(".right-page img" , {
    scale:0,
    duration:1,
    opacity:0,
    delay:1
})

gsap.from(".box1 , .box2 , .box3" , {
    scale:0,
    duration:0.8,
   scrollTrigger:{
    trigger:".page2",
    scroll:"body",
    start:"top 50%"
   }
})

/* gsap.from(".page3 img" , {
    scale:0,
    opacity:0,
    duration:1,
   scrollTrigger:{
    trigger:".page3",
    scroll:".main-page",
    start:"top 60%",
    markers:true,
   }
}) */
