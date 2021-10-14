import {base} from "../pages/base_page"

const basePage = new base()

export class avoHomePage{


    elements = {
        signInBtn: ()=> cy.contains('Sign In / Sign Up'),
        myAccountAfterRegistartion: ()=> cy.get('#my-account-link'),
        browseCategoriesBtn: ()=> cy.contains('Browse Categories'),
        browseDailyDealsBtn: ()=> cy.contains('Daily Deals'),
        dailyDealsAlcoholDealsBtn: ()=> cy.contains('Alcohol Deals'),
        searchField: ()=> cy.get('.MuiInputBase-input'),
        addToCartSearchFieldBtn: ()=> cy.contains('Add to cart'),
        shoppingCartBtn: ()=> cy.get('#shopping-cart-button'),
        shoppingCartCheckoutBtn: ()=>cy.get('[data-testid="store.goToCheckout"] > .MuiButton-label')
        }

// Functions:

    goToSignInPage(){
        this.elements.signInBtn().click();
    }

    verifyRegistration(){
        expect(this.elements.myAccountAfterRegistartion);
    }

    searchForADrink(){
        this.elements.browseCategoriesBtn().click();
        this.elements.browseDailyDealsBtn().click({force: true});
        this.elements.dailyDealsAlcoholDealsBtn().click();
    }

    addToCartViaSearchFieldMenu(query: string){
        expect(this.elements.browseCategoriesBtn);
        this.elements.searchField().click();
        cy.wait(3000);
        this.elements.searchField().type(query);
        cy.wait(5000);
        this.elements.searchField().click();
        this.elements.addToCartSearchFieldBtn().click();
        expect(basePage.elements.addedToCartmsg());
    }

    goToCheckout(){
        this.elements.shoppingCartBtn().click();
        expect(this.elements.shoppingCartCheckoutBtn);
        this.elements.shoppingCartCheckoutBtn().click();
    }

}