//Botão (Filtrar Lojas)
function clickFiltro() {
    var filtro = document.getElementById("filtro");
    if (filtro.style.display == "grid"){
        filtro.style.display = "none";
    }else{
        filtro.style.display = "grid"
    }
    }

//Botão (Filtrar Barracas)
function click_Filtro_Barracas() {
    // Obtém todos os elementos de entrada de rádio com o atributo "name" igual a "r"
    let radioBtns = document.querySelectorAll("input[name='r']");

    // Inicializa a variável para armazenar o valor selecionado
    let value_filtro = null;

    // Itera pelos botões de rádio para encontrar o valor selecionado
    radioBtns.forEach(function(radio) {
        if (radio.checked) {
            value_filtro = radio.value;
        }
    });

    // Obtém o elemento de barracas sem açúcar
    let barraca_lactose = document.getElementById("busca_barraca_filtro");
    let barraca_acucar = document.getElementById("busca_barraca_filtro_sugar");
    var filtro = document.getElementById("filtro");

    // Verifica o valor selecionado e exibe ou oculta as barracas com base nele
    if (value_filtro === "2") { // "sem_lactose" representa a opção de "Sem lactose"
        barraca_lactose.style.display = "inline-block";
        filtro.style.display = "none";
        barraca_acucar.style.display = "none";
        const form = document.querySelector("form");

        form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Faz alguma coisa com os dados do formulário
        });
    } else if(value_filtro === "1"){
        barraca_acucar.style.display = "inline-block";
        filtro.style.display = "none";
        barraca_lactose.style.display = "none";
        const form = document.querySelector("form");

        form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Faz alguma coisa com os dados do formulário
        });
    }else {
        barraca_lactose.style.display = "none";
        filtro.style.display = "grid";
    }
}
