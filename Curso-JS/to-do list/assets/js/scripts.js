function adicionarItemALista(tarefa) {

    /* Lista de tarefas que incluiremos os itens divitados no submit*/
    let listaTarefas = document.getElementById('listaTarefasHTML');
 
    
    /* Cria um item da lista html 'li' (servirá de base 
        para armazenar os demais objetos)*/
    let itemLista = document.createElement('li');

    /* Cria um checkbox  que será adicionada antes de cada item*/
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');

    /*Criar uma label que armazenarará a String tarefa */
    let label = document.createElement('label');
    /*Add o valor digitado ao label */
    label.appendChild(document.createTextNode(document.getElementById(tarefa).value));



    /* Adiciona o checkbox a estrutura do item da lista */
    itemLista.appendChild(check);

    /* Adiciona o label com o valor digitadoa a estrutura do item da lista*/
    itemLista.appendChild(label);
    
    /* Adiciona o item li com os dados digitados e objetos no submit a lista de tarefas */
    listaTarefas.appendChild(itemLista);
}

