describe('empty spec', () => {
    it('Download PDF', () => {
      cy.request({
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        encoding: 'binary',
      }).then((response) => {
        cy.writeFile('cypress/downloads/dummy.pdf', response.body, 'binary');
      });
    });
  /*
    it('Download Image', () => {
      cy.request({
        url: 'https://docs.cypress.io/_nuxt/img/cypress-logo.a2e1292.svg',
        encoding: 'base64',
      }).then((response) => {
        const base64Content = response.body;
        const mime = response.headers['content-type']; // or 'image/png'
        // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        const imageDataUrl = `data:${mime};base64,${base64Content}`;
  
        cy.writeFile('cypress/downloads/data.svg', imageDataUrl);
      });
    });
    */
  });
  