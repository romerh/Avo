export class checkoutPage{

    elements = {
    checkoutStageStatus: ()=> cy.get(':nth-child(3) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiTypography-root'),
    freeAlwaysMsg: ()=> cy.contains('Free, always!'),
    }

//Functions
    verifyOnCheckoutPage(){
        expect(this.elements.checkoutStageStatus);
        expect(this.elements.freeAlwaysMsg);
    }

}