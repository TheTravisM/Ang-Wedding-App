"use strict";
console.log("CLOCK");

const second = 0,
      minute = 0,
      hour = 0,
      day = 0;

function leading0(num) {
  return num < 10 ? '0' + num : num;
}

let countDown = new Date('Sep 1, 2018 00:00:00').getTime(),
  x = setInterval(function() {

    let now = new Date().getTime(),
        time = countDown - now;
    let second = leading0(Math.floor((time / 1000) % 60));
    let minute = leading0(Math.floor((time / 1000 / 60) % 60));
    let hour = leading0(Math.floor(time / (1000 * 60 * 60) % 24));
    let day  = leading0(Math.floor(time / (1000 * 60 * 60 * 24)));

    document.getElementById('days').innerHTML = day,
    document.getElementById('hours').innerHTML = hour,
    document.getElementById('minutes').innerHTML =  minute,
    document.getElementById('seconds').innerHTML = second;

  }, second)
