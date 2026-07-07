describe('Dropdowns Functionality', function(){

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

    it('Dynamic dropdown smh', function(){
        cy.visit('https://vinothqaacademy.com/drop-down/');
        cy.wait(3500)
        cy.get('#select2-FromAccount-container').click();
        cy.get('.select2-results').contains('8400045 Bal - $8,758.78').click();

    });

    it('Multiple Select dropdown smh', function(){
        cy.visit('https://vinothqaacademy.com/drop-down/');
        cy.wait(3500)
        cy.get('.select2-selection.select2-selection--multiple').click();
        cy.get('.select2-results').contains('Python').click();
        cy.get('.select2-selection.select2-selection--multiple').click();
        cy.get('.select2-results').contains('JavaScript').click();

    });

})