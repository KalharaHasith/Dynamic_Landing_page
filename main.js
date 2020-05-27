const time = document.getElementById('time');
const greetings = document.getElementById('greetings');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set am pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}

// run
showTime();