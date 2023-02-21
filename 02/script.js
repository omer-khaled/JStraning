let child = document.querySelectorAll(".container .row .child");
let row = document.querySelector(".container .row .before_element");
let buttons = document.querySelectorAll(".container .buttons button");
start = 0;
let size = child.length;
child.forEach((element,index) =>{
    element.onclick=function (){
        row.style.width = `calc(100% / 3 * ${index})`;
        start = index;
        child.forEach(ele => {
            ele.classList.add('active_child');
        })
        for(let i = start +1 ; i < size ; i++){
            child[i].classList.remove('active_child');
        }
        element.classList.add('active_child');
        console.log(start);
        if(start == 3){
            buttons[0].classList.add('active');
            buttons[1].classList.remove('active');
        }
        else if(start == 0){
            buttons[0].classList.remove('active');
            buttons[1].classList.add('active');
        }
        else{
            buttons[1].classList.add('active');
            buttons[0].classList.add('active');
        }
    }
});
buttons[1].onclick = function (e){
    row.style.width = `calc(100% / 3 * ${start + 1})`;
    child[start + 1].classList.add('active_child');
    buttons[0].classList.add('active');
    if(start <= 2){
        start++;
    }
    if(start == 3){
        e.target.classList.remove('active');
    }
}
buttons[0].onclick = function (e){
    console.log(start , "     minus");
    row.style.width = `calc(100% / 3 * ${start - 1})`;
    child[start].classList.remove('active_child');
    if(start >= 0){
        start--;
    }
    if (start == 0){
        e.target.classList.remove('active');
    }
    if(start == 2){
        buttons[1].classList.add('active');
    }
}