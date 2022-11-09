//create css selector constant so that if it value changes, u change that in constant and not at each place, in page file
const itemSelector = ''

class Inventory{

    verifyItem(){
        cy.get(itemSelector).contains('Sauce')  //match uppercase and lower case also
         cy.get(itemSelector).contains('Sauce',{matchCase:false})
    }

    verifyAllItems(actualparagraph,expectedparagraph){
        expect(actualparagraph).to.deep.eq(expectedparagraph)
    }
} 
export default Inventory