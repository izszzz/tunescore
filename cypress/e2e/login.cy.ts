describe("given an unauthenticated session", () => {
  // before(() => {
  //   cy.resetDatabase();
  // });

  beforeEach(() => {
    cy.login();
  });

  describe("when generating a valid JWT and visiting the site", () => {
    it("should show the home page of an authenticated user", () => {
      cy.visit("/");
      cy.get("[data-testid='ShoppingCartIcon']").should("be.visible");
    });
  });
});
