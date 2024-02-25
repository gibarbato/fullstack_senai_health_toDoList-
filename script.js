var tarefas = [];

document.querySelector('#form-tarefa').addEventListener('submit', (event) => {
    event.preventDefault();
    let nomeTarefa = document.querySelector('input[name=nome-tarefa]').value;
    var nomeCategoria = document.getElementById("categoria-da-tarefa").value;
    
    if (nomeTarefa === "") return;
    if (nomeCategoria === "") return;

    tarefas.push({
        nome: nomeTarefa,
        tipo: nomeCategoria
    })

    mostrarTarefas();
    document.querySelector('input[name=nome-tarefa]').value="";
    document.getElementById("categoria-da-tarefa").value="";
})

function mostrarTarefas() {
    let listaTarefas = document.querySelector('.lista-tarefas');
    listaTarefas.innerHTML = "";
    let i = 0;
    let contador = 0;
    
    tarefas.map(function (tarefa) {
        listaTarefas.innerHTML += `
        <li class="lista-tarefa-single">
        <input type="checkbox" id="${i}" onchange="marcarTarefa(${i})">
        <label for="${i}" class="checkbox-wrapper">${tarefa.nome} - ${tarefa.tipo}</label> 
        <button value="${i}" class="remove btn-cancel">X</button>
        </li>
        `;
        i++;
        contador += 1;
    })
 
    if(i != 0){
        let totalTarefas = document.querySelector('.total-tarefas');
        totalTarefas.innerHTML = `<div>Número de tarefas - ${i}</div>`;
    } else {
      let totalTarefas = document.querySelector('.total-tarefas');
      totalTarefas.innerHTML = ``;
    }
    console.log(i)
    eventoRemover();
}

function marcarTarefa(indice) {
  const checkbox = document.getElementById(indice);
  const label = checkbox.nextElementSibling;
  
  if (checkbox.checked) {
      label.style.textDecoration = "line-through";
  } else {
      label.style.textDecoration = "none";
  }
}

function eventoRemover() {
  document.querySelectorAll(".remove").forEach(function (element) {
      element.addEventListener('click', function () {
          const confirmacao = confirm("Tem certeza que deseja excluir este item?");

          if (confirmacao) {
              tarefas.splice(element.value, 1);
              mostrarTarefas();
          }
      });
  });
}