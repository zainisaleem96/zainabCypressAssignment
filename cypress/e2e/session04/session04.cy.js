/// <reference types= "cypress"/>
import 'cypress-v10-preserve-cookie'
import Inventory from '../pages/inventory';
import LoginPage from '../pages/login'
import HelperFunctions from '../utils/common';
const { constant } = require("cypress/types/lodash")

context('Actions', ()=> {
    const loginPage = new LoginPage();
    const common = new HelperFunctions();
    const inventoryPage = new Inventory();
    before(()=>{
        console.log("this is before")

        //cy.get('#user-name').as('us')
        //cy.get('@us').type("standard_user")
        //cy.get('#password').as("pass")
        //cy.get('@pass').type("secrect_sauce")
        //cy.get('#login-button').click()
loginPage.login()

    })

    beforeEach(()=>{
        console.log("this is before each")
        Cypress.Cookies.debug(true)   //for debugging
        cy.preserveCookieOnce('session-username')
        //Cypress.Cookies.preserveOnce()   //to preserve cookies to be used for each test
        cy.session('user',()=>{
            console.log('within session')
        })
    })
    it('URL check assertion', ()=> {
        //cy.setCookie('fake123','123')
        //cy.getCookie('session-username').should('have.a.property','value','standard_user')
      //cy.visit('/inventory.html',{failOnStatusCode:false})
        // implicit assertion //contain,include weak assertion 
       // cy.url().should('contain', 'inventory')
        //cy.url().should('include', 'inventory')
       //cy.url().should('eq', 'inventory') strong assertion
       //cy.url().should('eq', Cypress.config().baseUrl+'inventory.html')
common.verifyPageLocation('/inventory.html')
       //url alias is location
       cy.location('pathname').should('contain','inventory')
       cy.location('hostname').should('contain','www.saucedemo.com')
       cy.location('protocol').should('contain','http')  //false positive
       cy.location('protocol').should('eq','https:')
     })  

     it('implicit assertion', ()=> {

         cy.get('').should('have.text','Sauce')
         inventoryPage.verifyItem();
        // cy.get('').contains('Sauce')  //match uppercase and lower case also
         //cy.get('').contains('Sauce',{matchCase:false})
     
         cy.get('.social').find('li').should('have.lenght',3).first().and('have.class','social_twitter').click()
         cy.get('.social').find('li').should('have.lenght',3).eq(1).and('have.class','social_twitter').click()
     })
     it('explicit assertion', ()=> {
        cy.visit('/')
       

         const statusCode = 400

         expect(statusCode).eq(400)
         expect(statusCode).to.be.within(400,450)

         //signup page you want to check errors, get all errors in array and then compare
         cy.get('.inventory_item_name').then(($p)=>{
         const texts= $p.map((i,el)=> Cypress.$(el).text())    //object

         const actualparagraph = texts.get()  //array
const expectedparagraph = ['Sauce Labs Backpack','Sauce Labs Bike Light','',]
         //expect(paragraph).to.deep.eq(['Sauce Labs Backpack','Sauce Labs Bike Light','',])
         //expect(actualparagraph).to.deep.eq(expectedparagraph)
         inventoryPage.verifyAllItems(actualparagraph,expectedparagraph)
         //to.be.ordered 1,2,3

         })
     })
     afterEach(()=>{
        console.log("this is before each")
        //Cypress.Cookies.debug(true)   //for debugging
        //cy.preserveCookieOnce('session-username')
        //Cypress.Cookies.preserveOnce()   //to preserve cookies to be used for each test
        cy.clearCookies()
    })
})