const data = require('../../fixtures/billinfo')
const acc = require('../../fixtures/users')

class BillPage{

paybill(){
    cy.get('a[href="/parabank/billpay.htm"]').click()

    cy.get('input[name="payee.name"]').type(data.payee_name)
    cy.get('input[name="payee.address.street"]').type(data.address)
    cy.get('input[name="payee.address.city"]').type(data.city)
    cy.get('input[name="payee.address.state"]').type(data.state)
    cy.get('input[name="payee.address.zipCode"]').type(data.zipcode)
    cy.get('input[name="payee.phoneNumber"]').type(data.phone_number)
    cy.get('input[name="payee.accountNumber"]').type(data.account_number)
    cy.get('input[name="verifyAccount"]').type(data.account_number)
    cy.get('input[name="amount"]').type(data.amount)

    cy.get('select[name="fromAccountId"]').select(acc.accountA)
    cy.get('select[name="fromAccountId"]').should('have.value', acc.accountA)

    cy.get('input[value="Send Payment"]').click()
    cy.get('[ng-show="showResult"] > .title').should('have.text','Bill Payment Complete')

    cy.get('a[href="/parabank/overview.htm"]').click()

    cy.get('table[id="accountTable"]')
    .contains('td', acc.accountA).find('a').click()
    //.should('have.attr','href','activity.htm?id=14343').click();

    cy.get('table[id="transactionTable"]').find('tr').last().find('td').eq(2).should(($val1)=>{
    if($val1.value='transaction.type == Debit')
   // .invoke('attr', 'ng-if').should('have.value', 'transaction.type == Debit')
    expect($val1.text()).to.contains(data.amount)
    })
   
}
verifyPayment(){
    
              
}

}
export default BillPage