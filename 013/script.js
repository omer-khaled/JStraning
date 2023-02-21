let conteiner  = document.querySelector('.conteiner .row');
let text_area = document.querySelector('textarea');

let lenghtt = false;
let first_kok = true;

text_area.onkeyup = function (e){
    document.querySelector('.conteiner .row').innerHTML = "";
    let cur = (this.value).split(',');
    console.log(cur.length == 0 && e.key == "Backspace");
    for(let i=0;i<cur.length;i++){
        if(cur[i]!=""){
            let spann = document.createElement('span');
            conteiner.appendChild(spann);
            document.querySelector('.conteiner .row span:last-of-type').innerHTML = cur[i];
        }
    }   
}


