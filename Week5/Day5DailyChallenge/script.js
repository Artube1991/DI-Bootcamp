const tasks = ["Vanilla JavaScript", "Vue.js", "React.js", "Node.js"]

let taskBox =  document.getElementsByClassName("listTasks")[0]

function addTask(todos) {
    for (let todo of todos) {
        console.log(todo);
        let newTask = document.createTextNode(todo);
       taskBox.appendChild(newTask);
    }
}

addTask(tasks);