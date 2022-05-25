/// <reference types="Cypress" />
describe('Testes no site My Store', function() {

    beforeEach(() => {
        cy.visit('/')
      })

      it('Acessa a home do site', function(){
          cy.title()
          .should('eq', 'My Store')
          cy.get('.logo')
          .should('be.visible')
      })

      it('Testar o login do site', function(){
        cy.get('.login')
        .should('be.visible')
        .click()
        cy.contains('Authentication')
        .should('be.visible')
      })

      it('Acesso ao "Contact Us"', function(){
        cy.get('#contact-link > a')
        .should('be.visible')
        .click()
      })

      it('Testar envio sem preencher os campos do "Contact Us"', function(){
        cy.get('#contact-link > a')
        .should('be.visible')
        .click()

        cy.get('#submitMessage > span')
        .should('be.visible')
        .click()

        cy.get('.alert')
        .should('be.visible')
      })

      it('Preencher os campos do "Contact Us" e enviar, voltar a Home no final da execução', function(){
        cy.get('#contact-link > a')
        .should('be.visible')
        .click()

        cy.get('#id_contact')
        .select('Webmaster')
        .should('have.value', 1)

        cy.get('#email')
        .should('be.visible')
        .clear()
        .type('mario@gmail.com')
        .should('not.have.text')

        cy.get('#id_order')
        .should('be.visible')
        .clear()
        .type('lalalala')
        .should('not.have.text')

        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/pj3.jpg')
        .should(function($input) {
           expect($input[0].files[0].name).to.equal('pj3.jpg')
        })
  
        cy.get('#message')
        .should('be.visible')
        .clear()
        .type('este campo está receendo um teste automatizado utilizando o cypress ...')
        .should('not.have.text')

        cy.get('#submitMessage > span')
        .should('be.visible')
        .click()

        cy.get('.alert')
        .should('be.visible')

        cy.get('li > .btn > span')
        .should('be.visible')
        .click()
        cy.title()
        .should('eq', 'My Store')
        cy.get('.logo')
        .should('be.visible')
        
      })
    })