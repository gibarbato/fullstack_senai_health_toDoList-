var tarefas = [
    { nome: "aula Fullstack",
      tipo: "pessoal"  
    },
    { nome: "planejamento",
      tipo: "trabalho"  
    },
    { nome: "reunião",
      tipo: "trabalho"  
    },
    { nome: "supermercado",
      tipo: "pessoal"  
    },
];

console.log(tarefas);

function exibirTarefas() {
    var listaInicial = document.getElementById("lista-tarefas");

    // Adiciona cada tarefa a listaInicial
    tarefas.forEach(function (tarefa, index) {
        setTimeout(function () {
            var tarefaDiv = document.createElement("li");
            tarefaDiv.innerHTML = `
               <input type="checkbox" class="form-check-input check-tarefa"/> 
                ${tarefa.nome} - ${tarefa.tipo}
               <button class="btn btn-outline-danger">x</button>
    `;
            listaInicial.appendChild(tarefaDiv);
        }, 500 * index)
    });
}

exibirTarefas();