const tasks = ["Vanilla JavaScript", "Vue.js", "React.js", "Node.js"];

let listTasks =  document.getElementsByClassName("listTasks")[0];
let form = document.getElementById("form");
console.log(form);


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
        listTasks.appendChild(taskArea);
        const task = document.createElement("p");
        task.innerText = todo;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "✖";

        taskArea.appendChild(deleteButton);
        taskArea.appendChild(task);

        deleteButton.addEventListener("click", (e) => {
            for (let i = 0, len = tasks.length; i < len; i++) {
                if (tasks[i] === todo) {
                    tasks.splice(i, 1);
                    // break;
                }
            };
            console.log(tasks);
            
            listTasks.innerHTML = "";

            showTasks(tasks);
        })
    }
};

showTasks(tasks);