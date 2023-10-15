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
    "Brownie Maria",
    "LactoFree"
  ];

  // Exibir as sugestões.
  sugestoes.innerHTML = '';
  for (const sugestao of sugestoesBusca) {
    if (sugestao.toLowerCase().includes(value)) {
      sugestoes.innerHTML += `<li><a href="${sugestao.replace(' ', '')}.html"><span id="icon_sugestao"class="material-symbols-outlined">
      storefront
      </span>  ${sugestao}</a></li>`;
    }
  }
});

function clickBusca(){
  var filtro = document.getElementById("input_busca");
  var filtro2 = document.getElementById("sugestoes");
  console.log('Chamada a função!')
  if (filtro.style.display == "block" && filtro2.style.display == "block"){
      console.log('Chama display none!')
      filtro.style.display = "none";
      filtro2.style.display = "none";
  }else{
    console.log('Chama display block!')
    filtro.style.display = "block";
    filtro2.style.display = "block";
  }
}

function FullScreen(){
  console.log('Chamada Executada');
  var EstadoTela = true;
  var fecha = document.getElementById("fecha");
  var desconto = document.getElementById("savings_icon");
  var tela =  document.getElementById("header");
  var busca = document.getElementById("buscar_icon");
  var voltar = document.getElementById("voltar");
  var telaFull = document.getElementById("fullscreen")
  tela.style.height = "100vh";
  fecha.style.display = "none";
  busca.style.display = "none";
  desconto.style.display = "none";
  voltar.style.display = "none";
  telaFull.style.position = "relative";
  telaFull.style.top = "0";
  telaFull.style.opacity = "50%";
  telaFull.style.backgroundSize = "50%";
  telaFull.style.backgroundPosition = "center center";
  if (EstadoTela == true) {
    telaFull.onclick = function NoFullScreen() {
      location.reload();
      //background-size: cover;
      //background-position: center center;
    }
  }

}