let totalSalary = 0;
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
   
    totalSalary += Number(userSalary);
    console.log(`monthlySalary: ${totalSalary/12}`);
    
    let monthlyTotal = document.querySelector('#monthly-total');
    monthlyTotal.innerHTML = `
    Total Monthly Salary: ${totalSalary/12}`
    changeColor()
    
        let container = document.querySelector('#container');
        container.innerHTML += `
        <div> 
         ${userFirst}, ${userLast}, ${userID}, ${userTitle}, ${userSalary}
    <button onClick= "removeDiv(event)">
            Delete
        </button>
    </div>
        `;
        
}
function changeColor(){
    console.log('changeColor',totalSalary/12);
       if (totalSalary/12 >= 20000) {
           let monthlyTotal = document.querySelector('#monthly-total');
           monthlyTotal.style.backgroundColor = 'red';
          // monthlyTotal.innerHTML == 'red';
           console.log('changeColorToRed');
      }
   }
    
    //function changeColor(){
     //console.log(changeColor);
        //if (totalSalary/12 >= 20000) {
          //  let monthlyTotal = document.querySelector('#monthly-total');
          //  monthlyTotal.style.backgroundColor == 'red';
           // monthlyTotal.innerHTML == 'red';
      // }
    //}
   //changeColor();

    function removeDiv(event) {
        console.log('remove div', event.target);
        event.target.parentElement.remove();
    }