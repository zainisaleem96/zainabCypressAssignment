class HelperFunctions{

    // url assertions for each test//test ma sa bs data, assertions pages ma
    verifyPageLocation(pathname){
        cy.location().should((loc)=>{
        expect((loc.origin).to.eq(Cypress.config().baseUrl))
        expect(loc.pathname).to.eq(pathname)
        })
    }

}
export default HelperFunctions