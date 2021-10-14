/// <reference types="cypress" /> 
import {base} from "../pages/base_page"
import { avoNoAddress } from "../pages/avo_No_Address_Page"
import {avoHomePage} from "../pages/avo_Home_Page"
import {enterAddressPage}from "../pages/enter_Address_Page"
import {alcoholicDrinksResultPage} from "../pages/alcoholic_drinks_page"
import {checkoutPage} from "../pages/checkout_page"

beforeEach(() => {
    cy.viewport(1280, 720);
    basePage.navigate('https://www.avonow.com/');
  })
  
const basePage = new base()
const avoNA  = new avoNoAddress()
const address = new enterAddressPage()
const avoHome  = new avoHomePage()
const booz  = new alcoholicDrinksResultPage()
const check  = new checkoutPage()

it('adding item to the cart via search results page', function(){
  avoNA.goToEnterAddressPage();
  address.enterAvoAddress('Avo');
  avoHome.verifyRegistration();
  avoHome.searchForADrink();
  booz.addItemToCartFromResults();
    })

  it('checking out cart', function(){
  avoHome.goToCheckout();
  check.verifyOnCheckoutPage();
        })

 it('adding item to the cart via search field', function(){
  avoNA.goToEnterAddressPage();
  address.enterAvoAddress('Avo');
  avoHome.verifyRegistration();
  avoHome.addToCartViaSearchFieldMenu('Whiskey');
    })


