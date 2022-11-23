describe("Handling tabs and widows test", () => {
  it.skip("handles browser tab", () => {
    cy.visit("https://www.toolsqa.com/");
    cy.title().should("equals", "Tools QA"); // bdd assertions
    cy.get("a[href='https://demoqa.com'][target='_blank']")
      .first()
      .invoke("removeAttr", "target")
      .click();
    cy.get("#app > div > div > div.home-banner > a")
      .invoke("removeAttr", "target")
      .click();
  });
 
  it('handles child window using stub',()=>{
        cy.visit('https://demoqa.com/browser-windows');

        cy.window().then((winObj)=>{

            cy.stub(winObj,'open',()=>{
                winObj.location.href ='https://demoqa.com/sample';
            }).as('newWindow');
        })
        cy.get('#windowButton').click();
        //click on btn where it opens new window
        cy.get('@newWindow').should('be.calledWith','/sample');
        //verifying whether the window got opened with this url or not
        cy.go('back')
        //navigating back to mainwindow


  })

});
