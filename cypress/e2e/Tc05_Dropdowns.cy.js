describe('Login Functionality', function(){

    let testData;

    before(() =>{
        cy.fixture('testData').then((data) =>{
            testData = data;
        });
    });


    it('Static dropdown smh', function(){
        cy.visit('https://seleniumbase.io/demo_page');
        cy.get('[name="selectName"]').select('Set to 75%').should('have.value','75%');

    });

    it('Hover dropdown smh', function(){
        cy.visit('https://seleniumbase.io/demo_page');
        cy.get('#myDropdown').trigger('mouseover');
        cy.contains('Link Two').click({force: true});
        cy.get('h3').contains('Link Two Selected');

    });

})