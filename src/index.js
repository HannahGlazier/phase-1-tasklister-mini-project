//Necessary IDs
const form = document.querySelector('#create-task-form')
// const newTaskDescription = document.querySelector("new-task-description")
// console.log(newTaskDescription)

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target['new-task-description'].value)
    form.reset()  
})
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteButton)
  btn.textContent = "\u2713"
  p.textContent = `  ${todo}  `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteButton(e){
  e.target.parentNode.remove()
}



// document.addEventListener('DOMContentLoaded', () => {
//     .addEventListener('submit', (e) => {
//         e.preventDefault()
//         console.log(e)
//     })
// })












// // const taskList = newTaskList();
// const newTaskForm = document.getElementById("create-task-form");  
// const taskInput = document.getElementById('new-task-description')
// const newTaskPriority = document.getElementById("new-task-priority");


// Display Tasks -- "renderApp"
// let displayTasks = () => (tasks.textContent = taskInput.renderTasks())

// submitBtn.addEventListener('submit', (e) => {
//     e.preventDefault()
//     taskInput.createNewTask(newTaskInput.value)

//     e.target.removeEventListener()
//     displayTasks()
// })


// console.log(document.getElementById("new-task-priority"))


// // function buildTaskLister() {
// //     // Need to return text as child of #taskl
// //    submitBtn.addEventListener('click', function(){
// //        if(taskInput === true){
// //         tasks.appendChild
// //         }
// //    })
// // }
