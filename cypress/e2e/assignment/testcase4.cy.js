import BillPage from '../pages/bill';
import LoginPage from '../pages/login';

context('Actions', ()=> {
    const loginPage = new LoginPage();
    const billpage = new BillPage();

    before(()=>{
        console.log("this is before")
        loginPage.login();
    })

    it('Verify Bill is Paid', ()=> {
        billpage.paybill();
 })

 /*it('Verify Amouunt is credited from correct account', ()=> {
    billpage.verifyPayment();
})  */


})