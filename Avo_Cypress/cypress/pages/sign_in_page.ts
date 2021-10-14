export class signInPage{

    elements = {
    createAccountBtn: ()=> cy.contains('Create Account')
    }

//Functions
    goToCreateAccountPage(){
        this.elements.createAccountBtn().click()
    }

}