describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/');
    cy.get('[data-cypress-id="microphone-toggle"]').click() //.wait(5000);
    cy.log("Please, start the microphone & say something.  😊");
    // cy.wait(5000);

    cy.get('[data-cypress-id="current-msg"]').should('exist');

    // I could not get this working... because
  })


})