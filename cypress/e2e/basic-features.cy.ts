/// <reference types="cypress" />

describe('All the basic feature requirements', () => {
  it('can visit the app', () => {
    cy.visit('127.0.0.1:5173')
  })
})