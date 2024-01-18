const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.home',
  triggerHook: 0.5
})
.setTween('.home img', { y: '-50px' })
.addTo(controller);
