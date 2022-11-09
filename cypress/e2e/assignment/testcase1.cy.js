import SignUpPage from '../pages/Signup'

context('Actions', ()=> {
    

    const signupPage = new SignUpPage();
   

    before(()=>{
        console.log("this is before")
        //loginPage.login();
        //cy.fixture('users.json').then((userCreds)=>{
            //user = userCreds
    //})

    })

    /*beforeEach(()=>{
        console.log("this is before each")
        Cypress.Cookies.debug(true)   //for debugging
        cy.preserveCookieOnce('session-username')
        //Cypress.Cookies.preserveOnce()   //to preserve cookies to be used for each test
        cy.session('user',()=>{
            console.log('within session')
        })
    })*/

  it('Verify Existing Username', ()=> {
         signupPage.verifyExistingUsername();
  })

  it('Verify Unmatch Passwords', ()=> {
    signupPage.verifyUnmatchPass();
})

  it('Verify Successful Registeration', ()=> {
    signupPage.verifySuccessRegistration();
})


})