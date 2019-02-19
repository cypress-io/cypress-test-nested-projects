/// <reference types="Cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.get() - query DOM elements', () => {
    cy.url().should('include', '9090')
  })
})
