import {base} from "../pages/base_page"

const basePage = new base()

export class alcoholicDrinksResultPage{

    elements = {
        dailyDealsAlcoholDealsTitle: ()=> cy.contains('Alcohol Deals'),
        breadcrumbHome: ()=> cy.contains('Home').and('have.class', 'MuiBreadcrumbs-li'),
        addToCartSearchResultBtn: ()=> cy.contains('Add to cart'),
        }

//Functions:
    verifyOnAlcoholicDrinksResultPage(){
        expect(this.elements.dailyDealsAlcoholDealsTitle);
        expect(this.elements.breadcrumbHome);
    }

    addItemToCartFromResults(){
        this.elements.addToCartSearchResultBtn().click();
        expect(basePage.elements.addedToCartmsg());
    }

}