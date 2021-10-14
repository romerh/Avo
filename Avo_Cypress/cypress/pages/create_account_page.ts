import {base} from "../pages/base_page"
const basePage = new base()

export class createAccountPage{

    elements = {
    // createAccountBtn: ()=> cy.xpath('//*[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"][1]'),
    userFirstNameInput: ()=> cy.get('.MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
    userLastNameInput: ()=> cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
    emailInput: ()=> cy.get('form > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
    passInput: ()=> cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
    signUpBtn: ()=>     cy.contains('Sign Up').and('have.class', 'MuiButton-label'),
    }

//Functions

    createRandomAccount(){
        this.elements.userFirstNameInput().type(basePage.randomText());
        this.elements.userLastNameInput().type(basePage.randomText());
        this.elements.emailInput().type(basePage.randomText()+'@gmail.com');
        this.elements.passInput().type(basePage.randomText()).type('{enter}');
        cy.wait(5000);
    }


}