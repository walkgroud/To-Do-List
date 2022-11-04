window.addEventListener('load', () => {
    const form = document.querySelector('.task-form')
    const input = document.querySelector('.task-input')
    const tasks = document.querySelector('.tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value

        if (!task) {
            alert('please fill out the task')
            return
        }

        const currentTask = document.createElement('div')
        currentTask.classList.add('current-task')

        const contentEL = document.createElement('div')
        contentEL.classList.add('content')

        currentTask.appendChild(contentEL)

        const inputEl = document.createElement('input')
        inputEl.classList.add('text')
        inputEl.type = 'text'
        inputEl.value = task
        inputEl.setAttribute('readonly', 'readonly')

        contentEL.appendChild(inputEl)

        const actionsEl = document.createElement('div')
        actionsEl.classList.add('actions')

        const editBtn = document.createElement('button')
        editBtn.classList.add('edit')
        editBtn.innerText = 'Edit'

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete')
        deleteBtn.innerText = 'Delete'

        actionsEl.appendChild(editBtn)
        actionsEl.appendChild(deleteBtn)

        currentTask.appendChild(actionsEl)

        tasks.appendChild(currentTask)

        input.value = ''

        editBtn.addEventListener('click', () => {
            if (editBtn.innerText.toLowerCase() == 'edit') {
                inputEl.removeAttribute('readonly')
                inputEl.focus()
                editBtn.innerText = 'Save'
            } else {
                inputEl.setAttribute('readonly', 'readonly')
                editBtn.innerText = 'Edit'
            }
        })

        deleteBtn.addEventListener('click', () => {
            currentTask.remove()
        })
    })
})