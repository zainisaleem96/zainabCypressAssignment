import LoginPage from '../pages/login';

context('Actions', ()=> {

    const loginPage = new LoginPage();

    before(()=>{
        console.log("this is before")
        loginPage.login();
        

    })

    it('Verify account is opening successfuly', ()=> {
        loginPage.openNewAccountandVerify();
 })


})
