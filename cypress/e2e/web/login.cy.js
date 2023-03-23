import LoginSauceDemo from '../../fixtures/POMs/loginSauceDemo.js';
const loginSauceDemo = new LoginSauceDemo();
describe('Login test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
    it('Login successful', () => {
        cy.allure().severity('critical');
        cy.get(loginSauceDemo.inputUser).type('standard_user');
        cy.get(loginSauceDemo.inputPassword).type('secret_sauce');
        cy.get(loginSauceDemo.buttonLogin).click();
        cy.get('.title').should('have.text', 'Products');
    })

    it('Login failed', () => {
        cy.allure().severity('critical');
        cy.get(loginSauceDemo.inputUser).type('standard_user222');
        cy.get(loginSauceDemo.inputPassword).type('secret_sauce');
        cy.get(loginSauceDemo.buttonLogin).click();
        cy.get(loginSauceDemo.errorMessage).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('User blocked', () => {
        cy.allure().severity('critical');
        cy.get(loginSauceDemo.inputUser).type('locked_out_user');
        cy.get(loginSauceDemo.inputPassword).type('secret_sauce');
        cy.get(loginSauceDemo.buttonLogin).click();
        cy.get(loginSauceDemo.errorMessage).should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });
})