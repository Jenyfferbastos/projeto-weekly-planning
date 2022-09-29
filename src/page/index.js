//RELÓGIO HORA E DATA
function time() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  document.getElementById("txt").innerHTML = h + ":" + m;
  setTimeout("time()", 500);
}
var captar = "";
		function chamar (){
		captar = document.getElementById('valor').value;
		document.getElementById('digito').innerHTML = captar;
}
//SELECT EDITÁVEL


// function horarios(h){
//   var item = document.getElementById('item-'+h).innerHTML;
//   document.getElementsByTagName('input')[0].value=item;
// }
// function selecteditable(s){
//   var um = document.getElementsByClassName('selectEditable')[0];
//   var dois = ['block','none'];
//   um.style.display = dois[s];

//   var tres = ['0px','0px-10px']

//   setTimeout(function(){
//     um.stytle.transform = 'translate('+tres[s]+')';
//   },0);
// }

// function setarData() {
//   let elementoData = document.querySelector(".js-data");

//   let data = new Date();

//   const objData = {
//     day:"numeric",
//     year: "numeric",
//     month: "long",
//   };

//   elementoData.textContent = data.toLocaleTimeString("pt-BR", objData);
// }
// setarData();
// setInterval(() => {
//   setarData();
// }, 1000);

// var tabelaEventos = document.getElementById("tabelaEventos");
// var listaEventos = [];
// var eventoExemplo = {
//   nome: "Evento de Exemplo",
//   data: new Date(),
// };
// listaEventos.push(eventoExemplo);

// function atualizarTabelaEventos() {
//   if (listaEventos.length === 0) {
//     tabelaEventos.innerHTML = <td colspan="3">Nenhum evento</td>;
//     return;
//   }
//   for(var i=0; i< listaEventos.length; i++){
//     var evento = listaEventos[i];
//     var linha = document.createElement('tr');

//   }
// }

// window.addEventListener("load", atualizarTabelaEventos);
