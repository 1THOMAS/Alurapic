import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describe('Pagina de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        
    });
    it('Preenchendo formulario de cadastro', () => {

        // cy.get('[data-test="register"]').click()
        // cy.get('[data-test="email"]').type('catarina@alura.com')
        // cy.get('[data-test="fullName"]').type('catarina')
        // cy.get('[data-test="registerUserName"]').type('catarinap')
        // cy.get('[data-test="registerPassword"]').type('catarina123');
        // cy.get('[data-test="btnRegister"]').click()
        Cadastro.acessarPaginaDeCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadastro();
                
    });
})