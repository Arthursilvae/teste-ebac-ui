/// <reference types = "cypress"/> 

describe('Funcionalidade de produtos', () => {
   beforeEach(() => {
    cy.visit("produtos")
   });   
   
    
    it('Deve Selecionar um produto da lista', () => {
        cy.get('  .product-block')
        //.first()
        //.last()
        //.eq(2)
        .contains('Aero Daily Fitness Tee')
        .click()
        cy.get('#tab-title-reviews > a').should('contain','Avaliações (0)')


    });
  it('Deve selecionar o primeiro produto da lista', () => {
    cy.get('  .product-block').first().click()
    cy.get('#tab-title-description > a').should('exist')

  });
 it('Deve selecionar o ultimo produto da lista', () => {
    cy.get('  .product-block').last().click() 
    cy.get('#tab-title-description > a').should('contain','Descrição')
 });
it('Deve selecionar o quinto produto da lista', () => {
    cy.get('  .product-block').eq(4).click()
    cy.get('#tab-title-description > a').should('exist')  
    
});

});