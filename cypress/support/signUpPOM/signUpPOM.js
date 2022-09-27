
class signup{
    getAllButtonSelector() {
        return "button"
    }

    getMailInputFieldSelector() {
        return '[type="text"]'
    }

    getPasswordInputFieldSelector() {
        return '[type="password"]'
    }

    getCheckBoxSelector() {
        return '[role="checkbox"]'
    }


    signUp_user(){
        const faker = require("faker");
        Cypress.env("email",`${faker.name.firstName()}${Cypress.env('domain')}`)
        console.log(Cypress.env("email"))
        cy.get(this.getMailInputFieldSelector()).type(Cypress.env("email"))
        cy.get(this.getPasswordInputFieldSelector()).type(Cypress.env("password"))
        cy.get(this.getCheckBoxSelector()).click({force:true})
        cy.get(this.getAllButtonSelector()).contains('Sign Up for Free').click()
    }
}export default signup;