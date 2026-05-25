function somar(){ 
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value) 
    if (!Number.isNaN(a) && !Number.isNaN(b)){
    let r = a+b
    const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Resultado: " + r
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
    else{
         const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Erro, digite números validos"
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
}
function multiplicar(){
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value)
    if (!Number.isNaN(a) && !Number.isNaN(b)){
    let r = a*b
    const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Resultado: " + r
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
    else{
         const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Erro, digite números validos"
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
}
function dividir(){
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value)
    if (!Number.isNaN(a) && !Number.isNaN(b)){
    let r = a/b
    const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Resultado: " + r
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
    else{
         const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Erro, digite números validos"
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
}
function subtrair(){
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value)
    if (!Number.isNaN(a) && !Number.isNaN(b)){
    let r = a-b
    const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Resultado: " + r
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
    else{
         const elemento = document.getElementById("divzera")
    elemento.classList.remove("opacity-0", "-translate-y-20")
    elemento.classList.add("opacity-100", "translate-y-0")
    document.getElementById("resultado").textContent="Erro, digite números validos"
    setTimeout(() => {
        elemento.classList.remove("opacity-100", "translate-y-0")
        elemento.classList.add("opacity-0", "-translate-y-20")}, 2000)
    }
}


