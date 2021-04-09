//DOM Selectors 
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//Functions
const addTodo = (event) => {
    event.preventDefault()      //prevents form from submitting

    //creating the todo elements that will create the list items
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //Save to local storage Function
    saveLocal(todoInput.value)
    //Completed Button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    completedButton.classList.add('complete-button')
    todoDiv.appendChild(completedButton)
    //Delete Button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>'
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(deleteButton)
    //append the div to the UL in the HTML
    todoList.appendChild(todoDiv) 
    //Clears Input 
    todoInput.value = ""
};

const deleteCheck = (event) => {
    const item = event.target       //grabs whichever section of the div is clicked (li/deletebutton/completedbutton)
            if (item.classList[0] === 'delete-button'){
                const todo = item.parentElement
                //animation for falling list items on deletion, 'transitionend' allows CSS to run before function calls
                todo.classList.add('fall')
                removeLocalStorageTodos(todo)
                todo.addEventListener('transitionend', () => {
                    todo.remove()
                })
            } else if (item.classList[0] === 'complete-button'){
                const todo = item.parentElement
                todo.classList.toggle('completed')
            }
}

// Simple switch for the three options of the <select> list
const filterTodo = (e) => {                               
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else 
                    todo.style.display = "none"
                break;
        }
    })
} 

//Save the list to Local Storage 
const saveLocal = (todo) => {
    let todos
        if (localStorage.getItem('todos') === null){
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => {
    let todos
    if (localStorage.getItem('todos') === null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    //Recreate the addTodo function but using the saved todo where marked instead fo the inout value
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li')
    //This inputs the saved todo
    newTodo.innerText = todo
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    completedButton.classList.add('complete-button')
    todoDiv.appendChild(completedButton)
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>'
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(deleteButton)
    todoList.appendChild(todoDiv) 
    })
}

const removeLocalStorageTodos = (todo) => {
    let todos
    if (localStorage.getItem('todos') === null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    let todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('change', filterTodo)