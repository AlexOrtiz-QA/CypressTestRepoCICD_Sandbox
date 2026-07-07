describe('Checkboxes Functionality', function(){

    let testData;

    before(() =>{
        cy.fixture('testData').then((data) =>{
            testData = data;
        });
    });


    it('Selecting all options', function(){
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force: true}).should('be.checked');
        cy.get('#checkbox-v-2b').should('not.be.checked').check({force: true}).should('be.checked');
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force: true}).should('be.checked');

    });

    it('Deselecting all options', function(){

        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force: true}).should('be.checked');
        cy.get('#checkbox-v-2b').should('not.be.checked').check({force: true}).should('be.checked');
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force: true}).should('be.checked');

        cy.get('#checkbox-v-2a').should('be.checked').uncheck({force: true}).should('not.be.checked');
        cy.get('#checkbox-v-2b').should('be.checked').uncheck({force: true}).should('not.be.checked');
        cy.get('#checkbox-v-2c').should('be.checked').uncheck({force: true}).should('not.be.checked');
    });
    
})