/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Navigation", () => {
  it("should navigate to the new page", () => {
    // Start from the index page
    cy.visit("/");
    cy.contains("tunescore").should("be.visible");
  });
  it("should navigate to the new page", () => {
    // Start from the index page
    cy.visit("/");
    cy.get("[data-testid='AddIcon']").click();
    cy.url().should("include", "/new");
    cy.contains("tunescore").should("be.visible");
  });
  it("should navigate to the cart page", () => {
    // Start from the index page
    cy.visit("/");
    cy.get("[data-testid='ShoppingCartIcon']").click();
    cy.url().should("include", "/cart");
    cy.contains("tunescore").should("be.visible");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
