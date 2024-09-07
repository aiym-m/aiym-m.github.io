const createProducts = document.querySelector(".create");
const productGrid = document.querySelector(".secondInSecond");
const createProduct = document.querySelector(".addingNewProduct");
const productList = document.querySelector(".mainFlex");
const url = "https://solar-poised-salad.glitch.me/aiym";

// Modal Elements
const editModal = document.getElementById("editModal");
const closeModal = document.querySelector(".close");
const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("edit-title");
const editImage = document.getElementById("edit-img");
const editPrice = document.getElementById("edit-price");

let currentProductId = null; // To store the ID of the product being edited


 createProducts.addEventListener("click", function(){
    document.querySelector(".secondInSecond").style.display = "none";
    document.querySelector(".addingNewProduct").style.display = "block";


 })

const title = document.querySelector("#product-title");
const image = document.querySelector("#product-img");
const price = document.querySelector("#product-price");
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    
const product = {
    imageUrl: image.value,
    title: title.value,
    price:price.value,
}
addProduct(product)


})

async function addProduct(products){
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
        });
        const data = await response.json();
        document.querySelector(".secondInSecond").style.display = "block";
    document.querySelector(".addingNewProduct").style.display = "none";
        getData()
        title.value = "";
        image.value = "";
        price.value = "";
        console.log(data)
    }catch(error){
        console.log(error)
    }
}


function renderProducts(tovary){
    productList.innerHTML = "";
    tovary.forEach((tovar) => {
        const productItem = `<div class="position">
                  <img class="images" src="${tovar.imageUrl}" />
                  <div class="about">
                    <p>${tovar.title}</p>
                    <h4>$${tovar.price}</h4>
                    <div class="button-line">
                      <span class="button-edit" data-id="${tovar.id}"
                        ><i class="fa-solid fa-pen icons"></i>Edit</span>
                      <span class="button-delete" data-index="${tovar.id}"
                        ><i class="fa-solid fa-trash"></i>Delete</span>
                    </div>
                  </div>
                </div>`
            productList.insertAdjacentHTML("beforeend",productItem);
    });
    const editBtns = document.querySelectorAll(".button-edit");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", function(e) {
        currentProductId = e.target.dataset.id; // Store the ID of the product to be edited
        openEditModal(currentProductId);
      });
    });
    const deleteBtns = document.querySelectorAll(".button-delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function(e){
            const itemId = e.target.dataset.index;
            fetch(url + "/" + itemId, {
                method: "DELETE",
            })
            .then((res) => res.json())
            .then(() => {
                getData();
            })
            .catch((error) => console.log(error));
        })
    })
}

// Function to open and populate the Edit Modal
function openEditModal(productId) {
    fetch(url + "/" + productId)
      .then((res) => res.json())
      .then((product) => {
        // Populate the modal with the product data
        editTitle.value = product.title;
        editImage.value = product.imageUrl;
        editPrice.value = product.price;
        editModal.style.display = "flex"; // Show the modal
      })
      .catch((error) => console.log(error));
  }
  
  // Close the modal when clicking the close button
  closeModal.addEventListener("click", function() {
    editModal.style.display = "none";
  });
  
  // Close the modal when clicking outside of the modal content
  window.addEventListener("click", function(event) {
    if (event.target === editModal) {
      editModal.style.display = "none";
    }
  });
  
  // Handle the Edit Form submission
  editForm.addEventListener("submit", function(e) {
    e.preventDefault();
   const updatedPrice = editPrice.value;
    const updatedProduct = {
      title: editTitle.value,
      imageUrl: editImage.value,
      price: parseFloat(updatedPrice),
    };
  
    fetch(url + "/" + currentProductId, {
      method: "PUT", // Use PUT to update the existing product
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        editModal.style.display = "none"; // Close the modal
        getData(); // Refresh product list
      })
      .catch((error) => console.log(error));
  });

async function getData(){
    try{
        const res = await fetch(url);
        const data = await res.json();
        renderProducts(data);
    }catch(error){
        console.log(error)
    }
}
getData();