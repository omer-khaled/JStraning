let divs = document.querySelectorAll('.block span');
console.log(divs);
document.onkeyup = function (e){
    if(e.key === " "){
        divs[0].innerHTML = ("space");
    }
    else{
        divs[0].innerHTML = (e.key);
    }
    divs[1].innerHTML = (e.keyCode);
    divs[2].innerHTML = (e.code);
}