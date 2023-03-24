/** 
 * @file Custom commands
 * @description This is the file that contains the custom commands.
*/

import Login from '../fixtures/POMs/loginBootstrap.js';

const login = new Login();


/**
 * Cypress custom command to perform login
 * @example cy.login()
*/
Cypress.Commands.add('login', () => {
  login.sendEmail('angelleoneltorrelopez@gmail.com');

  login.sendPassword('123456789');

  login.checkElement();

  login.clickButton();
});