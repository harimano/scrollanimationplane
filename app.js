const flightPath = {
    curviness:1,
    autoRotate:true,
    values:[
        {x:100,y:-20},
        {x:300, y:10},
        {x:500, y:100},
        {x:750, y:-100},
        {x:350,y:-50},
        {x:600,y:100},
        {x:800, y:0},
        {x:window.innerWidth, y:-250}
    ]
};

// TweenMax.to(".paper-plane", 1.25,{x:100, y:-20});
// TweenMax.to(".paper-plane", 1.25,{x:300, y:10});
// TweenMax.to(".paper-plane", 1.25,{x:500, y:100});
// TweenMax.to(".paper-plane", 1.25,{x:750, y:-100});

const tween = new TimelineLite();
tween.add(
    TweenLite.to(".paper-plane", 2.5, {
        bezier:flightPath,
        ease:Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller(); 

const scene = new ScrollMagic.Scene({
    triggerElement:'.animation',
    duration:1000,
    triggerHook:0,

})

.setTween(tween)
// .addIndicators() // removing the addindicators will remove it off the screen. 
.setPin('.animation')
.addTo(controller);