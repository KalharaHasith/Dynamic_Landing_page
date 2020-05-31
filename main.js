const time = document.getElementById('time');
const greetings = document.getElementById('greetings');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// options
const showAmPm = true;

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
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}

// set background image and greeting
function setBgGreeting() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //  morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greetings.textContent = 'Good Morning';
        // document.body.style.color = 'white';
    } else if (hour < 18) {
        //  afternoon
        document.body.style.backgroundImage = "url('img/noon.jpg')";
        greetings.textContent = 'Good Afternoon';
    } else {
        //  evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greetings.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = 'HaKa';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set name
function setName(e) {
    if (e.type === 'keypress') {
        //  make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            // enter does not send to next line
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //  make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            // enter does not send to next line
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// run
showTime();
setBgGreeting();
getName();
getFocus();