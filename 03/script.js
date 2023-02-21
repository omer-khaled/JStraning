document.querySelector(".navigation .open").onclick=function(e){
    e.target.parentElement.style.transform = "rotate(-70deg)";
    document.querySelector('.cover .all').style.transform="rotate(-22deg)";
    document.querySelector(".side").classList.add('animated');
}
document.querySelector(".navigation .close").onclick=function(e){
    e.target.parentElement.style.transform = "unset";
    document.querySelector('.cover .all').style.transform="unset";
    document.querySelector(".side").classList.remove('animated');
}