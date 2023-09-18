function addDiv(event){
    event.preventDefault();

    let userFirst = document.querySelector('#todo-first').value;
    let userLast = document.querySelector('#todo-last').value
    let userID = document.querySelector('#todo-id').value
    let userTitle = document.querySelector('#todo-title').value
    let userSalary = document.querySelector('#todo-salary').value
   
    document.querySelector('#todo-first').value = '';
    document.querySelector('#todo-last').value = '';
    document.querySelector('#todo-id').value = '';
    document.querySelector('#todo-title').value = '';
    document.querySelector('#todo-salary').value = '';
   
    
        let container = document.querySelector('#container');
        container.innerHTML += `
        <div>
        Employees: 
         ${userFirst}, ${userLast}, ${userID}, ${userTitle}, ${userSalary}
    <button onClick= "removeDiv(event)">
            Delete
        </button>
    </div>
        `;
    }

    function removeDiv(event) {
        console.log('remove div', event.target);
        event.target.parentElement.remove();
    }