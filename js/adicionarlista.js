function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskList = document.getElementById("todo-list");
    
    // Cria um novo elemento <li> para a nova tarefa
    var newTask = document.createElement("li");
    
    // Adiciona o texto da nova tarefa dentro do <li>
    newTask.innerText = taskInput.value;
    
    // Cria um botão "Remover" para a nova tarefa
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remover";
    removeButton.onclick = function() {
      newTask.remove();
    };
    
    // Adiciona a nova tarefa e o botão "Remover" na lista de tarefas
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
    
    // Limpa o input da nova tarefa
    taskInput.value = "";
  }