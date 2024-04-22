describe('Pagina de login', () => {

    beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/.') })
    it('Mensagens de campos incorreto', () => {
        cy.login('carowl', '12345678')
        
    });

});