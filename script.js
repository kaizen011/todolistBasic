const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const prioritySelect = document.getElementById("priority");

function addTask() {
    const taskText = taskInput.value.trim();
    const priorityValue = prioritySelect.value;

    if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = `${taskText} (Priority: ${priorityValue})`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete task";
        deleteButton.addEventListener("click", function() {
            newTask.remove();
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit task";
        editButton.addEventListener("click", function() {
            const editInput = document.createElement("input");
            editInput.value = taskText;
            
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.addEventListener("click", function() {
                const editedText = editInput.value;
                newTask.textContent = `${editedText} (Priority: ${priorityValue})`;
                newTask.appendChild(deleteButton);
                newTask.appendChild(editButton);
            });

            newTask.textContent = "";
            newTask.appendChild(editInput);
            newTask.appendChild(saveButton);
        });

        newTask.appendChild(deleteButton);
        newTask.appendChild(editButton);
        todoList.appendChild(newTask);

        taskInput.value = "";
    }
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
