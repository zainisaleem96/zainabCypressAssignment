const data = require('../../fixtures/users')

class LoanPage{

    requestLoan(){
        cy.get('a[href="/parabank/overview.htm"]').click()
        //get balance initial value and minus down payment from it
                cy.get('table[id="accountTable"]')
                      .contains('tr', data.accountA)
                      .find('td').eq(2).then(($val1) => {
                       
                        am1 = $val1.text().replace('$','').trim()
                        am1 = am1 - data.downPayment
                       
                      })
//request loan
        cy.get('a[href="/parabank/requestloan.htm"]').click()

        cy.get('input[id="amount"]').type(data.loanAmount)
        cy.get('input[id="downPayment"]').type(data.downPayment)

        cy.get('#fromAccountId').select(data.accountA)
        cy.get('#fromAccountId').should('have.value', data.accountA)
        cy.get('input[value="Apply Now"]').click()

      //verfiy balance after loan is requested
cy.get('a[href="/parabank/overview.htm"]').click()
        cy.get('tr:nth-child(2) td:nth-child(3)').should(($val2) => {
                expect($val2.text().replace(/\.00/g ,'').replace(/\$|/g,'')).to.eq(am1)
              })
    }


}

export default LoanPage 