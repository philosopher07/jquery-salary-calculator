
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', submit)
    
}

let inventory = [];



function submit() {
    console.log('in submit');
    let itemToAdd= {
        firstName: $('#firstIn').val(),
        lastName: $('#lastIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary:$('#annualIn').val()
    }//end itemToAdd
    inventory.push(itemToAdd);
    //push value to inventory
    
}// end submit