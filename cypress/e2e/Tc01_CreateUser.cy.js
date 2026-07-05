/// <reference types="Cypress" />

describe('Registry Functionality', function(){

    let testData;

    before(() =>{
        cy.fixture('testData').then((data) =>{
            testData = data;
        });
    });

    it('Unsuccessfull Register', function(){
        cy.visit('https://demo.realworld.show/');
        cy.get(':nth-child(3) > .nav-link');
    })


})