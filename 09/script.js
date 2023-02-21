// ./sounds/01.mp3
let divs = document.querySelectorAll('.container>div');
let sourcs = document.querySelector('.row audio');
divs.forEach(element => {
    element.addEventListener('click',(e)=>{
        let ind = Number(e.target.className);
        sourcs.src = `./sounds/0${ind+1}.mp3`;
        sourcs.play();
        console.log(sourcs);
    });
})