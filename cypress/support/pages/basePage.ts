class BasePage{

    verifyElementWithText(btnText:string):void{
        cy.contains(btnText).should('be.visible')
    }

}
export default new BasePage();
