/**
 * Represents a Bootstrap login form.
 */
class loginBootstrap {
  /**
   * The CSS selector for the email input field.
   * @type {string}
   */
  inputEmail = '#exampleInputEmail1';

  /**
 * The CSS selector for the password input field.
 * @type {string}
 */
  inputPassword = '#exampleInputPassword1';

  /**
 * The CSS selector for the "remember me" checkbox.
 * @type {string}
 */
  check = '#exampleCheck1';

  /**
 * The CSS selector for the form submit button.
 * @type {string}
 */
  buttonSubmit = ':nth-child(9) > form > .btn';

  /**
 * Types an email into the email input field.
 * @param {string} email - The email to type.
 */
  sendEmail(email) {
    cy.get(this.inputEmail).type(email);
  }

  /**
   * Types a password into the password input field.
   * @param {string} password - The password to type.
   */
  sendPassword(password) {
    cy.get(this.inputPassword).type(password);
  }

  /**
   * Checks the "remember me" checkbox.
   */
  checkElement() {
    cy.get(this.check).check();
  }

  /**
   * Clicks the form submit button.
   */
  clickButton() {
    cy.get(this.buttonSubmit).click();
  }
}

export default loginBootstrap;