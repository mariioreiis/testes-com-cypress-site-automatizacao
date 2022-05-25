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

      it.only('Preencher os campos do "Contact Us" e enviar', function(){
        cy.get('#contact-link > a')
        .should('be.visible')
        .click()

        cy.get('#id_contact')
        .select(2)
        .should('have.value', 'Customer service')
  
        //cy.get('#submitMessage > span')
        //.should('be.visible')
        //.click()
      })
    })