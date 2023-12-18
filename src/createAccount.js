import { renderUsers, userList } from "./get.js"

const form = document.querySelector('form')
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const newUserData = {
        name: document.querySelector('#name').value,
        birth: document.querySelector('#birth').value,
        email: document.querySelector('#email').value,
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    }

    try {
       const response = await validateNewUserData(newUserData)
       const savedUser = await response.json()
       form.reset()
       renderUsers(newUserData)
       userList.push(savedUser)
    } catch (error) {
        window.alert(error)
    } finally {
        form.reset()
    }

})


async function validateNewUserData(newUserData) {
    const emailUnavailable = userList.find(user => user.email === newUserData.email)
    const usernameUnavaiable = userList.find(user => user.username === newUserData.username)

    if(emailUnavailable) {
        return Promise.reject('This email is already being used.')
    } else if (usernameUnavaiable) {
        return Promise.reject('This username is already being used.')
    }

    const newUserDataToHTTP = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })

    return newUserDataToHTTP
}