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
    // showTasks(tasks);
    for (let todo of tasks) {
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

        console.log(delButtons);

        deleteButton.addEventListener("click", (e) => {
            taskArea.innerHTML = "";
        })
    }
});

// function showTasks(todos) {
//     for (let todo of todos) {
//         console.log(todo);
//         const task = document.createElement("p");
//         task.innerText = todo;
//         let newTask = document.createElement("div");
//         let button = document.createElement(deleteButton);

//         newTask.appendChild(task);
//         task.appendChild(button);
//         listTasks.appendChild(newTask);

//     }
// };

let delButtons = document.getElementsByClassName("delete");

delButtons.addEventListener("click", (e) => {
    console.log("fsdfsdsf");
})

// showTasks(tasks);