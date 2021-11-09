class practiceForm{
    inputName(){
        return cy.get('#firstName')
    }
    inputLastName(){
        return cy.get('#lastName')
    }
    inputEmail(){
        return cy.get('#userEmail')
    }
    labelMaleGender(){
        return cy.get('label').contains('Male')
    }
    inputNumber(){
        return cy.get('#userNumber')
    }
    buttonSubmit(){
        return cy.get('#submit')
    }
    studentNameValueTable(){
        return cy.get('table td').eq('1')
    }
    emailValueTable(){
        return cy.get('table td').eq('3')
    }
    genderValueTable(){
        return cy.get('table td').eq('5')
    }
    mobileNumberValueTable(){
        return cy.get('table td').eq('7')
    }
}

export default practiceForm