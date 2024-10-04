const tasks = ["Vanilla JavaScript", "Vue.js", "React.js", "Node.js"];

let listTasks =  document.getElementsByClassName("listTasks")[0];
let form = document.getElementById("form");
console.log(form);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.input.value);
    let newTask = e.target.input.value;
    tasks.push(newTask);
    console.log(tasks);
    listTasks.innerHTML = "";
    showTasks(tasks);
});

function showTasks(todos) {
    for (let todo of todos) {
        console.log(todo);
        const task = document.createElement("p");
        task.innerText = todo;
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "✖";

        let newTask = document.createElement("div");
        newTask.appendChild(deleteButton);
        newTask.appendChild(task);
        listTasks.appendChild(newTask);
    }
}

showTasks(tasks);