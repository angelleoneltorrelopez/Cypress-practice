import LoginSauceDemo from '../../fixtures/POMs/loginSauceDemo.js';
const loginSauceDemo = new LoginSauceDemo();
describe('Login test', () => {
   beforeEach(() => {
       cy.visit('https://www.saucedemo.com/');
   })
   it('Login successful', () => {
       cy.get(loginSauceDemo.inputUser).type('standard_user');
       cy.get(loginSauceDemo.inputPassword).type('secret_sauce');
       cy.get(loginSauceDemo.buttonLogin).click();
   })
})