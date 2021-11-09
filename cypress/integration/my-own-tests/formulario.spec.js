/// <reference types="cypress" />
import PracticeForm from '../../fixtures/POMs/practiceForm'

describe('prueba de formulario', () =>{
    const practiceForm = new PracticeForm()

    it('Registro de formulario con Datos Validos', () => {
        var firstName = "Angel"
        var lastName = "Torre"
        var email = "angeltorrelopez@gmail.com";
        var mobileNumber = "1234567890";

        cy.visit('https://demoqa.com/automation-practice-form')
        practiceForm.inputName()
        .type(firstName).should('have.value', firstName)

        practiceForm.inputLastName()
        .type(lastName).should('have.value', lastName)

        practiceForm.inputEmail()
        .type(email).should('have.value', email)

        practiceForm.labelMaleGender()
        .click()
        
        practiceForm.inputNumber()
        .type(mobileNumber).should('have.value', mobileNumber)

        practiceForm.buttonSubmit()
        .click()

        practiceForm.studentNameValueTable()
        .should('be.visible')
        .should('have.text', firstName + " " + lastName)

        practiceForm.emailValueTable()
        .should('be.visible')
        .should('have.text', email)

        practiceForm.genderValueTable()
        .should('be.visible')
        .should('have.text', 'Male')

        practiceForm.mobileNumberValueTable()
        .should('be.visible')
        .should('have.text', mobileNumber)
    });
})