/// <reference = cypress>

describe('teste de registro, busca, acesso e funcionamento geral do site', () => {
  it('teste de REGISTRO com FALHA (NEGATIVO)', () => {

    cy.visit('https://www.skoob.com.br')
    cy.get('.l13').click()
    cy.get('.bt-mail').click()
    cy.get('#UsuarioNome').type('username')
    cy.get('#UsuarioEmail').type('xxxxx')
    cy.get('.submit > .btn').click()
    cy.get('.alert').should('contain.text', 'email parece ser inválido')
  
  })

  it('teste de REGISTRO com SUCESSO', () => {

    cy.visit('https://www.skoob.com.br')
    cy.get('.l13').click()
    cy.get('.bt-mail').click()    
    cy.get('#UsuarioNome').type('usuario')
    cy.get('#UsuarioEmail').type('x@x.com')
    cy.get('.submit > .btn').click()
    cy.get('h2').should('have.text', 'Estamos quase lá, falta apenas confirmar seu e-mail.')
  
  })

  it('teste de BUSCA com SUCESSO', () => {

    let random = randomSearch()

    cy.visit('https://www.skoob.com.br')
    cy.get('#search').type(random)
    cy.get('.input-group-btn > .btn').click()
    cy.get('.paginacao_lista_busca_down > .contador > b').should('contain.text', 'encontrados') // mesmo que nao tenha livro com o nome especificado na busca, ele deve mostrar a quantidade encontrada

  })

  it('teste de ACESSO a pagina do livro com SUCESSO', () => {

    cy.visit('https://www.skoob.com.br')
    cy.get('#search').type('Percy Jackson')
    cy.get('.input-group-btn > .btn').click()
    cy.get('.detalhes > [href="/o-ultimo-olimpiano-64463ed72685.html"]').click()
    cy.get('[style="font-size:25px;color:#333;text-align:left;padding-top:0px;"] > strong').should('have.text', 'Escolha uma das opções:')

  })

  it('teste de FUNCIONAMENTO da funcao EXPLORAR com SUCESSO', () => {

    cy.visit('https://www.skoob.com.br')
    cy.get('.dropdown-toggle--').click()
    cy.get('#topo-menu-explorar-hover > :nth-child(1) > a').click()
    cy.get('.active > a').should('have.text', 'Livros')

    cy.get('.dropdown-toggle--').click()
    cy.get('#topo-menu-explorar-hover > :nth-child(2) > a').click()
    cy.get('.active > a').should('have.text', 'Autores')

  })

  it('teste de VOLTAR PARA HOME com SUCESSO', () => {

    let random = randomSearch()

    cy.visit('https://www.skoob.com.br')
    cy.get('#search').type(random)
    cy.get('.input-group-btn > .btn').click()
    cy.get('.logo').click()
    cy.get(':nth-child(4) > h3').should('contain.text', 'Últimos lançamentos')

  })
})

function randomSearch(){
  
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()

  let search = seg + ' ' + minuto

  return search
}