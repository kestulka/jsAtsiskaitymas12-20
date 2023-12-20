// element creation

const formContainer = document.createElement("form");
formContainer.setAttribute("id", "formContainer");

const taskInput = document.createElement("input");
taskInput.setAttribute("id", "taskInput");
taskInput.setAttribute("required", "true");
taskInput.type = "text";

const priorityInput = document.createElement("select");
priorityInput.setAttribute("id", "priorityInput");
priorityInput.setAttribute("required", "true");
priorityInput.type = "select";

const priorityOption1 = document.createElement("option");
priorityOption1.setAttribute("id", "lowPriority");
priorityOption1.text = "low";

const priorityOption2 = document.createElement("option");
priorityOption2.setAttribute("id", "mediumPriority");
priorityOption2.text = "medium";

const priorityOption3 = document.createElement("option");
priorityOption3.setAttribute("id", "highPriority");
priorityOption3.text = "high";

const saveButton = document.createElement("button");
saveButton.setAttribute("id", "saveButton");
saveButton.innerText = "Save";

// appends

priorityInput.appendChild(priorityOption1);
priorityInput.appendChild(priorityOption2);
priorityInput.appendChild(priorityOption3);

formContainer.append(taskInput, priorityInput, saveButton);

document.body.append(formContainer);

// local storage

const lsCheck = localStorage.getItem("tasks");
const tasksLs = lsCheck === null ? [] : JSON.parse(lsCheck);
console.log(tasksLs);
// localStorage.clear();

// save to LS

saveButton.addEventListener("click", (event) => {
  // required pakaitalas formai
  const formValidation = formContainer.checkValidity();
  if (!formValidation) {
    return;
  }
  event.preventDefault();

  // create object based on user input values
  const taskValue = taskInput.value;
  const taskPriority = priorityInput.value;
  counter++;
  const newTask = {
    id: counter,
    task: taskValue,
    priority: taskPriority,
  };

  // push object to LS
  tasksLs.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasksLs));
  alert("task has been saved");
  createTable();
  clearInputField();
});

// main function + event listeners

function createTable() {
  // check for existing table, if it does removes it
  const existingTable = formContainer.querySelector("#tasksTable");
  if (existingTable) {
    existingTable.remove();
  }

  // new table creation
  const table = document.createElement("table");
  table.setAttribute("id", "tasksTable");
  const tableBody = document.createElement("tbody");

  // iterate each task in LS array
  tasksLs.forEach((el, index) => {
    // new row for each task
    const row = document.createElement("tr");
    // checkbox
    const checkboxCell = document.createElement("td");
    const checkButton = document.createElement("input");
    checkButton.setAttribute("id", "checkButton");
    checkButton.setAttribute("type", "checkbox");
    checkboxCell.appendChild(checkButton);
    row.appendChild(checkboxCell);

    // visuals when box is checked
    checkButton.addEventListener("change", () => {
      if (checkButton.checked) {
        row.style.backgroundColor = "green";
        cell.style.textDecoration = "line-through";
      } else {
        row.style.backgroundColor = "";
        cell.style.textDecoration = "";
      }
    });

    //  display task inputs
    const cell = document.createElement("td");
    const cellText = document.createTextNode(
      `id: ${el.id} | task: ${el.task} | priority: ${el.priority}`,
    );
    cell.appendChild(cellText);
    row.appendChild(cell);

    // delete element/cell
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.innerText = "delete task";
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "grey";
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // delete button
    deleteButton.addEventListener("click", (event) => {
      // fix id sequence after deletion
      event.preventDefault();
      tasksLs.splice(index, 1);
      tasksLs.forEach((task, index) => {
        task.id = (index + 1).toString();
      });
      localStorage.setItem("tasks", JSON.stringify(tasksLs));
      alert("task deleted sucessfully");
      createTable();
      updateLocalStorage();
    });
    // new row to body
    tableBody.appendChild(row);
  });
  // append to form div
  table.appendChild(tableBody);
  formContainer.appendChild(table);
  table.setAttribute("border", "3");
}

// keep table after reload
document.addEventListener("DOMContentLoaded", () => {
  createTable();
});

// global functions

function clearInputField() {
  taskInput.value = "";
  priorityInput.value = "";
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasksLs));
}
let counter = 0;
function getUniqueTaskId(tasks) {
  let counter = tasks.length;
  tasks.forEach((task) => {
    if (task.id > counter) {
      counter = task.id;
    }
  });
  return counter;
}

const findTaskByPriority = (priority) => {
  return tasksLs.filter((task) => task.priority === priority);
};
