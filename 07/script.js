let first = document.querySelector('section .ps5');
let second = document.querySelector('section .xbox');

second.onmouseenter = function(e){
    second.style.width="80%";
    second.style.zIndex="100";
    first.style.width="20%";
}
second.onmouseleave = function(e){
    first.style.width="50%";
    second.style.width="50%";
    second.style.zIndex="1";
}
first.onmouseenter = function(e){
    first.style.width="80%";
    first.style.zIndex="100";
    second.style.width="20%";
}
first.onmouseleave = function(e){
    second.style.width="50%";
    first.style.width="50%";
    first.style.zIndex="1";
}