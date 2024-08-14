const toDoList = [
    {
        id: 1,
        task: "Buy groceries",
        status: "ToDo"
    },
    {
        id: 2,
        task: "Send Emails",
        status: "inProgress"
    },
    {
        id: 3,
        task: "Finish assignment",
        status: "Complete"
    },
    {
        id: 4,
        task: "Bake Cake",
        status: "ToDo"
    },
    {
        id: 5,
        task: "Write Blog Post",
        status: "inProgress"
    },
    {
        id: 6,
        task: "Do Laundry",
        status: "ToDo"
    },
]

const container = document.querySelector("ul");
const li = document.createElement("li")
document.body.append("li")
toDoList.forEach(tasks => {
    const block = `<li>
    <p>${tasks.id}.</p>
    <p>${tasks.task}</p>
    <p class="status">${tasks.status}</p><button>Delete</button>
    </li>`
    console.log(block);
    container.insertAdjacentHTML("beforeend", block)
})

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector(".addButton")




