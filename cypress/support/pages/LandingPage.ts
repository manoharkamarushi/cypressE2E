class LandingPage{

    invokeApp():void{
        cy.visit('/');
    }
    verifyBankName():void{
        cy.contains('XYZ Bank').should('be.visible');
    }

    loggingAsBankManager():void{

        cy.contains('Bank Manager Login').click();
    }
}

export default new LandingPage();