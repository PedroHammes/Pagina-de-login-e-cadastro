import User from './User.js'

export default class App {
  static #users = []

  static findUser(email){
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }
  
  static createUser(name, email, password, rewritePassword){
    const userExists = App.findUser(email)
    if(name == '' || email == '' || password == ''){
      return alert(`Preencha o formulário.`)
    }else if(userExists){
      return alert(`Este email já está vinculado a uma conta.\nUse outro.`)
    }else if(password != rewritePassword){
      return alert('As senhas não coincidem.')
    }else{
      const user = new User(name, email, password)
      alert(`Usuário ${user.name} criado!`)
      return App.#users.push(user)
    }
  }

  static login(email, password){
    const userExists = App.findUser(email)
    if(!userExists){
      return alert(`Nenhuma conta vinculada ao email ${email} foi encontrada.\nCadastre-se`)
    }else if(password !== userExists.password){
      return alert(`Senha incorreta`)
    }else{
      return alert(`Login realizado!`)
    }
  }

}