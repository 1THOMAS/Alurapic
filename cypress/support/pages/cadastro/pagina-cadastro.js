const el = require('./elements').ELEMENTS

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.get('[data-test="register"]').click()
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('catarina@alura.com')
        cy.get('[data-test="fullName"]').type('catarina')
        cy.get('[data-test="registerUserName"]').type('catarinap')
        cy.get('[data-test="registerPassword"]').type('catarina123');
    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click()
    }
}

export default new Cadastro()