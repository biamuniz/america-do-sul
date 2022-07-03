# [A nova onda na América do Sul](https://biamuniz.github.io/america-do-sul/)
Mini-projeto no formato de mapa desenvolvido para a disciplina Datavis Studio II, do Master em Jornalismo de Dados, Automação e Data Storytelling do Insper.


## Objetivos de aprendizagem
* Identificar métodos de carregamento de malhas geográficas e pontos geolocalizados
Praticar o carregamento de dadooss ou imagenss usando o método fetch do javascript (ou D3.js)

## Descrição
Estudantes devem criar uma narrativa que explore dados por meio de mapas, utilizando as linguagens HTML, CSS e JavaScript.

Esta ferramenta deve utilizar ao menos 2 técnicas explicadas em aula. São elas:
**(1) Carregar malhas geográficas de certas regiões do país, usando o método fetch() ou d3.json()**: Ex: Você pode usar uma API pública como as do IBGE: API de malhas geográficas, ou buscar por um SVG com uma malha específica. Lembre-se que cada região deve ter um id para poder identificar a área na interação. Para malhas municipais, procure mapas em SVG nos sites das prefeituras locais.  Você também pode baixar um SVG salvo na pasta do projeto, por exemplo editado no Figma, usando fetch(); **(2) Ler dados externos relacionados a áreas geográficas**: Ex.: API de localidades ou de pesquisa agregada do IBGE. O catálogo de APIs governamentais também pode ser útil; **(3) Alterar o estilo visual (como fill ou stroke) de áreas específicas de um mapa de acordo com certos dados**: Ex.: pintar municípios do estado de São Paulo de acordo com a renda média per capita; **(4) Criar uma interação, exibindo dados de cada região do mapa dinamicamente no HTML**: Ex.: modificar o título para mostrar o nome da região selecionada e um dado específico daquela região.


## Minha proposta
[Mapa dos espectros políticos](https://biamuniz.github.io/america-do-sul/) (generalizado) dos presidentes em exercício nos países da América do Sul.

**Ferramentas utilizadas**: 

* [Flourish](https://public.flourish.studio/visualisation/10532734/), para prototipar;
* [csv2json](https://csvjson.com/csv2json), para converter os dados do formato CSV para JSON;
* Figma, para editar o arquivo SVG e criar os IDs de cada path.
