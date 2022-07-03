let mapaContinente;
let mapaDados;

// como a função carrega um arquivo, usamos o termo async
// para indicar que ela vai esperar o carregamento
async function loadMapData(){
    // endereço do SVG da América do Sul
    let mapaUrl = 'imagens/mapa-conteudo.svg'
    // Dados sobre presidentes, atual mandato e espectro político
    let dadosUrl='dados/dados.json';

    // carrega o arquivo do mapa SVG
    let mapaSvg = await fetch(mapaUrl);
    // converte os dados carregados para o formato de string
    mapaContinente = await mapaSvg.text();
    // carrega o arquivo com os dados dos países
    let dadosJson = await fetch(dadosUrl);
    mapaDados = await dadosJson.json();

    let mapaConteudo = document.querySelector('#mapa-conteudo');
    mapaConteudo.innerHTML = mapaContinente;

    let elemPaises = document.querySelectorAll('#mapa-conteudo svg path');

    elemPaises.forEach((elemento) => {
        let opacity = mapaDados[0].opacidade 
        elemento.dataset.indice = opacity; // adiciona esse índice aos atributos do elemento
        let cor = mapaDados[0].espectro 
        elemento.dataset.indice = cor; // adiciona esse índice aos atributos do elemento
        
        // determina a opacidade e cor do preenchimento de acordo com o índice
        elemento.setAttribute('fill-opacity', elemento.dataset.indice);
        elemento.setAttribute('fill-color', elemento.dataset.indice);
        // determina a função a executar no mouseover
        elemento.onmouseover = marcaPais;
        // determina a função a executar no mouseout
        elemento.onmouseout = desmarcaPais;
    });
}

function marcaPais(event){
    // seleciona o alvo do evento (o vetor do país)
    let elemento = event.target;
    // pega o atributo id do elemento
    let codigoAlvo = elemento.id;
    let dadosPais = mapaDados.filter(function(item){
        return item.id === codigoAlvo;
    });

    // pega o nome do país do json
    let pais = dadosPais[0].país;
    // pega o início do mandato atual
    let inicio = dadosPais[0].mandato;
    // pega o nome do presidente
    let nome = dadosPais[0].presidente;

    // tira a classe 'ativo' da seleção anterior, se houver
    let selecaoAnterior = document.querySelector('path.ativo');
    if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }

    // adiciona a classe 'ativo' ao elemento atual
    elemento.classList.add("ativo");

    // preenche os elementos com nome do país, presidente atual e início do mandato
    document.querySelector('#pais-titulo').textContent = pais + " tem como atual presidente " + nome;
    document.querySelector('#pais-valor').textContent = "Seu mandato começou em " + inicio;
}

function desmarcaPais(event){
    // seleciona o alvo do evento
    let elemento = event.target;
    // remove a classe de destaque
    elemento.classList.remove("ativo");
}

loadMapData();