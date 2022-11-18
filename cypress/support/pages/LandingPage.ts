class LandingPage{

    invokeApp():void{
        cy.visit('/');
    }

    loggingAsBankManager():void{

        cy.contains('Bank Manager Login').click();
    }
}

export default new LandingPage();