let numero1 = 0
let numero2 = 0

function pontuar1() {
    numero1++
    MostrarPlacar1()
}
function diminuir1(){
    numero1--
    MostrarPlacar1()
}

function MostrarPlacar1(){
    const p1 = document.querySelector("#resultado1")
    p1.innerText = numero1
}
MostrarPlacar1()

function pontuar2() {
    numero2++
    MostrarPlacar2()
}
function diminuir2(){
    numero2--
    MostrarPlacar2()
}

function MostrarPlacar2(){
    const p2 = document.querySelector("#resultado2")
    p2.innerText = numero2
}

MostrarPlacar2()