/// <reference types="cypress" />

describe('All the basic feature requirements', () => {
  it('can visit the app', () => {
    cy.visit('127.0.0.1:5173')
  })

  it('shows a list of 10 films', () => {
    cy.get('[data-test=FilmCard]').should('have.length', 10)
  })

  it('has the required information for all 10 visibile films', () => {
    cy.get('[data-test^=ClickableThumbnail-]').should('have.length', 10)
    cy.get('[data-test=Title]').should('have.length', 10)
    cy.get('[data-test=ReleaseDate]').should('have.length', 10)
    cy.get('[data-test=RunningTime]').should('have.length', 10)
  })

  it('allows filtering the list to search', () => {
    cy.contains(/Castle in the Sky/)
    cy.get('[data-test=searchInput]').type('mo')
    cy.contains(/Castle in the Sky/).should('not.exist')

    cy.get('[data-test^=ClickableThumbnail-]').should('have.length', 2)
    cy.contains(/Princess Mononoke/)
    cy.contains(/Howl's Moving Castle/)
  })

  it('shows film details when clicking through', () => {
    cy.get('[data-test=searchInput]').clear().type('mononoke')
    cy.get('[data-test^=ClickableThumbnail-]').should('have.length', 1)

    const princessMononokeId = '0440483e-ca0e-4120-8c50-4c8cd9b965d6'
    const filmDetails = [
      'もののけ姫',
      'Mononoke hime',
      'Toshio Suzuki',
      'Hayao Miyazaki',
      'Released in 1997',
      '134 Minutes',
      'Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.'
    ]

    filmDetails.forEach(string => { cy.contains(new RegExp(string)).should('not.exist') })
    cy.get(`[data-test=ClickableThumbnail-${princessMononokeId}]`).click({ force: true })
    filmDetails.forEach(string => { cy.contains(new RegExp(string)) })
  })

  // Test Ideas:
  // should see character names on detail page
})