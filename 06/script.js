// transform: translateX(-100%);
let boxes = document.querySelectorAll('.container .box');

boxes.forEach((element,index) => {
    if(index % 2 == 0){
        element.style.transform="translateX(230%)";
    }   
    else{
        element.style.transform="translateX(-230%)";
    }
})

window.onscroll = function (){
    boxes.forEach((element,index) =>{
        if(window.innerHeight >= (element.getBoundingClientRect().top + (element.clientHeight / 2))){
            element.style.transition ="1s all";
            element.style.transform="translateX(0%)";
        }
        else{
            if(index % 2 == 0){
                element.style.transform="translateX(230%)";
            }
            else{
                element.style.transform="translateX(-230%)";
            }
        }
    }); 
}

