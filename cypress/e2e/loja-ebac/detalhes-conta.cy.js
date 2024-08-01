/// <reference types ="cypress"/>  


describe('Funcionalidade: Detalhes da conta', () => {

     beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha)
        })   
           })
     it('Deve completar Detalhes da conta com Sucesso', () => {
        cy.detalhesConta('Arthur','Silva','Arthur_teste')
        cy.get('.woocommerce-message').should('exist')
        
     });
     
     
        });