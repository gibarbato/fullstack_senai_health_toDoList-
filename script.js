var tarefas = [];

function adicionarTarefa() {
  var titulo = document.getElementById("tituloTarefa").value;
  var categoria = document.getElementById("categoria-da-tarefa").value;
  
  if (titulo === "") return;
  if (categoria === "") return;

  tarefas.push({ nome: titulo, tipo: categoria });
  atualizarListaTarefas();
}

// function excluirTarefa(index) {
//   tarefas.splice(index, 1); // Remove a tarefa do array
//   atualizarListaTarefas(); // Atualiza a lista na página
// }

function atualizarListaTarefas() {
  var listaTarefas = document.getElementById("lista-tarefas");
  var li = document.createElement("li");
  tarefas.forEach(function(tarefa, index) {
      li.innerHTML =`
        <input type ="checkbox"  id="${index}">
        <label for="${index}" class="checkbox-wrapper">${tarefa.nome} - ${tarefa.tipo}</label>  
        <button class="btn-cancel" id="btn-${index}">x</button>`;
    listaTarefas.appendChild(li);
    
    let idbtn = document.getElementById(`${index}`).id;
    console.log(idbtn);

    document.getElementById("tituloTarefa").value = "";
    document.getElementById("categoria-da-tarefa").value = "";
  });

}



idValor();

document.getElementById("btnAdicionarTarefa").addEventListener("click", adicionarTarefa);




