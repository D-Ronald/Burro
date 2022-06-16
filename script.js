var a =0
var texto = document.querySelector('#texto');
var pai = document.querySelector('#pai');
var sim = document.querySelector('#yes');
var n = document.querySelector('#paiNo');

function yes(){
    pai.removeChild(sim);
    pai.removeChild(n);
    texto.innerHTML = 'I figured it out!';
}
function no(){
    a =a+1
    if (a%2==1){
        document.getElementById('no').style.marginLeft = '10px'
        document.getElementById('yes').style.marginLeft = '10px'
    }
    if (a%2==0){
        document.getElementById('no').style.marginLeft = '50px'
        document.getElementById('yes').style.marginLeft = '50px'
    }
}
