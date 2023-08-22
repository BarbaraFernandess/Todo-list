const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-task')

let itemList = []

function addNewTask() {
    itemList.push({
        task: input.value,
        concluded: false
    })

    input.value = ''
    
    showTasks()

}

function showTasks() {
    let newLi = ''

    itemList.forEach((item, index) => {

        newLi = newLi + `

        <li class="task ${item.concluded && "done"}">
        <img src="./img/checked.png" alt="check-na=-tarefa" onclick="completeTask(${index})">
        <p>${item.task}</p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deleteItem(${index})">
    </li>
    `

    })

    completeList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(itemList))

}

function completeTask(index){

    itemList[index].concluded = !itemList[index].concluded

    showTasks()
}

function deleteItem(index){

    itemList.splice(index, 1)
    showTasks()
   
}

function reloadScreen(){

    const tasksFromLocalStorage = localStorage.getItem('list')

    if(tasksFromLocalStorage){  
        itemList = JSON.parse(tasksFromLocalStorage)
    }

    showTasks()
}

reloadScreen()

button.addEventListener('click', addNewTask)