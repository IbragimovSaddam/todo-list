const ism = prompt('Ismingizni kiriting:')
const ism1 = ism.trim().charAt().toUpperCase()
const ism2 = ism.trim().slice(1,ism.length).toLowerCase()
const res = ism1 + ism2 

alert(`Xush kelibsiz ${res}!`)


const todoListForm = document.querySelector('.todoList_form')
const todoListInput = document.querySelector('.todoList_input')
const todoListItem = document.querySelector('.todoList')

todoListForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const qiymat = todoListInput.value.trim()
    if (qiymat.length) {
        const li = document.createElement('li')
        li.classList.add('todoList_item')
        li.textContent = qiymat
        todoListInput.value = ''
        todoListItem.appendChild(li)

        const delate = document.createElement('button')
        delate.classList.add('delete-btn')
        delate.textContent = "O'chirish"
        li.appendChild(delate)

        const finished = document.createElement('button')
        finished.classList.add('finished-btn')
        finished.textContent = 'Bajarildi'
        li.appendChild(finished)
    } else {
        alert(`${res} ma'lumot kiriting?`)
    }

    document.addEventListener('click', (e) => {
        const ota = e.target.parentElement
        if(e.target.classList[0] == 'delete-btn') {
            ota.remove()
        }
        if (e.target.classList[0] == 'finished-btn') {
            ota.classList.add('bajarilgan')
        }
    })

})