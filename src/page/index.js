function preparaLocalStorage() {
  localStorage.setItem("Segunda-feira", JSON.stringify([]));

  localStorage.setItem("Terça-feira", JSON.stringify([]));

  localStorage.setItem("Quarta-feira", JSON.stringify([]));

  localStorage.setItem("Quinta-feira", JSON.stringify([]));

  localStorage.setItem("Sexta-feira", JSON.stringify([]));

  localStorage.setItem("Sábado", JSON.stringify([]));

  localStorage.setItem("Domingo", JSON.stringify([]));
}
preparaLocalStorage();

function criarAtividade() {
  const descricaoAtividade = document.getElementById(
    "atividade-descricao"
  ).value;

  const selectTedOption = document.getElementsByClassName("weekday-select")[0];
  const diaSelecionado = selectTedOption[selectTedOption.selectedIndex].text;

  const horarioAtividade = document.getElementById("appt").value;

  const dadosNovaAtividade = {
    descricao: descricaoAtividade,
    dia: diaSelecionado,
    hora: horarioAtividade,
  };
  insereNovaAtividadeLocalStorage(diaSelecionado, dadosNovaAtividade);
}

function insereNovaAtividadeLocalStorage(diaDaSemana, atividade) {
  const itemsCards = localStorage.getItem(diaDaSemana);
  const atividades = JSON.parse(itemsCards);

  atividades.push(atividade);

  localStorage.removeItem(diaDaSemana);

  localStorage.setItem(diaDaSemana, JSON.stringify(atividades));

  insereCardAPartirDoLocalStorage(diaDaSemana);
}

function buscarCardsPeloDiaDaSemanaViaBotao(buttonClicked) {
  insereCardAPartirDoLocalStorage(buttonClicked.innerHTML);
}

function insereCardAPartirDoLocalStorage(diaDaSemana) {
  const itemsCards = localStorage.getItem(diaDaSemana);
  console.log(itemsCards);
  const cardsParaInserir = JSON.parse(itemsCards);

  const scrollHorizontal = document.getElementsByClassName(
    "scrollbar-horizontal"
  )[0];

  const divPrincipalHorarios = document.getElementsByClassName("horarios")[0];

  //apaga card do HMTL antes de inserir novos de acordo com o dia da semana selecionado
  while (scrollHorizontal.firstChild) {
    scrollHorizontal.removeChild(scrollHorizontal.firstChild);
  }

  while (divPrincipalHorarios.firstChild) {
    divPrincipalHorarios.removeChild(divPrincipalHorarios.firstChild);
  }

  //Insere um card para cada item do dia da semana contido no localstorage
  if (cardsParaInserir) {
    cardsParaInserir.map((card) => {
      //Cria um h1 e atribui a descricao da tarefa
      const novoCardTexto = document.createElement("h1");
      novoCardTexto.innerHTML = card.descricao;
      novoCardTexto.id = "digito";

      //cria a div para o card e adiciona o h1 como filho no html
      const novoCardDiv = document.createElement("div");
      novoCardDiv.id = "teste";
      novoCardDiv.appendChild(novoCardTexto);
      scrollHorizontal.appendChild(novoCardDiv);

      //insere card de horario da respectiva tarefa
      const novaDivHorario = document.createElement("div");
      novaDivHorario.className = "card-horario";

      const novoCardHorario = document.createElement("h1");
      novoCardHorario.innerHTML = card.hora;

      novaDivHorario.appendChild(novoCardHorario);

      divPrincipalHorarios.appendChild(novaDivHorario);
    });
  }
}
//RELÓGIO HORA E DATA
function time() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  document.getElementById("txt").innerHTML = h + ":" + m;
  setTimeout("time()", 500);
}