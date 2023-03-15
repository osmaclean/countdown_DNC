
; (function () {
    'use strict'

    const day = document.getElementById("day");
    const hour = document.getElementById("hour");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const lancamento = "31 dec 2023";

    console.log(day, hour, minutes, seconds)

    function countDown() {
        const dataLanc = new Date(lancamento);
        const today = new Date()

        const secondTotal = (dataLanc - today) / 1000;

        const finalDay = Math.floor(secondTotal / 60 / 60 / 24);
        const finalHours = Math.floor(secondTotal / 60 / 60) % 24;
        const finalMinutes = Math.floor(secondTotal / 60) % 60;
        const finalSeconds = Math.floor(secondTotal) % 60;

        const formattedDay = formatTime(finalDay);
        const formattedHour = formatTime(finalHours);
        const formattedMinutes = formatTime(finalMinutes);
        const formattedSeconds = formatTime(finalSeconds);


        day.innerHTML = `${formattedDay}<br> Dias`
        hour.innerHTML = `${formattedHour}<br> Horas`
        minutes.innerHTML = `${formattedMinutes}<br> Minutos`
        seconds.innerHTML = `${formattedSeconds}<br> Segundos`

        day.style.textAlign = "center"
        hour.style.textAlign = "center"
        minutes.style.textAlign = "center"
        seconds.style.textAlign = "center"

        day.style.fontSize = "1.5rem"
        hour.style.fontSize = "1.5rem"
        minutes.style.fontSize = "1.5rem"
        seconds.style.fontSize = "1.5rem"

        day.style.fontWeight = '600'
        hour.style.fontWeight = '600'
        minutes.style.fontWeight = '600'
        seconds.style.fontWeight = '600'


    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    countDown()
    setInterval(countDown, 1000)

})()