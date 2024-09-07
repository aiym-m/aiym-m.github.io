//POST - method that helps us to create resource on the server
const url = "https://solar-poised-salad.glitch.me/students";
const input1 = document.querySelector(".inputFirst");
const input2 = document.querySelector(".inputSecond");
const button = document.querySelector("button");
const updating = document.querySelector(".update");


function addStudent(){
    const student = {
        fullname: input1.value,
        email: input2.value,
        isActive : true
    }
    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),

    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        input1.value = "",
        input2.value = "",
        getStudent()
    })
    .catch((error) => console.log(error));
};

button.addEventListener("click", function(){
    addStudent();
 })




function getStudent(){
    fetch("https://solar-poised-salad.glitch.me/students")
    .then((result) => result.json())
    .then((data) => {
        const ulEl = document.querySelector("ul");
        ulEl.innerHTML = "";
        // const students = data.results
        // console.log(data.results)
        data.forEach(student => {
            if(student.fullname !== "" && student.email !== "" ){
                const studentCard = `<li>${student.id}) ${student.fullname} - ${student.email} - ${student.occupation} <p class="status">${student.isActive ? "true" : false}</p></li>
                `

                ulEl.insertAdjacentHTML("beforeend", studentCard)
            }
        })
    })
    .catch((error) => console.log(error))  
   
}
getStudent()

const updateStudent = () => {
    const updatedStudent = {
        fullname: input1.value,
        email:input2.value,
        occupation: "student",
        isActive: true
    };
    fetch(url + "/3", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedStudent),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        getStudent()
    })
    .catch((error) => console.log(error));
}
updating.addEventListener("click", updateStudent);
