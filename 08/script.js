let click = document.querySelector('form .btn');
let form = document.forms[0];
let spans_first = Array.from(document.querySelectorAll('form .controler .first span'));
let spans = Array.from(document.querySelectorAll('form .controler .second span'));
form.onsubmit = function(e){
    e.preventDefault();
}
click.onclick = function(){
        // click.classList.add('animated');
    click.style.transform = "scale(0.97)";
    setTimeout(() => {
        click.style.transform = "scale(1)"; 
    }, 150);
}
form.userName.onfocus = function (e){
    for(let i=0;i<spans_first.length;i++){
        spans_first[i].style.transitionDelay = `0.${i}s`;
        spans_first[i].style.transform = "translateY(-15px)";
        spans_first[i].style.color = "lightblue";
    }
    e.target.style.borderBottom = "2px solid lightblue";
    
}
form.userName.onblur = function (e){
    for(let i=0;i<spans_first.length;i++){
        spans_first[i].style.transitionDelay = `0.${i}s`;
        spans_first[i].style.transform = "translateY(0)";
        spans_first[i].style.color = "white";
    }
    e.target.style.borderBottom = "2px solid white";
}
form.pass.onfocus = function (e){
    for(let i=0;i<spans.length;i++){
        spans[i].style.transitionDelay = `0.${i}s`;
        spans[i].style.transform = "translateY(-15px)";
        spans[i].style.color = "lightblue";
    }
    e.target.style.borderBottom = "2px solid lightblue";
    
}
form.pass.onblur = function (e){
    for(let i=0;i<spans.length;i++){
        spans[i].style.transitionDelay = `0.${i}s`;
        spans[i].style.transform = "translateY(0)";
        spans[i].style.color = "white";
    }
    e.target.style.borderBottom = "2px solid white";
}

