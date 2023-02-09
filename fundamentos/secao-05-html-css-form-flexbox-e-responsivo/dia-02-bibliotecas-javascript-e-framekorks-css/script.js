const botao = document.getElementById("submit-btn");
const resetButton = document.getElementById("clear-btn");
const nomeTodo = document.getElementById("fullName");
const paragrafo = document.getElementsByClassName("ondeDeveFicar")
function parada(event){
    event.preventDefault();
    console.log(nomeTodo.value);
    paragrafo.innerHTML = nomeTodo.value

}
botao.addEventListener("click", parada)