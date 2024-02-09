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
            var tarefaDiv = document.createElement("div");
            tarefaDiv.innerHTML = `
               <li class="d-flex p-2">
                    <input type="checkbox"/> ${tarefa.nome} - ${tarefa.tipo}  <button>x</button>
               </li>    
    `;
            listaInicial.appendChild(tarefaDiv);
        }, 500 * index)
    });
}

exibirTarefas();