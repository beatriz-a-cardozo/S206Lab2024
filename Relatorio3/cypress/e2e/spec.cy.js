// <reference = cypress>

describe('teste de registro, login, criar arquivo, deletar arquivo', () => {
  it('passes', () => {

    cy.visit('https://www.skoob.com.br')
    cy.get('.l13').click()
    cy.get('.bt-mail').click()
    cy.get('#UsuarioNome').type(user)
  })

})

function cadastro(){

  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()

  let user = minuto + seg + "username"
  let senha = seg + minuto + "password"

  let infos = [user, senha]

  cy.visit('https://myanimelist.net')
  cy.get('.header-menu-login > #malLogin').click()
  
}