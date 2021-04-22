// CREATE AN ARRAY OF EMPLOYEES
let employees = [[34457812, 'Ricky Smith', 3425, 'rsmith@gmail.com', 'Administrative'],
                [34357912, 'Jake Snake', 1525, 'jsnake@gmail.com', 'Administrative'],
                [24354512, 'Joe Pitcher', 1665, 'jpitcher@gmail.com', 'Administrative'],
                [24354512, 'Cindy Mitchell', 3424, 'cindyM@gmail.com', 'Administrative'],
                [24354512, 'Josselyn Brown', 0203, 'josselynB@gmail.com', 'Administrative']
];
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let empData = JSON.parse(localStorage.getItem('empdetails'));

if (!empData) {
    empData = employees;
}
// window.addEventListener("load", function () {
//     //localStorage.setItem("employees", JSON.stringify(employees));
   
// });

// GET DOM ELEMENTS
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');
let empCount = document.querySelector('#empCount');
let tbody = document.getElementsByTagName('tbody');


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener("load", function () {
    "use strict";
    buildGrid();
});

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let newEmployee = [];
    newEmployee[0] = document.querySelector('#id').value;
    newEmployee[1] = document.querySelector('#name').value;
    newEmployee[2] = document.querySelector('#extension').value;
    newEmployee[3] = document.querySelector('#email').value;
    newEmployee[4] = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empData[empData.length] = newEmployee;
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
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
        empData.splice(deleteRowIndex -1, 1);
        // BUILD THE GRID
        buildGrid();

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody;
    let tableEle = tbody[0].parentNode;
    tableEle.removeChild(tbody[0]);
    // REBUILD THE TBODY FROM SCRATCH
    let newTbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let empdetails of empData ){
        newTbody.appendChild(createTableRow(empdetails));
    }
    // REBUILDING THE ROW STRUCTURE
    tableEle.appendChild(newTbody);

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    empCount.value = empData.length;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('empdetails', JSON.stringify(empData))

};