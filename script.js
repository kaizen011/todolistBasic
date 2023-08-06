const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const prioritySelect = document.getElementById("priority"); // Get the reference to the priority select element

function addTask() {
    const taskText = taskInput.value.trim();
    const priorityValue = prioritySelect.value; // Get the selected priority value from the select element

    if (taskText !== "") {
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete task";

        newTask.textContent = `${taskText} (Priority: ${priorityValue})`; // Add the priority to the task text
        newTask.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            newTask.remove();
        });

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
