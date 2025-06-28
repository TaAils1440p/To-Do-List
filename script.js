function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `
                    <span>${taskText}</span>
                    <div>
                        <button onclick="completeTask(this)">Terminé</button>
                        <button onclick="removeTask(this)">Supprimer</button>
                    </div>
                `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function removeTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}