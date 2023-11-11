const hours = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
console.log(seconds);


const currentTime = new Date()
hours.innerHTML = currentTime.getHours()
minutes.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds()