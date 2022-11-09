/// <reference types= "cypress"/>

context('Actions', ()=> {

    before(()=>{
        console.log("this is before")
    })

    beforeEach(()=>{
        console.log("this is before each")
    })
    it('just open up a page', ()=> {
        cy.visit('/')
       // cy.get('#user-name').type("standard_user")
       // cy.get('#password').type("secrect_sauce")

        cy.get('#user-name').as('us')
        cy.get('@us').type("standard_user")
        cy.get('#password').as("pass")
        cy.get('@pass').type("secrect_sauce")

        cy.get('#login-button').click()
        cy.get('.header_secondary_container .title').should('have.text','Products')
        cy.get('.product_sort_container').select("Price (low to high)")

        //cy.get('.inventory_list').contains('Sauce lab backpack').click()
        
        cy.get('.inventory_list').contains('Sauce lab backpack').within(()=> {
            cy.get('.btn_inventory').click()
        }) 

    
//testcase: get all prices and compare what on page
    cy.get('.inventory_item_price').each(($el, index)=>{
        const prices = ['$7.99','$9.99','$15.99','$15.99','$29.99','$49.99']
        expect($el).to.contains(prices[index])
    console.log($el.text() )
})
    })

    it('test case 2',()=>{
        //cy.visit("/")
    })
})