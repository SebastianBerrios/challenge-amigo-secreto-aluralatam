// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const ulListaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");

const agregarAmigo = () => {
  const li = document.createElement("li");
  li.classList.add("nombre");
  const inputValue = inputAmigo.value;

  if (inputValue) {
    li.textContent = inputValue;
    ulListaAmigos.appendChild(li);
  } else {
    alert("Ingresa un nombre valido");
  }

  inputAmigo.value = "";
};

const sortearAmigo = () => {
  const nombreAmigos = document.getElementsByClassName("nombre");
  const ganador = Array.from(nombreAmigos).sort(() => Math.random() - 0.5);
  alert(`El amigo secreto es ${ganador[0].textContent}`);
};
