let mapaContinente;
let mapaDados;

// como a função carrega um arquivo, usamos o termo async
// para indicar que ela vai esperar o carregamento
async function loadMapData(){
    // endereço do SVG da América do Sul
    let mapaUrl = 'mapa-conteudo.svg'
    // Dados de celulares
    let dadosUrl='dados.json';

    // carrega o arquivo do mapa SVG
    let mapaSvg = await fetch(mapaUrl);
    // converte os dados carregados para o formato de string
    mapaContinente = await mapaSvg.text();
    // carrega o arquivo de dados de celulares
    let dadosJson = await fetch(dadosUrl);
    mapaDados = await dadosJson.json();

    let mapaConteudo = document.querySelector('#mapa-conteudo');
    mapaConteudo.innerHTML = mapaContinente;

    let elemPaises = document.querySelectorAll('#mapa-conteudo svg path');

    elemPaises.forEach((elemento) => {
        let opacity = mapaDados[0].opacidade 
        elemento.dataset.indice = opacity; // adiciona esse índice aos atributos do elemento

        // determina a opacidade de cor do preenchimento de acordo com o índice
        elemento.setAttribute('fill-opacity', elemento.dataset.indice);
        // determina a função a executar no mouseover
        elemento.onmouseover = marcaPais;
        // determina a função a executar no mouseout
        elemento.onmouseout = desmarcaPais;
    });
}

function marcaPais(event){
    // seleciona o alvo do evento (o vetor do país)
    let elemento = event.target;
    // pega o atributo id do elemento, que tem o nome do país em letra minúscula
    let codigoAlvo = elemento.id;
    // let codigo = dados.properties.codarea;
    let dadosPais = mapaDados.filter(function(item){
        return item.id === codigoAlvo;
    });

    // pega o nome do país do json
    let nome = dadosPais[0].nome;
    // pega a quantidade de celulares por 100 pessoas
    let mobile = dadosPais[0].mobile;

    // tira a classe 'ativo' da seleção anterior, se houver
    let selecaoAnterior = document.querySelector('path.ativo');
    if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }

    // adiciona a classe 'ativo' ao elemento atual
    elemento.classList.add("ativo");

    // preenche os elementos com nome, mobile cellular subscriptions e o índice
    document.querySelector('#pais-titulo').textContent = nome + " has " + mobile + "mobile cellular subscriptions (per 100 people) in 2019";
    document.querySelector('#pais-valor').textContent = "índice: " + elemento.dataset.indice;
}

function desmarcaPais(event){
    // seleciona o alvo do evento
    let elemento = event.target;
    // remove a classe de destaque
    elemento.classList.remove("ativo");
}

loadMapData();