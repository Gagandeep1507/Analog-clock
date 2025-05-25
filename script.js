let hr = document.getElementById('Hour');
let min = document.getElementById('Min');
let sec = document.getElementById('Sec');

function displaytime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRoutaition = 30*hh + mm/2;
    let mRoutaition = 6*mm;
    let sRoutaition = 6*ss;

    hr.style.transform = `rotate(${hRoutaition}deg)`;
    min.style.transform = `rotate(${mRoutaition}deg)`;
    sec.style.transform = `rotate(${sRoutaition}deg)`
}

setInterval(displaytime , 1000);