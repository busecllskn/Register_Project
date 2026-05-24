import { errorMessages } from "../../Register";
describe('Register Page', () => {
  describe('Error Messages', () => {
    it('name input throws error for 2 chars', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="ad-input"]').type("bu");
      cy.contains(errorMessages.ad)
    });
    it('surname input throws error for 2 chars', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="soyad-input"]').type("ca");
      cy.contains(errorMessages.soyad)
    });
    it('email input throws error for buse@wit', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="email-input"]').type("buse@wit");
      cy.contains(errorMessages.email)
    });
    
    it('password input throws error for 1234', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="password-input"]').type("1234");
      cy.contains(errorMessages.password)
    });
    it('button diasabled for unvallid inputs', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="password-input"]').type("1234");
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
});
});
describe('Form input validated', () => {
  it('button enabled for validated inputs', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="ad-input"]').type("buse");
    cy.get('[data-cy="soyad-input"]').type("çalışkan");
    cy.get('[data-cy="email-input"]').type("buse@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("1234Aa**");
    cy.get('[data-cy="submit-button"]').should("not.be.disabled");
  });
  it('submit forms on validated inputs', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="ad-input"]').type("buse");
    cy.get('[data-cy="soyad-input"]').type("çalışkan");
    cy.get('[data-cy="email-input"]').type("buse@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("1234Aa**");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="response-message"]').should("be.visible");
  });
});