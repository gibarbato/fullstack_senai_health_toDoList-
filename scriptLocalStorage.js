// var tarefas = [];
let listaUl = document.querySelector('.lista-tarefas');

document.querySelector('#form-tarefa').addEventListener('submit', (event) => {
    event.preventDefault();
    let nomeTarefa = document.querySelector('input[name=nome-tarefa]').value;
    var nomeCategoria = document.getElementById("categoria-da-tarefa").value;

    if (nomeTarefa === "") return;
    if (nomeCategoria === "") return;

    let listaTarefas = lerListaTarefas();

    listaTarefas.push({
        nome: nomeTarefa,
        tipo: nomeCategoria,
        concluido: false
    })

    localStorage.setItem("tasks", JSON.stringify(listaTarefas))

    document.querySelector('input[name=nome-tarefa]').value = "";
    document.getElementById("categoria-da-tarefa").value = "";
    mostrarTarefas();
})

function lerListaTarefas() {
    let listaTarefas = localStorage.getItem("tasks")
    if (!!listaTarefas) {
        return JSON.parse(listaTarefas)
    }
    return []
}

function mostrarTarefas() {
    let listaTarefas = lerListaTarefas();
    // let listaTarefas = document.querySelector('.lista-tarefas');
    listaUl.innerHTML = "";
    let i = 0;
    let contador = 0;

    listaTarefas.map(function (tarefa) {
        console.log(tarefa)
        let li = document.createElement('li')
        let checked = tarefa.concluido ? 'checked' : ''; // Verifica se a tarefa está concluída
        let textDecoration = tarefa.concluido ? 'line-through' : 'none'; // Define o textDecoration
        li.innerHTML += `
        <li class="lista-tarefa-single">
        <input type="checkbox" id="${i}" onchange="marcarTarefa(${i})" ${checked}>
        <label for="${i}" class="checkbox-wrapper" style="text-decoration: ${textDecoration};">${tarefa.nome} - ${tarefa.tipo}</label> 
        <button value="${i}" class="remove btn-cancel">X</button>
        </li>
       `
        listaUl.appendChild(li)
        i++;
        // contador += 1;
    })

    if (i != 0) {
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
    let listaTarefas = lerListaTarefas()
    const checkbox = document.getElementById(indice);
    const label = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
        label.style.textDecoration = "line-through";
        listaTarefas[indice].concluido = true;
    } else {
        label.style.textDecoration = "none";
        listaTarefas[indice].concluido = false;
    }
    localStorage.setItem("tasks", JSON.stringify(listaTarefas)); // Salva a lista atualizada no localStorage
  }



function eventoRemover() {
    let listaTarefas = lerListaTarefas();
    document.querySelectorAll(".remove").forEach(function (element) {
        element.addEventListener('click', function () {
            const confirmacao = confirm("Tem certeza que deseja excluir este item?");

            if (confirmacao) {
                listaTarefas.splice(element.value, 1);
                localStorage.setItem("tasks", JSON.stringify(listaTarefas))
                mostrarTarefas();
            }
        });
    });
}

mostrarTarefas();