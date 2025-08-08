document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.classList.add("task");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;


        taskSpan.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});