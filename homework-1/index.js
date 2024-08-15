const toDoList = [
    {
        id: 1,
        task: "Buy groceries",
        status: "To Do"
    },
    {
        id: 2,
        task: "Send Emails",
        status: "In Progress"
    },
    {
        id: 3,
        task: "Finish assignment",
        status: "Complete"
    },
    {
        id: 4,
        task: "Bake Cake",
        status: "To Do"
    },
    {
        id: 5,
        task: "Write Blog Post",
        status: "In Progress"
    },
    {
        id: 6,
        task: "Do Laundry",
        status: "To Do"
    },
]



const container = document.querySelector("ul");
function renderToDoList() {
    container.innerHTML = "";
    toDoList.forEach(tasks => {
        const block = `<li>
        <p>${tasks.id}.</p>
        <p>${tasks.task}</p>
        <p class="status">${tasks.status}</p><button id="${tasks.id}">Delete</button>
        </li>`
        console.log(block);
        container.insertAdjacentHTML("beforeend", block)
    })
    document.querySelectorAll("li button").forEach((button, index) => {
        button.addEventListener("click", function(){
            toDoList.splice(index, 1);
            renderToDoList()
    
        })
    })
    
} 
renderToDoList();


const buttonEl = document.querySelector(".addButton");
buttonEl.addEventListener("click", function(){
    const inputEl = document.querySelector("input");
    const newTask = {
        id: toDoList.length + 1,
        task: inputEl.value,
        status: "To Do",
    }
    toDoList.push(newTask);
    renderToDoList();
    inputEl.value = "";
}) 





