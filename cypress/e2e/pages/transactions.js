const data = require('../../fixtures/users')

class TransactionsPage{

    findByID(){
        let values = []
        cy.get('a[href="/parabank/findtrans.htm"]').click()
        
        cy.get('select[id="accountId"]').select(data.accountA)
        cy.get('select[id="accountId"]').should('have.value', data.accountA)
        cy.get('input[id="criteria.transactionId"]').type('15253')
        //cy.get('button[ng-click=criteria.searchType = ID]').click()
        cy.contains('button', 'Find Transactions').click()

        cy.get('table[id="transactionTable"]').should('be.visible')
        .find('td')
        .each(($el, $index) => {
        cy.wrap($el)
        .invoke('text')
        .then(text => {
         // if($index!==3)
            values.push(text.trim())
            console.log($el.text())
          })
       })
      .then(() => expect(values).to.deep.eq(["11-8-2022", "Funds Transfer Sent", "$50.00",'']))
    }
    findByDate(){
        cy.get('a[href="/parabank/findtrans.htm"]').click()
        
        cy.get('select[id="accountId"]').select(data.accountA)
        cy.get('select[id="accountId"]').should('have.value', data.accountA)
        cy.get('input[id="criteria.onDate"]').type('11-08-2022')
        
        cy.get(':nth-child(9) > .button').click()

        cy.get('table[id="transactionTable"]').getTable().should(tableData => {
            expect(tableData).not.to.be.empty
          })
    
    }

    findByDateRange(){
        cy.get('a[href="/parabank/findtrans.htm"]').click()
        
        cy.get('select[id="accountId"]').select(data.accountA)
        cy.get('select[id="accountId"]').should('have.value', data.accountA)
        cy.get('input[id="criteria.fromDate"]').type('11-08-2022')
        cy.get('input[id="criteria.toDate"]').type('11-10-2022')
        
        cy.get(':nth-child(13) > .button').click()

        cy.get('table[id="transactionTable"]').getTable().should(tableData => {
            expect(tableData).not.to.be.empty
          })

    }

    findByAmount(){
        cy.get('a[href="/parabank/findtrans.htm"]').click()
        
        cy.get('select[id="accountId"]').select(data.accountA)
        cy.get('select[id="accountId"]').should('have.value', data.accountA)
        cy.get('input[id="criteria.amount"]').type('50')
       
        
        cy.get(':nth-child(17) > .button').click()

        cy.get('table[id="transactionTable"]').getTable().should(tableData => {
            expect(tableData).not.to.be.empty
          })
    }
  
}

export default TransactionsPage 