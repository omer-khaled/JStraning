
let childerns =  document.querySelectorAll('.container .child');
childerns.forEach(element =>{
    element.onclick = function (e){
        childerns.forEach(el =>{
            el.style.flexGrow="1";
            el.firstElementChild.style.animationName="unset";
            el.firstElementChild.style.opacity="0";
        })
        e.target.style.flexGrow="10";
        element.firstElementChild.style.animationName="anim_text";
    }
});