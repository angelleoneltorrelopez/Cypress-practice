describe('empty spec', () => {
    it('Intercept - Fixture', () => {
      cy.intercept(
        'GET',
        '**search?query=React&page=0',
        {
          fixture: 'example.json',
        },
      ).as('waitTime');
  
      cy.visit('https://wlsf82-hacker-stories.web.app');
  
      cy.wait('@waitTime');
    });
  
    it('Intercept - Status code', () => {
      cy.intercept(
        'GET',
        '**search?query=React&page=0',
        {
          statusCode: 500,
        },
      ).as('waitTime');
  
      cy.visit('https://wlsf82-hacker-stories.web.app');
      cy.wait('@waitTime');
    });
  });
  