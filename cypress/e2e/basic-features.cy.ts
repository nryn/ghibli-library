/// <reference types="cypress" />

describe('All the basic feature requirements', () => {
  it('can visit the app', () => {
    cy.visit('127.0.0.1:5173')
  })

  it('shows a list of 10 films', () => {
    cy.get('[data-test=FilmCard]').should('have.length', 10)
  })
  it('has the required information for all 10 visibile films', () => {
    cy.get('[data-test=ClickableThumbnail]').should('have.length', 10)
    cy.get('[data-test=Title]').should('have.length', 10)
    cy.get('[data-test=ReleaseDate]').should('have.length', 10)
    cy.get('[data-test=RunningTime]').should('have.length', 10)
  })

  // Test Ideas:
  // "Be able to search for a film"
  // "should see My neighbour totoro"
  // "click through on the thumbnail to see more details"
  // "see that Hayao Miyazaki is the director"
})