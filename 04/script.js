let close =true;
document.querySelector('.container .containe i').onclick = function (e){
    if(close){
        document.querySelector('.container .containe').style.width= "20%";
        close=false;
    }
    else{
        document.querySelector('.container .containe').style.width= "2.5%";
        close=true;
    }
}