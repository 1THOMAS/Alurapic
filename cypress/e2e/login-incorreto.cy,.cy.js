describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    });

    it('Mensagens de campos incorreto', () => {
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required').should('be.visible')
    });

    it('Falha nos campos inseridos corretamente', () => {
        cy.login('carowl', '12345678')
            cy.wait('@stubPost')
    });
});
