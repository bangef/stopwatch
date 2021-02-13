var startt = document.getElementById('start');
var stopp = document.getElementById('stop');



// control stop dan start
startt.addEventListener('click', () => {
    reset();
    x = setInterval(timer, 1000);
    return startt.style.display = 'none', stopp.style.display = 'block';
})
stopp.addEventListener('click', () => {
    clearInterval(x);
    tampilHasil();
    return startt.style.display = 'block', stopp.style.display = 'none';
})

// var loopTimer = window.setInterval(, 1000);

// var timer = () => {
//     var menit = document.getElementById('menit');
//     var detik = document.getElementById('detik');
//     jam.innerHTML = `${}`;
//     menit.innerHTML = `${}`;
//     detik.innerHTML = `${}`;

// }

// function detik() {
//     // var detik = document.getElementById('detik');

// }, 1000);
// }


var sec = 0, min = 0, h = 0, secOut = 0, minOut = 0, hOut = 0;


function checkSec(a) {
    if (a >= 0 && a < 10){
        return secOut = `0${a}`;
    } else {
        return secOut = a;
    }
}

function checkMin(a) {
    if (a >= 0 && a < 10){
        return minOut = `0${a}`;
    } else {
        return minOut = a;
    }
}

function checkH(a) {
    if (a >= 0 && a < 10){
        return hOut = `0${a}`;
    } else {
        return hOut = a;
    }
}

function timer() {
    if (sec >= 0 && sec < 60) {
        sec = ++sec;
    }else {
        min = ++min;
        sec = 0;
    }

    if ( min > 60 ) {
        h = ++h;
        min = 0;
    }


    checkSec(sec);
    checkMin(min);
    checkH(h);


    return console.log(document.getElementById('detik').innerHTML = secOut, document.getElementById('menit').innerHTML = minOut, document.getElementById('jam').innerHTML = hOut);
}

function reset() {
    document.getElementById('detik').innerHTML = '00';
    document.getElementById('menit').innerHTML = '00';
    document.getElementById('jam').innerHTML = '00';
    document.getElementById('tampilHasil').innerHTML = null;
    return sec = 0, min = 0, h = 0, secOut = 0, minOut = 0, hOut = 0;
}

function tampilHasil() {
    return document.getElementById('tampilHasil').innerHTML = `Catatan waktu : 
    "${hOut} Jam - ${minOut} Menit - ${secOut} Detik"`;
}