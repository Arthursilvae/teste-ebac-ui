/// <reference types = "cypress"/> 
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade de produtos', () => {
   beforeEach(() => {
    produtosPage.visitarUrl()
   });   
   
    
    it('Deve Selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
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
it('Deve buscar um produto com Sucesso', () => {
  let produto = 'Tristan Endurance Tank' // criando váriavel para encurta o nome do produto
  produtosPage.buscarProdutos(produto)
  cy.get('.product_title').should('contain',produto)
});
it('Deve visitar a página do produto', () => {
  produtosPage.visitarProduto('Josie Yoga Jacket')
  cy.get('.product_title').should('contain','Josie Yoga Jacket')
});
it('Deve adicionar produto ao carrinho', () => {
  produtosPage.buscarProdutos('Zeppelin Yoga Pant') // o parametro, nome do produto dentro dos colchetes
  produtosPage.adicionarProdutosNoCarrinho('36','Green', 3) // definindo os parametros os parametros
  cy.get('.woocommerce-message').should ('contain', 'foram adicionados no seu carrinho.')
  
});
it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
  cy.fixture('produtos').then(dados => {
    produtosPage.buscarProdutos(dados[1].nomeProduto) 
    produtosPage.adicionarProdutosNoCarrinho(
      dados[1].tamanho, 
      dados[1].cor,
      dados[1].quantidade
    ) 
    cy.get('.woocommerce-message').should ('contain', dados[1].nomeProduto)
  })
});

});