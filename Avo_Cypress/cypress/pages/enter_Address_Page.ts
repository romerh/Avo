export class enterAddressPage{

    enterAddressField  = '.MuiInputBase-input'

//Functions

    enterAvoAddress(address: string){
        cy.get(this.enterAddressField).type(address).type('{enter}');
        cy.contains('Avo trial').click();

    }
    

}