import styles from './../css/main.css';
import { tns } from "tiny-slider/src/tiny-slider";
import ClipboardJS from 'clipboard';

new ClipboardJS('.copy-button');

var openmenu = document.querySelector('.mobile-menu-button');
var mobilemenu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');

openmenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
}

var closemenu = document.querySelector('.close-menu');

closemenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
}

// (homepage) business tabbed box

var alarmBusinessOnLoad = document.querySelector('#alarm-sys-business-content');
var alarmBusinessOnClick = document.querySelector('#alarm-sys-business');
var videoBusinessOnClick = document.querySelector('#video-business');
var accessControlBusinessOnClick = document.querySelector('#business-access-control');
var automationBusinessOnClick = document.querySelector('#business-automation');
var alarmBusinessContent = document.querySelector('#alarm-sys-business-content');
var videoBusinessContent = document.querySelector('#video-business-content');
var accessControlBusinessContent = document.querySelector('#business-access-control-content');
var automationBusinessContent = document.querySelector('#business-automation-content');

document.addEventListener("DOMContentLoaded", function() {
  alarmBusinessOnLoad.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
});

alarmBusinessOnClick.onclick = function() {
  alarmBusinessContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

videoBusinessOnClick.onclick = function() {
  alarmBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBusinessContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

accessControlBusinessOnClick.onclick = function() {
  alarmBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBusinessContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

automationBusinessOnClick.onclick = function() {
  alarmBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBusinessContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationBusinessContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

// (homepage) banking tabbed box

var alarmBankOnLoad = document.querySelector('#alarm-sys-banking-content');
var alarmBankOnClick = document.querySelector('#alarm-sys-banking');
var videoBankOnClick = document.querySelector('#video-banking');
var accessControlBankOnClick = document.querySelector('#banking-access-control');
var driveThruBankOnClick = document.querySelector('#banking-drive-thru');
var vaultBankOnClick = document.querySelector('#banking-vault');
var alarmBankContent = document.querySelector('#alarm-sys-banking-content');
var videoBankContent = document.querySelector('#video-banking-content');
var accessControlBankContent = document.querySelector('#banking-access-control-content');
var driveThruBankContent = document.querySelector('#banking-drive-thru-content');
var vaultBankContent = document.querySelector('#banking-vault-content');

document.addEventListener("DOMContentLoaded", function() {
  alarmBankOnLoad.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
});

alarmBankOnClick.onclick = function() {
  alarmBankContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  driveThruBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  vaultBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

videoBankOnClick.onclick = function() {
  alarmBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBankContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  driveThruBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  vaultBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

accessControlBankOnClick.onclick = function() {
  alarmBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBankContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  driveThruBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  vaultBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

driveThruBankOnClick.onclick = function() {
  alarmBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  driveThruBankContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  vaultBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

vaultBankOnClick.onclick = function() {
  alarmBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  accessControlBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  driveThruBankContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  vaultBankContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

// (homepage) pneumatics tabbed box

var alarmPneumaticsOnLoad = document.querySelector('#pneumatic-tube-systems-tab-content');

document.addEventListener("DOMContentLoaded", function() {
  alarmPneumaticsOnLoad.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
});

// (homepage) home security tabbed box

var alarmHomeOnLoad = document.querySelector('#alarm-sys-home-security-content');
var alarmHomeOnClick = document.querySelector('#alarm-sys-home-security');
var videoHomeOnClick = document.querySelector('#video-home-security');
var automationHomeOnClick = document.querySelector('#automation-home-security');
var geoFenceHomeOnClick = document.querySelector('#geofencing-home-security');
var alarmHomeContent = document.querySelector('#alarm-sys-home-security-content');
var videoHomeContent = document.querySelector('#video-home-security-content');
var automationHomeContent = document.querySelector('#automation-home-security-content');
var geoFenceHomeContent = document.querySelector('#geofencing-home-security-content');

document.addEventListener("DOMContentLoaded", function() {
  alarmHomeOnLoad.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
});

alarmHomeOnClick.onclick = function() {
  alarmHomeContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  geoFenceHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

videoHomeOnClick.onclick = function() {
  alarmHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoHomeContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  geoFenceHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

automationHomeOnClick.onclick = function() {
  alarmHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationHomeContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
  geoFenceHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

geoFenceHomeOnClick.onclick = function() {
  alarmHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  videoHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  automationHomeContent.classList.remove('p-5', 'opacity-100', 'h-auto', 'w-auto');
  geoFenceHomeContent.classList.add('p-5', 'opacity-100', 'h-auto', 'w-auto');
}

var slider = tns({
  "container": "#homepage-slider-images",
  "items": 1,
  "controlsContainer": "#slider-controls",
  "swipeAngle": false,
  "speed": 400,
  "center": true,
  "mouseDrag": true,
  "mode": "gallery",
  "autoplay": true,
  "autoplayHoverPause": true
});

var sliderTestimonials = tns({
  "container": "#testimonial-slider-images",
  "items": 1,
  "controlsContainer": "#testimonial-slider-controls",
  "swipeAngle": false,
  "speed": 400,
  "center": true,
  "mouseDrag": true
});