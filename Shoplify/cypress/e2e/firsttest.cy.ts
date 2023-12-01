describe('Navigation', () => {
  it('should navigate back and forth', () => {
    cy.visit('http://localhost:4200/signin');
    cy.get('[data-cy="email"]').type('eucs@gmail.com');
    cy.get('[data-cy="password"]').type('Mike1234567');
    cy.get('[data-cy="login-btn"]').click();
    // cy.loginUser()

    // cy.location('pathname').should('equal', '/admin')

    // cy.go('back')

    // cy.location('pathname').should('eq', '/')

    // cy.go('forward')

    // cy.location('pathname').should('equal', '/admin')

    // cy.contains('EMS')
  });
});
