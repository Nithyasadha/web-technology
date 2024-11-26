let taskFormEl=document.querySelector('#task-form');
let taskInputEl=document.querySelector('#task-el');

let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

taskFormEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let task=taskInputEl.value.trim();
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    taskInputEl.value='';
    displayTasks();
});

//Display Tasks

function displayTasks()
{
    let eachTask='';
    taskList.forEach((task)=>
    {
        eachTask+=`<li class="list-group-item list-group-item-secondary mb-2">
                        <span>${task}</span>
                        <button class="float-end icon">
                           <i class="bi bi-trash"></i>
                        </button>
                        <button class="float-end me-2 icon">
                          <i class="bi bi-pen"></i>
                        </button>
                    </li>`;
    });
    document.getElementById('task-list').innerHTML=eachTask;

}
displayTasks();
