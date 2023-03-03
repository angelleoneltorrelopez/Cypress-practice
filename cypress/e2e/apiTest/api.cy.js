describe('Testing API Endpoints Using Cypress', () => {
    // more information https://docs.cypress.io/api/commands/request#Method-URL-and-Body
  
    it('Test GET Request', () => {
      cy.request('https://reqres.in/api/users/2')
        .then((response) => {
          expect(response.status).to.have.eq(200);
          expect(response.body.data).to.have.property('id', 2);
          expect(response.body.data).to.have.property('email');
          expect(response.body.data).to.have.property('first_name', 'Janet');
          expect(response.body.data).to.have.property('last_name', 'Weaver');
          expect(response.body.data.avatar).to.contain('.jpg');
        });
    });
  
    it('Test POST Request 1', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'Angel Torre',
          job: 'QA',
        },
      }).then((response) => {
        expect(response.body).to.have.property('name', 'Angel Torre');
        expect(response.body).to.has.property('job', 'QA');
      });
    });
  
    it('Test POST Request 2', () => {
      cy.request(
        'POST',
        'https://reqres.in/api/users',
        {
          name: 'Angel Torre',
          job: 'QA',
        },
      ).then((response) => {
        expect(response.body).has.property('name', 'Angel Torre');
        expect(response.body).has.property('job', 'QA');
      });
    });
  
    it('Test PUT Request', () => {
      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: {
          name: 'Angel',
          job: 'Test Automation',
        },
      }).then((response) => {
        expect(response.body).to.have.property('job', 'Test Automation');
      });
    });
    it('Test DELETE Request', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  
    it('Test DELETE Request', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2',
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });
  