const login = require('../../fixtures/users')
class SignUpPage{
    
    signup(){
       
        cy.visit('/', {failOnStatusCode: false})
        //cy.get('a').should('have.text','Register').click()
        cy.get('a[href="register.htm"]').click()

        //cy.get('name=customer\.firstName').type("monica")
        cy.get('input[name="customer\.firstName"]').type("monica")
        cy.get('input[id="customer.lastName"]').type("geller")
        cy.get('input[id="customer.address.street"]').type("201 Bellevue Square, Space 201")
        cy.get('input[name="customer.address.city"]').type("Bellevue")
        cy.get('input[id="customer.address.state"]').type("WA")
        cy.get('input[id="customer.address.zipCode"]').type("98004")
        cy.get('input[name="customer.phoneNumber"]').type("425.274.0268")
        cy.get('input[id="customer.ssn"]').type("123")
        
        
        //cy.get('input[id="customer.username"]').as('us')
        //cy.get('@us').type("standard_user")
       
        //cy.get('input[id="customer.password"]').as("pass")
        //cy.get('@pass').type("secrect_sauce")
        
        //cy.get('input[id="repeatedPassword"]').as("rpass")
        //cy.get('@rpass').type("secrect_sauce")
        

        
    }

    verifyExistingUsername(){
        this.signup()
        cy.get('input[id="customer.username"]').type(login.existing_username)
        cy.get('input[id="customer.password"]').type(login.password)
        cy.get('input[id="repeatedPassword"]').type(login.retype_pass)
        cy.get('input[value="Register"]').click()
        cy.get('span[id="customer.username.errors"]').should('have.text','This username already exists.')
    }

    verifyUnmatchPass(){
        this.signup()
        cy.get('input[id="customer.username"]').type(login.existing_username)
        cy.get('input[id="customer.password"]').type(login.password)
        cy.get('input[id="repeatedPassword"]').type(login.unmatch_pass)
        cy.get('input[value="Register"]').click()
        cy.get('span[id="repeatedPassword.errors"]').should('have.text','Passwords did not match.')
    }

    verifySuccessRegistration(){
        this.signup()
        cy.get('input[id="customer.username"]').type(login.username)
        cy.get('input[id="customer.password"]').type(login.password)
        cy.get('input[id="repeatedPassword"]').type(login.retype_pass)
        cy.get('input[value="Register"]').click()
        cy.get('#rightPanel p').should('have.text','Your account was created successfully. You are now logged in.')
    }
}
export default SignUpPage