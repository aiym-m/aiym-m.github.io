//promise
//immitate database request

// fetch("https://jsonplaceholder.typicode.com/todos")  //, {method: "GET"})  by default it is uses GET method
//     .then((result) => {
//         return result.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

    //we can simplify
    //.then((result) => result.json())
    //.then((data) => console.log(data))
    //.then((error) => console.log(error))
    // const button = document.querySelector("button")
    // button.addEventListener("click", function(){
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((result) => result.json())
    //     .then((data) => document.querySelector("img").setAttribute("src", data.message))
    //     .catch((error) => console.log(error))
        
    // })

    
    const divElement = document.querySelector(".mainDiv")
    function getDataAboutPeople(){
        fetch("https://randomuser.me/api/?results=9")
        .then((result) => result.json())
        .then((data) => {
            const people = data.results
            people.forEach(person => {
                const card = `<div class="block">
                <div class="pic"><img src="${person.picture.large}"/></div>
                <h2>${person.name.first} ${person.name.last}</h2>
                <h4>${person.location.country}, ${person.location.state}, ${person.location.city}</h4>
                <p>Email:${person.email}</p>
                <p>Phone number:${person.phone}</p>
                </div>
                `
                divElement.insertAdjacentHTML("beforeend", card)
            })
        })
        .catch((error) => console.log(error))  
    }
    getDataAboutPeople()