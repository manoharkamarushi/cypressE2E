import customerPage from '../../support/pages/customerPages/customerPage'
import LandingPage from '../../support/pages/LandingPage'

describe('customer page tests',()=>{

    before('Invoke Application Login as BankManager,Open Customers page',()=>{
    
        LandingPage.invokeApp();
        LandingPage.loggingAsBankManager();
        customerPage.navigateToCustomers();
     })

    it('delete all customers',()=>{
        customerPage.deleteAllCustomers();
    })

    it('customer desposit amount using fixtures deposit.json',()=>{

        cy.fixture('deposit').as('depositInfo').then(jsonData=>{
            cy.log(JSON.stringify(jsonData));
        })
    })
})