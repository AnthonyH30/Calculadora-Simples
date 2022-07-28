const [num1, num2] = document.querySelectorAll("input");
const [sum, less, div, mult, clear] = document.querySelectorAll('button');
const result = document.querySelector('.resultado')


function somar(){
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);

    const sumResult = numero1 + numero2;

    result.innerText = `Resultado: ${sumResult}`;
}

function diminuir(){
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);

    const lessResult = numero1 - numero2;

    result.innerText = `Resultado: ${lessResult}`;
}

function dividir(){
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);

    const divResult = numero1 / numero2;

    result.innerText = `Resultado: ${divResult}`;
}

function multiplicar(){
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);

    const multResult = numero1 * numero2;

    result.innerText = `Resultado: ${multResult}`
}

function limpar(){
    num1.value = "";
    num2.value = "";
    result.innerText = "Resultado:";
}




clear.addEventListener('click', limpar);
sum.addEventListener('click', somar);
less.addEventListener('click', diminuir);
div.addEventListener('click', dividir);
mult.addEventListener('click', multiplicar);
