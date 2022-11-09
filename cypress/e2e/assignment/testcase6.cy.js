import LoanPage from '../pages/loan';
import LoginPage from '../pages/login';

context('Actions', ()=> {
    const loginPage = new LoginPage();
    const loanpage = new LoanPage();

    before(()=>{
        console.log("this is before")
        loginPage.login();
    })

//unable to run this test as I'm getting 500 error on Account Overview Page
it('Verify Request Loan', ()=> {
    loanpage.requestLoan();
})
})