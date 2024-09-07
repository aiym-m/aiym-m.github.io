const url = "https://solar-poised-salad.glitch.me/products/";
const button = document.querySelector("button")

function getProduct(){
    fetch(url)
    .then((result) => (result.json))
    .then((data) => {
        const container = document.querySelector(".container")

        data.forEach(element => {
            // if(element.imageURL !==0 || element.title !==0 || element.description !==0 || element.price !==0){
                const productCard = `<div class="box">
                <img id="pic" ${element.imageUrl}/>
                <h1 class="title">${element.title}</h1>
                <textarea class="description">${element.description}</textarea>
                <h2 class="price" >${element.price}</h2>
                <button class="edit" data-index="${element.id}">Edit</button>
                <button class="delete" data-index=${element.id}>Delete</button>
              </div>`

              container.insertAdjacentHTML("beforeend", productCard)
            // }
        });
    })
    .catch((error) => console.log(error))
}
getProduct()

button.addEventListener("click", getProduct())