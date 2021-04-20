function loadTasks() {
  fetch('/recordtasks').then(response => response.json()).then((tasks) => {
    const taskListElement = document.getElementById('tasklist');
    tasks.forEach((task) => {
      taskListElement.appendChild(createTaskElement(task));
    })
  });
  
}
/** Creates an element that represents a task, including its delete button. */
function createTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';

  const titleElement = document.createElement('span');
  titleElement.innerText = task.email;
  taskElement.appendChild(titleElement);
  const stateElement = document.createElement('span');
  stateElement.innerText = task.state;
  taskElement.appendChild(stateElement);
  const reasonElement = document.createElement('span');
  reasonElement.innerText = task.reason;
  taskElement.appendChild(reasonElement);
  return taskElement;
}