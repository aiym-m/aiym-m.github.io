const url = "https://solar-poised-salad.glitch.me/products";

const myInput = document.querySelector("input");
const myBtn = document.querySelector("button");
const notification = document.querySelector(".alert");
const ul = document.querySelector("ul");
const modalDiv = document.querySelector(".modalBox");
const editingInput = document.querySelector(".edited");
const checkboxInput = document.querySelector(".checkbox");
const savingBtn = document.querySelector(".saveBtn");
let currentChangingToDo = null;


const render = (todos) => {
  ul.innerHTML = "";
  todos.forEach((element) => {
    const li = `<li>${element.title} <input type="checkbox" ${
      element.completed ? "checked" : ""
    } /> <button class="edit-btn" data-index="${
      element.id
    }">Edit</button></li>`;
    ul.insertAdjacentHTML("beforeend", li);
  });

  const editBtns = document.querySelectorAll(".edit-btn");

  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        currentChangingToDo = todos.find(todo => todo.id === parseInt(e.target.id));

         modalDiv.style.display = "block"
        function updateToDo(){
    
            const updatedToDo = {
                title: editingInput.value,
                completed: true
            };
            fetch(url + "/" + currentChangingToDo.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedToDo),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                getTodos()
            })
            .catch((error) => console.log(error));
        }
     
        savingBtn.addEventListener("click", updateToDo);
       
    })
  });
};

    

// render todos function
const getTodos = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => render(data))
    .catch((error) => console.log(error));
};

getTodos();

//
const addTodo = () => {
  // logic for adding todo to database
  const todo = {
    title: myInput.value,
    completed: false,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then(() => {
      myInput.value = "";
      const p = document.createElement("p");
      p.textContent = "Todo successfully added";
      notification.prepend(p);
      notification.style.display = "flex";

      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);

      getTodos();
    })
    .catch((error) => console.log(error));
};
