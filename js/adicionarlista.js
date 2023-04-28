const form = document.querySelector('form');
const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');
const removeButton = document.querySelector('#removeButton');

// Adicionar nova tarefa
function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const task = document.createElement('li');
  task.className = 'task';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task${taskList.children.length + 1}`;
  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = taskText;
  task.appendChild(checkbox);
  task.appendChild(label);
  taskList.appendChild(task);
  taskInput.value = '';
}

// Remover tarefas concluídas
function removeCompletedTasks() {
  const tasks = taskList.querySelectorAll('.task');

  tasks.forEach(task => {
    if (task.classList.contains('completed')) {
      taskList.removeChild(task);
    }
  });
}

// Marcar tarefa como concluída
function completeTask(event) {
  const checkbox = event.target;
  const task = checkbox.parentNode;

  if (checkbox.checked) {
    task.classList.add('completed');
  } else {
    task.classList.remove('completed');
  }
}

// Adicionar evento de clique ao botão Adicionar
addButton.addEventListener('click', addTask);

// Adicionar evento de pressionar Enter ao campo de texto
taskInput.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    addTask(event);
  }
});

// Adicionar evento de clique ao botão Remover tarefas concluídas
removeButton.addEventListener('click', removeCompletedTasks);

// Adicionar evento de clique às checkboxes das tarefas
taskList.addEventListener('click', event => {
  if (event.target.type === 'checkbox') {
    completeTask(event);
  }
});
