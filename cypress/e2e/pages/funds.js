const data = require('../../fixtures/users')
let am1;
let am2;

class FundsPage{
    
    
    transferFunds(){
        cy.get('a[href="/parabank/overview.htm"]').click()
//get initial available amount
              cy.get('table[id="accountTable"]')
              .contains('tr', data.accountA)
              .find('td').eq(2).then(($val1) => {
               
                am1 = $val1.text().replace('$','').trim()
                am1 = am1 - data.transferAmount
                console.log(am1)
              })

              cy.get('table[id="accountTable"]')
              .contains('tr', data.accountB)
              .find('td').eq(2).then(($val2) => {

                am2 = $val2.text().replace('$','').trim()
                am2 = Number(am2) + 100
                console.log(am2)
              })
        
// transfer funds
        cy.get('a[href="/parabank/transfer.htm"]').click()
        
        cy.get('#fromAccountId').select(data.accountA)
        cy.get('#fromAccountId').should('have.value', data.accountA)
        cy.get('#toAccountId').select(data.accountB)
        cy.get('#toAccountId').should('have.value', data.accountB)
        cy.get('input[id="amount"]').type(data.transferAmount)
        cy.get('input[value="Transfer"]').click()
        cy.get('.title').should('have.text','Transfer Complete!')

//verify correct amount is transferred
        cy.get('a[href="/parabank/overview.htm"]').click()
       
        cy.get('table[id="accountTable"]')
              .contains('tr', data.accountA)
              .find('td').eq(2).then(($val1) => {
                let my = $val1.text().replace(/\.00/g ,'').replace(/\$|/g,'')
                //don't know why this assertions is failing
                expect(my).to.eq(am1)
              }) 
        
          cy.get('tr:nth-child(2) td:nth-child(3)').should(($val2) => {
            expect($val2.text().replace(/\.00/g ,'').replace(/\$|/g,'')).to.eq(am2)
          })
    }



}

export default FundsPage