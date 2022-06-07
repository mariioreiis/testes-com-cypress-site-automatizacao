/// <reference types="Cypress" />
describe('Testes no site My Store', function() {

    beforeEach(() => {
        cy.visit('/')
      })

      it('Testando o comando para validar a Home', function(){
          cy.ValidaHome()
      })

      it('Adicionando ítem no carrinho', function(){
          cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
          .should('be.visible')
          .click()

          cy.get('.layer_cart_product')
          .should('be.visible')
      })
    })