class BasePage{

    verifyElementWithText(btnText:string):void{
        cy.contains(btnText).should('be.visible')
    }
    verifyBankName():void{
        cy.contains('XYZ Bank').should('be.visible');
    }
}
export default new BasePage();
