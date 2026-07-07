/// <reference types="Cypress" />

describe('Radiobuttons Functionality', function(){

    let testData;

    before(() =>{
        cy.fixture('testData').then((data) =>{
            testData = data;
        });
    });


    it('Touching the very normal radio button', function(){
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');
        cy.get(':nth-child(6) > form > :nth-child(1) > .ui-btn').should('not.be.checked').click();
        cy.get(':nth-child(6) > form > :nth-child(2) > .ui-btn').should('not.be.checked').click();

    });

    it('Touching the not so normal radio button', function(){
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');
        cy.get(':nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(1) > .ui-btn').should('not.be.checked').click();
        cy.get(':nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(2) > .ui-btn').should('not.be.checked').click();
        cy.get(':nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(3) > .ui-btn').should('not.be.checked').click();

    });
})