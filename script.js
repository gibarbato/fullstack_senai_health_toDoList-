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
            var tarefaDiv = document.createElement("tr");
            tarefaDiv.innerHTML = `
               <td class="td-small"> <input type="checkbox"/></td> 
               <td> ${tarefa.nome} </td> 
               <td>${tarefa.tipo}</td>
               <td class="td-small"><button>x</button></td>
    `;
            listaInicial.appendChild(tarefaDiv);
        }, 500 * index)
    });
}

exibirTarefas();