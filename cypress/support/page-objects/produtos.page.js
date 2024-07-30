class produtosPage {

visitarUrl() {
    cy.visit('produtos')
  } 
buscarProdutos (nomeProduto) {
   cy.get('[type="text"]').eq(1).type(nomeProduto) // segundo elemento que faz referencia barra de pesquisa. ação: escrever "nomeProduto" que será atribuido
   cy.get ('[type="submit"]').eq(1).click()  // segundo elemento que faz referencia ao botão de pesquisa. ação: clicar  //obs:. o 0 é considerado o primeiro.
  } 

buscarProdutoLista(nomeProduto) {
    cy.get('  .product-block')
    .contains(nomeProduto)
    .click()
    cy.get('#tab-title-reviews > a').should('contain','Avaliações (0)')
  }
visitarProduto(nomeProduto) {
   // cy.visit (`produtos/${nomeProduto}`) // entrar na pagina produtos e busca nomeProduto atribuido na pagina de produtos
   const urlFormatada = nomeProduto.replace(/ /g, '-') // subistituir todos os espações em branco por - e fazer a mesma coisa acima
   cy.visit(`produtos/${urlFormatada}`)

  }
adicionarProdutosNoCarrinho (tamanho, cor, quantidade) {
    cy.get('.button-variable-item-'+ tamanho).click() // primeira forma de escolher o tamanho usando parametros 
    cy.get(`.button-variable-item-${cor}`).click() // segunda forma de fazer a mesma coisa usando parametros
    cy.get('.input-text').clear().type(quantidade) // elemento, limpar e escrever o parametro quantidade
    cy.get('.single_add_to_cart_button').click()

  }

}

export default new produtosPage()