/* eslint-disable @typescript-eslint/no-explicit-any */

declare namespace Cypress {
  // noinspection JSUnusedGlobalSymbols
  interface Chainable {
    /**
     * Custom command to make taking Percy snapshots with full name formed from the test title + suffix easier
     */
    visualSnapshot(maybeName?): Chainable<any>;

    /**
     * Custom command to reset the database back to a clean state.
     */
    resetDatabase(): Chainable<any>;

    /**
     * Custom command to reset the database back to a clean state and seed the database with test data.
     */
    resetSeedDatabase(): Chainable<any>;

    /**
     * Logs in via the next-auth session cookie for the JWT strategy ONLY!
     */
    login(): Chainable<any>;
  }
}
