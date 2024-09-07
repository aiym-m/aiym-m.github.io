async function getTodos() {
    try{
        const response = await axios ("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
    }catch(error){
       console.log(error);  
    }
}
getTodos()

// const url = "https://jsonplaceholder.typicode.com/photos";
async function getImages(){
    try{
        const response = await axios ("https://jsonplaceholder.typicode.com/photos")
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
getImages()