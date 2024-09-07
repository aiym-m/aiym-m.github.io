const addBtn = document.querySelector("#addBtn");
const url = "https://solar-poised-salad.glitch.me/products/";
const productImg = document.querySelector(".product-img");
const productTitle = document.querySelector(".product-title");
const description = document.querySelector(".description");
const productPrice = document.querySelector(".product-price")
const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const addProduct = {
        imageUrl: productImg.value,
         title: productTitle.value,
         description:description.value,
         price: productPrice.value,
         
     };
     console.log(addProduct)
     addingProduct(addProduct)
     
 });
 
async function addingProduct(product){
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.log(error);
    }
}










