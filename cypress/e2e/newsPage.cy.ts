describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should render the news page', () => {
    cy.get('[data-testid="news-page"]').should('exist')
  })
  
  it('.closest() - get overview after teaser', () => {

    cy.get('[data-testid="news-teaser"]')
      .next().should('have.attr', 'data-testid', 'news-overview')	
  })
})