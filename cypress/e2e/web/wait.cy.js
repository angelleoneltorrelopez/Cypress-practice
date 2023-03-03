/* eslint-disable cypress/no-unnecessary-waiting */
describe('Wait examples', () => {
    it('explicit wait', () => {
      cy.visit('https://example.cypress.io/commands/waiting');
  
      cy.get('.wait-input1').type('Wait 1000ms after typing');
      cy.wait(1000);
      cy.get('.wait-input2').type('Wait 1000ms after typing');
      cy.wait(1000);
      cy.get('.wait-input3').type('Wait 1000ms after typing');
      cy.wait(1000);
    });
  
    it('Wait for http request', () => {
      cy.visit('https://example.cypress.io/commands/waiting');
      cy.intercept('GET', '**/comments/*').as('getComment');
  
      cy.get('.network-btn').click();
  
      cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
    });
  });
  