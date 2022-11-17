import LandingPage from '../support/pages/LandingPage'
import BasePage from '../support/pages/basePage'

describe('LandingPage Tets',()=>{

    before('Invoke Landing Page',()=>{
      
        LandingPage.invokeApp();
    })

    it('Verify LandingPage BankName',()=>{
       LandingPage.verifyBankName();
    })

    it('Verify LandingPage HomeButton',()=>{
        BasePage.verifyElementWithText('Home');
     })
     
     it('Verify LandingPage CustomerLoginButton',()=>{
        BasePage.verifyElementWithText('Customer Login');
     })

     it('Verify LandingPage ManagerLoginButton',()=>{
        BasePage.verifyElementWithText('Bank Manager Login');
     })
})