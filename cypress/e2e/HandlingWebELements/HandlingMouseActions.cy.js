describe('tests mouse actions',()=>{

    it.skip('performs drag and drop',()=>{
        cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp"); 
        cy.get('#div1').drag('#div2');
    })


    it.skip('performs mouseover and click',()=>{
        cy.visit("http://www.way2automation.com"); 
        cy.contains('Resources').trigger('mouseover');
        cy.get('#menu-item-27618').click();

    })

    it('performs slide',()=>{
        cy.visit('https://jqueryui.com/resources/demos/slider/default.html');
        cy.wait(3000);
        cy.get('#slider').invoke('attr','style','left: 90%;');

        
    })


})