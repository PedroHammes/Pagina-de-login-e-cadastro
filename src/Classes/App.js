import User from './User.js'

export default class App {
  static #users = []

  static findUser(email){
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }
  
  static createUser(name, email, password, rewritePassword){
    const userExists = App.findUser(email)
    if(userExists){
      return alert(`Este email já está vinculado a uma conta.\nUse outro.`)
    }else if(password != rewritePassword){
      return alert('As senhas não coincidem.')
    }else{
      const user = new User(name, email, password)
      alert(`Usuário ${user.name} criado!`)
      return App.#users.push(user)
    }
  }

}