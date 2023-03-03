describe('Login', () => {
    it('passes', () => {
      cy.visit('https://getbootstrap.com/docs/4.0/components/forms/?');
      // Are written to the file cypress/support/commands.js
      cy.login();
    });
  });
  