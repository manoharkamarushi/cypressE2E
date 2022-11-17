import BasePage from '../../support/pages/basePage'
import LandingPage from '../../support/pages/LandingPage'

describe('Bank Manager HomePage Tests',()=>{

    beforeEach('Invoke Application and Login as Bank Manager',()=>{
    
        LandingPage.invokeApp();
        LandingPage.loggingAsBankManager();

    })

})