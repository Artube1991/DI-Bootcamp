const tasks = ["Vanilla JavaScript", "Vue.js", "React.js", "Node.js"];

let listTasks =  document.getElementsByClassName("listTasks")[0];
let form = document.getElementById("form");

let clear = document.getElementById("clear");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.input.value);
    let newTask = e.target.input.value;
    if (newTask !== "") {
    tasks.push(newTask)
    }
    else if (newTask === "") {
        return
    };
    console.log(tasks);
    listTasks.innerHTML = "";
    showTasks(tasks);
});

function showTasks(todos) {
    for (let todo of todos) {
        console.log(todo);
        const taskArea = document.createElement("div");
        taskArea.classList.add("taskarea");
        listTasks.appendChild(taskArea);
        const task = document.createElement("label");
        task.innerText = todo;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "✖";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        taskArea.appendChild(deleteButton);
        taskArea.appendChild(checkbox);
        taskArea.appendChild(task);

        deleteButton.addEventListener("click", (e) => {
            for (let i = 0, len = tasks.length; i < len; i++) {
                if (tasks[i] === todo) {
                    tasks.splice(i, 1);
                }
            };
            console.log(tasks);
            
            listTasks.innerHTML = "";

            showTasks(tasks);
        })
    }
};

clear.addEventListener("click", (e) => {
    tasks.length = 0;
    listTasks.innerHTML = "";
    showTasks(tasks);
});

showTasks(tasks);