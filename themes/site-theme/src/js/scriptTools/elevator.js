window.jQuery = window.$ = require('jquery');

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 501) {
      $(".elevator-button").removeClass("hidegotoTop");
  }
  if (scroll <= 499) {
    $(".elevator-button").addClass("hidegotoTop");
  }
});

/* Elevator JS */

var Elevator=function(n){"use strict";function e(n,e,t,o){return n/=o/2,1>n?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return g&&(e-=g),e}function l(n){T||(T=n);var t=n-T,o=e(t,k,y-k,b);window.scrollTo(0,o),b>t?w=requestAnimationFrame(l):r()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){T=null,k=null,h=!1}function a(){C&&(y=o(C))}function r(){u(),f&&(f.pause(),f.currentTime=0),p&&p.play(),v&&v()}function d(){h&&(cancelAnimationFrame(w),u(),f&&(f.pause(),f.currentTime=0),a(),window.scrollTo(0,y))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){a(),document.documentElement.scrollTop=y,document.body.scrollTop=y,window.scroll(0,y)})}function s(n){A=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(C=n.targetElement),n.verticalPadding&&(g=n.verticalPadding),window.addEventListener("blur",d,!1),n.mainAudio&&(f=new Audio(n.mainAudio),f.setAttribute("preload",n.preloadAudio),f.setAttribute("loop",n.loopAudio)),n.endAudio&&(p=new Audio(n.endAudio),p.setAttribute("preload","true")),n.endCallback&&(v=n.endCallback),n.startCallback&&(m=n.startCallback))}var m,f,p,v,A=null,w=null,b=null,E=!1,T=null,k=null,y=0,C=null,g=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||A.scrollTop,a(),E||(b=1.5*Math.abs(y-k)),requestAnimationFrame(l),f&&f.play(),m&&m())},s(n)};"undefined"!=typeof module&&module.exports&&(module.exports=Elevator);

window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('#go-to-top-button'),
    duration: 1000
  });
}