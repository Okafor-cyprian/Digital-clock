const hours = document.getElementById('hrs');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('sec');

const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');

setInterval(() => {
    const currentTime = new Date();
    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

    year.innerHTML = currentTime.getFullYear()
    month.innerHTML = currentTime.getMonth() + 1;
    day.innerHTML = currentTime.getDate();
}, 1000)

