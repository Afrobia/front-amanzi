let peso = document.getElementById("peso");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");
let button = document.getElementById("enviar");
let form = { peso, agua, cidade, estado };

function validarCampo() {
  peso.value == "" || cidade.value == "" || estado.value == ""
    ? alert("Preencha todos os campos!")
    : enviarForm();
}

function enviarForm() {
  let ingestao = calcularIngestão(peso);
  let form = novoForm(peso,ingestao, cidade, estado);
  console.log(form);
  alert('Sua ingestão hidrica diária é de: ' + ingestao + 'ml. Análise climática em construção');
}

function calcularIngestão(peso) {
    let ingestao = peso.value * 35;
    return ingestao;
}

function novoForm(peso, agua, cidade, estado) {
  let form = {
    peso: peso.value,
    agua: agua,
    cidade: cidade.value,
    estado: estado.value,
  };
  return form;
}

button.addEventListener("click", () => {
  validarCampo();
});