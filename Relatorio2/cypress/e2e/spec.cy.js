/// <reference = cypress>

describe('teste de criação, registro e login', () => {

  it('teste de criação de usuário com sucesso', () => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Beatriz")
    cy.get('#Text1').type("Beatriz")
    cy.get('#username').type("Beatriz")
    cy.get('#password').type("Beatriz")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")

  })

  it('teste de criação de usuario com falha', ()=>{

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Beatriz")
    cy.get('#Text1').type("Beatriz")
    cy.get('#username').type("Beatriz")
    cy.get('.btn-primary').should("be.disabled")

  })

  it('teste de login com sucesso', ()=>{

    let infos =  criarUser()
    
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', infos[0])
  })

  it('deletar user com sucesso', ()=>{

    let infos = criarUser()

    cy.login(infos[0], infos[1])

    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect') // have é para esse texto específico
  })

})

function criarUser(){

  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()

  let ID = hora + minuto + seg + "ID"
  let senha = hora + minuto + seg + "senha"

  let infos = [ID, senha]

  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")

    return infos

}
  