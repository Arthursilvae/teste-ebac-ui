/// <reference types = "cypress"/>

describe ('Funcionalidade login', () => {

  it ('Deve fazer login com Sucesso', ()=>{
      
      cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username'). type ('arthur.teste@gmail.com')
      cy.get('#password'). type ('gamelata')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, arthur.teste (não é arthur.teste? Sair)')

  })



})