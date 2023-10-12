const voltar = document.querySelector('#voltar');
const input = document.querySelector('#busca_div input');
const sugestoes = document.querySelector('#sugestoes');

voltar.addEventListener('click', function() {
  history.back();
});

input.addEventListener('keyup', function() {
  // Buscar as sugestões com base no texto digitado.
  const value = input.value.toLowerCase();

  const sugestoesBusca = [
    "BrownieMaria",
    "LactoFree"
  ];

  // Exibir as sugestões.
  sugestoes.innerHTML = '';
  for (const sugestao of sugestoesBusca) {
    if (sugestao.toLowerCase().includes(value)) {
      sugestoes.innerHTML += `<li><a href="${sugestao}.html"><span id="icon_sugestao"class="material-symbols-outlined">
      storefront
      </span>  ${sugestao}</a></li>`;
    }
  }
});

function clickBusca(){
  console.log('clickBusca() chamado!');
  var filtro = document.getElementById("busca_div");
  if (filtro.style.display == "none"){
      filtro.style.display = "grid";
  }else{
      filtro.style.display = "none"
  }
  }