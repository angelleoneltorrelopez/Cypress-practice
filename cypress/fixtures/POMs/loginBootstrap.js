class loginBootstrap {
    inputEmail = '#exampleInputEmail1';
  
    inputPassword = '#exampleInputPassword1';
  
    check = '#exampleCheck1';
  
    buttonSubmit = ':nth-child(9) > form > .btn';
  
    sendEmail(email) {
      cy.get(this.inputEmail).type(email);
    }
  
    sendPassword(password) {
      cy.get(this.inputPassword).type(password);
    }
  
    checkElement() {
      cy.get(this.check).check();
    }
  
    clickButton() {
      cy.get(this.buttonSubmit).click();
    }
  }
  
  export default loginBootstrap;