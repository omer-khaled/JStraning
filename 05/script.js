let span = document.querySelector('.container .overlay span');
let overlay = document.querySelector('.container .overlay');
let container = document.querySelector('.container .bg');
let start = 0;
let opact=1;
let bluer=20;
let holder = setInterval(()=>{
    span.innerHTML = `${start}%`;
    overlay.style.opacity = `${opact}`;
        bluer -= 0.2;
    console.log(bluer);
    container.style.filter = `blur(${bluer}px)`;
    opact -= 0.01;
    console.log(bluer);
    if(parseInt(bluer) == 0){
        overlay.style.opacity = `0`;
        container.style.filter = `blur(0px)`;
        clearInterval(holder);
    }
    start++;
},35);