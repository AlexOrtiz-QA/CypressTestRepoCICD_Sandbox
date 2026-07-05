/// <reference types="Cypress" />

describe('Registry Functionality', function(){

    let testData;

    before(() =>{
        cy.fixture('testData').then((data) =>{
            testData = data;
        });
    });

    it('Successfull Register', function(){
        cy.visit('https://demo.realworld.show/');
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('[name="username"]').type(testData.userName);
        cy.get('[name="email"]').type(testData.email);
        cy.get('[name="password"]').type(testData.pwd);
        cy.get('.btn').click();
    })


})