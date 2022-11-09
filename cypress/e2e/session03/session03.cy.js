/// <reference types="cypress" />

const login = require('../../fixtures/users')

describe('Actions', () => {

  let user;

  before(()=>{
    console.log("this is before")
    cy.visit("/")
    cy.get('#user-name').as('username')


    cy.fixture('users.json').as('usersDataWithAlias')

    cy.fixture('users.json').then((userCreds)=>{
      user = userCreds
    })


  })

  it('explains aliases and variables', () => {
    cy.visit("/")
    cy.get('@username').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#add-to-cart-sauce-labs-backpack').then(($element)=> {
      expect($element, 'text content').to.have.text('Add to cart')
    })
  })

  it('explains aliases and variables', () => {
    cy.visit("/")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()


    cy.get('.inventory_item').find('#item_4_img_link>img')
    .should('be.visible')
    .should('have.class', 'inventory_item_img')
    .should('have.attr', 'src')
    .and('equal', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
  })

  it('explains fxitures with alias', () => {
    cy.get('@usersDataWithAlias').then((users) =>{
      cy.get('#user-name').type(users.username)
      cy.get('#password').type(users.password)
      cy.get('#login-button').click()
    })
  })
  
  it('explains fxitures without alias', () => {

        cy.get('#user-name').type(user.username)
        cy.get('#password').type(user.password)
        cy.get('#login-button').click()
  })


  it ('explains env variables', () => {
    cy.get('#user-name').type(Cypress.env('first_user'))
    cy.get('#password').type(Cypress.env('first_user_password'))
    cy.get('#login-button').click()
})

it.only ('explains env variables with config file', () => {
  cy.get('#user-name').type(Cypress.env('seconUser'))
  cy.get('#password').type(Cypress.env('secondPass'))
  cy.get('#login-button').click()
})



  

  
})