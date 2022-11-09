const data = require('../../fixtures/users')


class LoginPage{
    login(){
        cy.visit('/')
        cy.get('input[name=username]').type(data.login_username)
        cy.get('input[name=password]').type(data.login_password)
        cy.get('input[value= "Log In"]').click()
    }

    openNewAccountandVerify(){
        cy.get('a[href="/parabank/openaccount.htm"]').click()
        cy.get('select[id=type]').select("SAVINGS")
        cy.get('select[id=fromAccountId]').first()
        cy.get('input[value="Open New Account"]').click()
        //cy.url().should('include', '/parabank/openaccount.htm')
        cy.get('.title').should('have.text','Account Opened!')
    }
}
export default LoginPage