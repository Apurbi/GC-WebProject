new CircleType(document.getElementById('circletext'));
var tl= gsap.timeline();

$('#endpara').textillate({
    autoStart: false,
    in: {
        effect: 'fadeInUp',
        delay: 15
    },    
    sync: true,
});

tl
.from('#mainimg',{
    duration: 2,
    scale: .5,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from("#maindiv h1",{
    duration: 2,
    scale: 1,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=1')
.from("nav",{
    duration: 1,
    y:0,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=1')
.from("#ring",{
    duration: 1,
    scale: 1,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=1')
.from('#circbox',{
    duration: 1,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=1')
.from('#circle',{
    duration: 1,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=1')
.from('.para',{
    duration: 1,
    y:20,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=1')

//to add circular motion on typecircle.js using gsap
// var tx = new TimelineMax({ repeat: -1, repeatDelay:0})
// .set("#circletext", {xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// .to("#circletext", 20, { rotation: 360 })

var tl2= gsap.timeline({
    scrollTrigger:{
        trigger: "#bg2",
        toggleActions: 'play pause resume reverse',
    }
});

tl2
.from('#bg2 h1',{
    duration: 2,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from(".img",{
    duration: 2,
    ease: 'Expo.easeInOut',
    transform: 'translateX(100%)',
},'-=1')
.from(".card h5",{
    duration: 1,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')
.from(".card h6",{
    duration: 1,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')

gsap.to('#extra', {
    scrollTrigger: {
        trigger: '#bg3',
        start: "top center",
        toggleActions: 'play pause resume reverse'
    },
    duration: 0.2,
    onComplete: function(){
        $('#endpara').textillate('start')
    }
})

var animation;

animation = gsap.to("#circle", {
  scrollTrigger: {
    trigger: "#path",
    start: "top 15%",
    end: "bottom bottom",
    scrub: 1,
    toggleActions: 'play pause resume reverse'
  },
  motionPath: {
    path: "#Path_1",
    align: "#Path_1",
    alignOrigin: [0.5, 0.5],
  },
  transformOrigin: "50% 50%",
  duration: 5,
  ease: "none",
  immediateRender: true,
});
