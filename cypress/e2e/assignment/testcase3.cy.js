import LoginPage from '../pages/login';
import FundsPage from '../pages/funds';

context('Actions', ()=> {
    const loginPage = new LoginPage();
    const fundspage = new FundsPage();

    before(()=>{
        console.log("this is before")
        loginPage.login();
        

    })

    it('Verify transfer funds between two accounts', ()=> {
        fundspage.transferFunds();
 })

   


})