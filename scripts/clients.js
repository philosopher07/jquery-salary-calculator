
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', submit)
    
}

let employee = [];

function deleteRow() {
    console.log('in deleteRow');
    $(this).parent().parent().remove();
}


function displayEmployee() {
    let el = $( '#tbody' )
    // empty tr
    el.empty();
    // totalMonthly
    let totalMonthly = 0;
    // loop thru employee
    for(let i=0; i<employee.length;i++){
        // append each input to tr
        el.append(`<tr><td> ${employee [i].firstName}</td>
        <td> ${employee [i].lastName}</td>
        <td> ${employee [i].id}</td>
        <td> ${employee [i].title}</td>
        <td> ${employee [i].annualSalary}</td>
        <td><button class="deleteBtn">Delete</button></td></tr>`       
        )
        //
        totalMonthly += parseInt(employee[i].annualSalary / 12);
        console.log(totalMonthly);
               
        $('#targetTotal').empty().append(totalMonthly)
        } //end for loop
     $('.deleteBtn').on('click', deleteRow)
}// end displayEmployee




function submit() {
   // console.log('in submit');
    let itemToAdd= {
        firstName: $('#firstIn').val(),
        lastName: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary:$('#annualIn').val()
    }//end itemToAdd
    console.log("employee to add:", itemToAdd);
    console.log('list of employees:', employee);
    
    
    //push value to employess
    employee.push(itemToAdd);
    
    //empty inputs
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualIn').val('');
    displayEmployee();
}// end submit