//aula 9
document.querySelector("#botao").addEventListener("click", function(){
    document.getElementById("pagarafo").textContent = "olha clicou o botão";
})
document.querySelector("input").addEventListener("input", function(e){
    document.getElementById("textoin").textContent = e.target.value;
})
