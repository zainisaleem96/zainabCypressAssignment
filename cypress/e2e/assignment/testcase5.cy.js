import TransactionsPage from '../pages/transactions';
import LoginPage from '../pages/login';

context('Actions', ()=> {
    const loginPage = new LoginPage();
    const transactionspage = new TransactionsPage();

    before(()=>{
        console.log("this is before")
        loginPage.login();
    })

   /* it('Verify Find by transaction ID', ()=> {
        transactionspage.findByID();
 })*/

 /*it('Verify Find by transaction Date', ()=> {
    transactionspage.findByDate();
})*/

/*it('Verify Find by transaction Date Range', ()=> {
    transactionspage.findByDateRange();
})*/

it('Verify Find by Amount', ()=> {
    transactionspage.findByAmount();
})
//unable to test logout command as I'm getting 500 error after login
afterEach(()=>{
    console.log("this is after each")
    cy.logout();
})
})