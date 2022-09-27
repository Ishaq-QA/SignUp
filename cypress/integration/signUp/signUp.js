import abcd from "../../support/signUpPOM/signUpPOM"
const xyz = new abcd
describe('signup',()=>{
    beforeEach(function(){
        cy.fixture(Cypress.env("fixtureFile")).then((data)=>{
            this.data=data
            cy.visit(Cypress.env("baseURL"));

        })
    })
    
    it('should sign up',()=>{
        xyz.signUp_user()
    });
});