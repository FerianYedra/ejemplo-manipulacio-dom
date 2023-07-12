const h2 = document.querySelector('h2');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');
const form = document.getElementById('form');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    console.log('click del botón');
    res = Number(input1.value) + Number(input2.value);
    if (isNaN(res)){
        h2.innerText = 'Ese no es un número'
    }else{
        console.log(res);
        h2.innerText = '¡Se ha calculado!';
        resultado.innerText = 'Resultado: ' + String(res);
    }
    

}
