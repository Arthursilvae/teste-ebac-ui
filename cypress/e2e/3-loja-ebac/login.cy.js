/// <reference types = "cypress"/> 

describe ('Funcionalidade login', () => {
    beforeEach(() => { // comando para que essa ação seja repetida antes de cada teste
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/') // comando cypress para visitar o site antes de cada teste
    });
    
    afterEach(() => { // comando para que essa ação seja repetida no final de cada teste
      cy.screenshot()  // tira o print no final de cada teste
    });
 
    it ('Deve fazer login com Sucesso', ()=>{ // é o it cenário de teste
      cy.get('#username'). type ('arthur.teste@gmail.com') // elemento e ação de escrever(type) e nesse caso será utilizado usuário válido
      cy.get('#password'). type ('gamelata') // elemento e ação de escrever (type) e nesse caso será utilizado usuário válido
      cy.get('.woocommerce-form > .button').click() // elemento e ação de clicar
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
      // elemento que só aparecerá caso o cenário for cumprido

  })
// it.only usado para fazer o cypress rodar apenas aquele cenário
  it('Deve Exibir Uma Mensagem de Erro ao Inserir Usuário Inválido', () => { // cenário de teste
    cy.get('#username'). type ('arthur.invalido@gmail.com') // elemento e type = ação(escrever) nesse caso será escrito um usuário inválido
    cy.get('#password'). type ('gamelata') // elemento e type = ação escrever
    cy.get('.woocommerce-form > .button').click() // elemento e click é uma ação 
    cy.get('.woocommerce-error').should('exist') // elemento e verificar se esse elemento existe, validação de teste

  });   
  it('Deve Exibir Uma Mensagem de Erro ao Inserir Senha Inválida', () => {
    cy.get('#username'). type ('arthur.teste@gmail.com') // elemento e nele será escrito(type) um usuário válido
    cy.get('#password'). type ('1234') // elemento e nele será escrito(type) uma senha inváida
    cy.get('.woocommerce-form > .button').click() // elemento e nele será clicado     
    cy.get('.woocommerce-error').should('exist') // validação de teste, verificar se o elemento existe
  });

})