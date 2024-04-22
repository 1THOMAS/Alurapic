// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (nome, senha) => {

    cy.get('[data-test="loginUserName"]').type(nome)
    cy.get('[data-test="loginPassword"]').type(senha)
    cy.contains('button', 'login').click()
    
})