const apiUsers = `${Cypress.env("apiUrl")}/users`

describe("Testing API Endpoints Using Cypress", () => {

    it("Test GET Request", () => {
          cy.request(apiUsers + '/2')
               .then((response) => {
                      expect(response.status).to.have.eq(200);
                      console.log(response.body.data);
          })
    })

    it("Test POST Request", () => {
          cy.request({
               method: 'POST',
               url: apiUsers,
               body: {
                   "name" : "Angel Torre",
                   "job":"QA"
               }
          }).then((response) => { 
              console.log(response);
                  expect(response.body).has.property("name","Angel Torre");
                  expect(response.body).has.property("job","QA"); 
          })
    })
/*
    it("Test PUT Request", () => {
          cy.request({
                  method: 'PUT',
                  url: 'http://localhost:3000/api/posts/2',
                  body: { 
                     "id": 2,
                     "title" : "Test Automation"
                  }
          }).then((response) => { 
                  expect(response.body).has.property("title", "Test Automation"); 
          })          
    })        

    it("Test DELETE Request", () => {
          cy.request({
                    method : 'DELETE',
                    url: 'http://localhost:3000/api/post/2'
                    }).then((response) => {
                      expect(response.body).to.be.empty;
          })	
    })
    */
})