/// <reference types="Cypress" />
describe("SEO Test", () => {

  it("audits the home page", () => {
    cy.visit("https://www.ingenieriazeros.com/");
    const customThresholds = {
      performance: 30,
      accessibility: 50,
      "best-practices": 50,
      seo: 50
    };

    const desktopConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };

    cy.lighthouse(customThresholds, desktopConfig);
  });
});
