
let button = document.querySelector(".todolist button")
let input = document.querySelector(".todolist .box input")
let ul = document.querySelector(".todolist .list")

let arr = []

let newData= localStorage.getItem("task")

if(newData != null){
    arr= JSON.parse(newData)
}
showDisplay()
button.onclick=()=>{
    let inputValue = input.value;
    arr.push({task : inputValue})
    saveInfo(arr)
    input.value=""
}


function saveInfo(arr) {
    let str= JSON.stringify(arr)
    localStorage.setItem("task", str)
    showDisplay()
}


function showDisplay() {
    let li = ""
    arr.forEach((task, i)=>{
        li+= `
        <li>
                <div class="name">
                    <span style="width: 30px;">${(i>8)? i+1: "0"+(i+1)}</span>
                    <span>${task.task}</span>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </li>
        `
    })
    ul.innerHTML = li

}