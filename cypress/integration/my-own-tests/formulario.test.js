/// <reference types="cypress" />

describe('prueba de formulario', () =>{
    it('Registro de formulario con Datos Validos', () => {
        var firstName = "Angel"
        var lastName = "Torre"
        var email = "angeltorrelopez@gmail.com";
        var mobileNumber = "1234567890";

        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName')
        .type(firstName).should('have.value', firstName)

        cy.get('#lastName')
        .type(lastName).should('have.value', lastName)

        cy.get('#userEmail')
        .type(email).should('have.value', email)

        cy.get('label').contains('Male')
        .click()
        
        cy.get('#userNumber')
        .type(mobileNumber).should('have.value', mobileNumber)

        cy.get('#submit')
        .click()

        cy.get('table')
        .contains('td', firstName + " " + lastName)
        .should('be.visible')

        cy.get('table')
        .contains('td', email)
        .should('be.visible')

        cy.get('table')
        .contains('td', mobileNumber)
        .should('be.visible')
    });
})