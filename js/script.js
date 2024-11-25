const input = document.querySelector('#input-box');
const listContainer = document.querySelector (".list");
const addTaskBtn = document.querySelector ('#add-task')


addTaskBtn.addEventListener ('click', addTask)


function addTask () {
    if (input.value ==="") {
        alert('Add some text')
       }
       else {
        const taskText = input.value;
        const li = document.createElement("li");
        li.innerHTML = taskText;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
       }
       input.value= "";
}

listContainer.addEventListener("click", completeTask);
function completeTask (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
}
