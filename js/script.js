const containerTasks = document.querySelector('.container-tasks')
const task = document.querySelector('.task')
const span = document.querySelector('span')
const input = document.querySelector('input');

const btnSuccess = document.querySelector('.btn-success')



const btnSucessClick = () => {
    btnSuccess.addEventListener('click', () => {
    
        //create task
        const item = document.createElement('div')
        item.className = "task";
        item.innerHTML = `
            <span>${input.value}</span>
           <img id="img-task" class="delete-img" src="assets/remove.svg" alt="remove">
        `
        //validation the task
        if (input.value === "") {
            alert('nada foi digitado')
        } else {
            document.querySelector('.container-tasks').appendChild(item)
            input.value = '';
        }
        
        //delete task
        let current_tasks = document.querySelectorAll(".delete-img");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    })
}


btnSucessClick();

