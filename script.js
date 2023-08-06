const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete task";
        
        newTask.textContent = taskText;
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
