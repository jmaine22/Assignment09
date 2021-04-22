// CREATE AN ARRAY OF EMPLOYEES
let employees = [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
window.addEventListener("load", function () {

});

// GET DOM ELEMENTS
let empForm = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener("load", function () {
    "use strict";

});

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM
    document.querySelector('#addForm').focus();
    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?'))
        {
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        }
    }
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};