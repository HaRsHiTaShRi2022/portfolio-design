var tl = gsap.timeline();
tl.to("#up",{
    height:0,
    duration:1.5,
    ease: Expo.easeInOut
})
tl.to("#up2",{
    height:0,
    delay: -1.6,
    duration:1.5,
    ease: Expo.easeInOut
})
tl.to("#up3",{
    height:"100%",
    delay: -1.5,
    duration:1,
    backgroundColor:"#2d6a4f",
    ease: Expo.easeInOut
})
tl.to(".navbut",{
    y:34,
    opacity: 1,
    duration:1,
    stagger: 0.1,

})
tl.from("#BH2",{
    x:500,
    rotate:270,
    opacity:0,
    duration:0.2
})
tl.to(".g",{
    opacity:1,
    duration:0.8,
    y:"50%",
    stagger:0.2,
})
tl.from(".j",{
    opacity:0,
    y:56,
    duration:0.9,
    stagger:0.3
})
var main = document.querySelector('#up3')
var main1 = document.querySelector('#Home')
var cursor = document.querySelector('#cursor')
main.addEventListener("mousemove",function (dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease: "back.out(6)"
    })
})
main1.addEventListener("mousemove",function (dets){
    console.log(dets.x)
    gsap.to("#image",{
        x:550-dets.x,
        y:350-dets.y,
        duration:0.5,
        ease: "back.out(6)"
    })
})

gsap.from("#My_Skills .yum",{
    scale: 0,
    opacity:0,
    delay: 0,
    duration: 2,
    stagger:0.1,
    scrollTrigger:{
        trigger:".yum",
        scroller:"body",
        start:"top 135%"
    }
})
