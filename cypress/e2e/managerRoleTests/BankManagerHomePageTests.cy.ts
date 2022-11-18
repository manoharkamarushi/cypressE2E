import BasePage from '../../support/pages/basePage'
import LandingPage from '../../support/pages/LandingPage'

describe('Bank Manager HomePage Tests',()=>{

    beforeEach('Invoke Application and Login as Bank Manager',()=>{
    
        LandingPage.invokeApp();
        LandingPage.loggingAsBankManager();
     })

     it('Verify Bank Manager HomePage BankName',()=>{
         BasePage.verifyBankName();
     })
 
     it('Verify Bank Manager HomePage AddCustomerBtn',()=>{
         BasePage.verifyElementWithText('Add Customer');
      })

      it('Verify Bank Manager HomePage OpenAccount',()=>{
        BasePage.verifyElementWithText('Open Account');
     })

     it('Verify Bank Manager HomePage Customers',()=>{
        BasePage.verifyElementWithText('Customers');
     })

     it('Verify LandingPage HomeButton',()=>{
        BasePage.verifyElementWithText('Home');
     })
      

})