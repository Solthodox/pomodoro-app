const submitButton = document.querySelector('button')
const taskName = document.querySelector('.js-task-name')
const taskTimes = document.querySelector('.js-task-times')

let nameInput 
let timesInput = 1 

taskName.addEventListener('change', e => {
    e.preventDefault()
    nameInput = e.target.value
})

taskTimes.addEventListener('change', e => {
    e.preventDefault()
    timesInput = e.target.value
})


submitButton.addEventListener('click' , e =>{
    e.preventDefault()
    updateTable(nameInput, timesInput)
})

const updateTable = (name, times) => {
    const clName = `js-${name}`
    const tableBody = document.querySelector('.js-task')
    const newRow = 
    `<tr class="row-${clName}">
        <td>${name}</td>
        <td><span class="span-${clName}">0</span>/ <span class="span-${clName}-total">${times}</span></td>
        <td class="${clName}">
            <button class="done-${clName}">Done</button>
            <button class="increase-${clName}" >Increase pomodoro count</button>
            <button class="delete-${clName}" >Delete task</button>
        </td>
    </tr>
    `
    tableBody.innerHTML += newRow
    document.querySelector(`.done-${clName}`).addEventListener('click', e => {
        e.preventDefault()
        document.querySelector(`.${clName}`).innerHTML = '<p>Finished</p>'
    })

    document.querySelector(`.increase-${clName}`).addEventListener('click', e => {
        e.preventDefault()
        const total = parseInt(document.querySelector(`.span-${clName}-total`).innerText)
        document.querySelector(`.span-${clName}`).innerText = 
            parseInt(document.querySelector(`.span-${clName}`).innerText) < total 
            ? parseInt(document.querySelector(`.span-${clName}`).innerText) + 1
            : parseInt(document.querySelector(`.span-${clName}`).innerText)
    })

    document.querySelector(`.delete-${clName}`).addEventListener('click' , e => {
        e.preventDefault()
        document.querySelector(`.row-${clName}`).parentNode.removeChild(document.querySelector(`.row-${clName}`))
    })

    
}

