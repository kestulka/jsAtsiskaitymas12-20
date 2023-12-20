const formContainer = document.createElement("form")
formContainer.setAttribute("id", "formContainer");

const taskInput = document.createElement("input")
taskInput.setAttribute("id", "taskInput")
taskInput.type = "text"

const priorityInput = document.createElement("select")
priorityInput.setAttribute("id", "priorityInput")
priorityInput.type = "select"

const priorityOption1 = document.createElement("option")
priorityOption1.setAttribute("id", "lowPriority")
priorityOption1.text = "low"

const priorityOption2 = document.createElement("option")
priorityOption2.setAttribute("id", "mediumPriority")
priorityOption2.text = "medium"

const priorityOption3 = document.createElement("option")
priorityOption3.setAttribute("id", "highPriority")
priorityOption3.text = "high"

priorityInput.appendChild(priorityOption1)
priorityInput.appendChild(priorityOption2)
priorityInput.appendChild(priorityOption3)

formContainer.append(
    taskInput,
    priorityInput,
)

document.body.append(formContainer)








