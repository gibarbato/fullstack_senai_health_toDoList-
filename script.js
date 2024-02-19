var tarefas = [];

function adicionarTarefa() {
  var titulo = document.getElementById("tituloTarefa").value;
  var categoria = document.getElementById("categoria-da-tarefa").value;
  
  tarefas.push({ nome: titulo, tipo: categoria });
  atualizarListaTarefas();
}

// function excluirTarefa(index) {
//   tarefas.splice(index, 1); // Remove a tarefa do array
//   atualizarListaTarefas(); // Atualiza a lista na página
// }

function excluirTarefa(checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  var li = checkbox.parentNode;
  li.parentNode.removeChild(li);
}

function atualizarListaTarefas() {
  var listaTarefas = document.getElementById("lista-tarefas");
  var li = document.createElement("li");
  tarefas.forEach(function(tarefa, index) {
      li.innerHTML =`
        <input type ="checkbox"  id="item-${index}">
        <label for="item-${index}" class="checkbox-wrapper">${tarefa.nome} - ${tarefa.tipo}</label>  
        <button class="btn-cancel">x</button>`;
    listaTarefas.appendChild(li);
  });
}

document.getElementById("btnAdicionarTarefa").addEventListener("click", adicionarTarefa);
document.getElementById("btn-cancel").addEventListener("click", excluirTarefa(index));
