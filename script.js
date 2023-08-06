
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
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
