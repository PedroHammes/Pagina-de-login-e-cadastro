export {getUsers, renderUsers, userList}

const form = document.querySelector('form')
let userList = []

async function getUsers() {
    const response = await fetch('http://localhost:3000/users')
    const users = await response.json()
    users.forEach(renderUsers)
    users.forEach(user => {userList.push(user)})
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
