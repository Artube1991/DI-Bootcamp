function renderItem(){

}

function list<Todo>(arr: Todo[], renderItem) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

