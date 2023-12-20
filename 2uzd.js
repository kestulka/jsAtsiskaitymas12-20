

const listContainer = document.createElement("div")
listContainer.setAttribute("id", "listContainer")
const ulInput = document.createElement("input")
ulInput.placeholder = "how many ul"
ulInput.style.color = "red"
ulInput.type = "number"
const liInput = document.createElement("input")
liInput.placeholder = "how many li"
liInput.style.color = "red"
liInput.type = "number"
const createListButton = document.createElement("button")
createListButton.innerText = "create LIST"
createListButton.style.color = "green"

listContainer.append(
    ulInput,
    liInput,
    createListButton
)

document.body.append(
    listContainer
);

function clearInputs(){
    ulInput.value = ""
    liInput.value = ""
}

createListButton.addEventListener("click", (event) => {
    event.preventDefault()
    const numOfUl = ulInput.value;
    const numOfLi = liInput.value;

    const listCheck = document.querySelectorAll("ul")
    listCheck.forEach((list)=>list.remove())
    clearInputs()

    for (let i = 0; i < numOfUl; i++){
        const ul = document.createElement("ul")
        ul.textContent = `unordered list #${i + 1}`
        for (let j = 0; j < numOfLi; j++){
        const li = document.createElement("li")
        li.textContent = `list item #${j + 1}`
        ul.appendChild(li)
        }
        listContainer.appendChild(ul)
    }
})
 
