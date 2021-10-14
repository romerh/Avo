export class avoNoAddress{

    elements = {
        enterAddressbtn: ()=> cy.contains('Check your address')
        }
        
// Functions:

    goToEnterAddressPage(){
        this.elements.enterAddressbtn().click();
    }
    
}