/// <reference types="Cypress" />

describe('Login Functionality', function(){

    let testData;

    before(() =>{
        cy.fixture('testData').then((data) =>{
            testData = data;
        });
    });

    it('Successfull Login', function(){
        cy.visit('https://demo.realworld.show/');
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
        
        cy.get('[name="email"]').type(testData.email);
        cy.get('[name="password"]').type(testData.pwd);
        cy.get('.btn').click();
    })

    it('Unsuccessfull Login', function(){
        cy.visit('https://demo.realworld.show/');
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
        
        cy.get('[name="email"]').type(testData.wrongEmail);
        cy.get('[name="password"]').type(testData.Wrongpwd);
        cy.get('.btn').click();
})