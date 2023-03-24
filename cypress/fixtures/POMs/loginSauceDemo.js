/**
 * Represents a login form for the SauceDemo website.
 */
class loginSauceDemo {
  /**
   * The CSS selector for the username input field.
   * @type {string}
   */
  inputUser = '#user-name';

  /**
   * The CSS selector for the password input field.
   * @type {string}
   */
  inputPassword = '#password';

  /**
   * The CSS selector for the login button.
   * @type {string}
   */
  buttonLogin = '#login-button';

  /**
   * The CSS selector for the error message displayed when login fails.
   * @type {string}
   */
  errorMessage = 'h3[data-test="error"]';
}

export default loginSauceDemo;