
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', submit)
    
}

let employee = [];


function displayEmployee() {
    let el = $( 'employeeOut' )
    // empty tr
    el.empty();
    // loop thru employee
    for(let i=0; i<employee.length;i++){
        // append each input to tr
        el.append(`<td>
        ${employee[ i ].firstname}
        </td>`)
    } //end for loop
}// end displayEmployee


function submit() {
    console.log('in submit');
    let itemToAdd= {
        firstName: $('#firstIn').val(),
        lastName: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary:$('#annualIn').val()
    }//end itemToAdd
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