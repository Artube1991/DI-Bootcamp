let div = document.getElementById("container");
console.log(div);

let li = document.getElementById("name")
console.log(li)

document.getElementById("name").textContent = "Richard"

// let to_delete = document.getElementById('to_delete')
//to_delete.remove()

let parent_thing = document.getElementsByTagName('ul')[1];
console.log(parent_thing[1]);
let child_thing = document.getElementById('to_delete');
parent_thing.removeChild(child_thing);

/*let elem = document.getElementsByTagName('ul')[0];
elem.classList.add('student_list');*/

let elem_two = document.getElementsByTagName('ul')[1];
elem_two.classList.add('university', 'attendace');

div.style.backgroundColor = "lightblue";
div.style.padding = "20px 20px 20px 20px";
document.getElementById("not_display").style.display = "none";

