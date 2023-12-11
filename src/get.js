const form = document.querySelector('form')

async function getUsers() {
    const response = await fetch('http://localhost:3000/users')
    const users = await response.json()
    users.forEach(renderUsers)
}

function renderUsers(user) {
    const card = document.createElement('div')

    const name = document.createElement('h3')
    name.textContent = user.name

    const username = document.createElement('p')
    username.textContent = user.username

    card.append(name, username)
    document.querySelector('#users').append(card)
}

document.addEventListener('DOMContentLoaded', () => {
    getUsers()
})


form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const userData = {
        name: document.querySelector('#name').value,
        birth: document.querySelector('#birth').value,
        email: document.querySelector('#email').value,
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    }

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const savedUser = await response.json()
    form.reset()
    renderUsers(userData)
    console.log(savedUser)
})