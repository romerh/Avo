/// <reference types="cypress" /> 
import {base} from "../pages/base_page"
import { avoNoAddress } from "../pages/avo_No_Address_Page"
import {avoHomePage} from "../pages/avo_Home_Page"
import {enterAddressPage}from "../pages/enter_Address_Page"
import {alcoholicDrinksResultPage} from "../pages/alcoholic_drinks_page"


beforeEach(() => {
    cy.viewport(1280, 720)
  })
  
const basePage = new base()
const avoNA  = new avoNoAddress()
const address = new enterAddressPage()
const avoHome  = new avoHomePage()
const booz  = new alcoholicDrinksResultPage()

 it('searching by category test', function(){

    basePage.navigate('https://www.avonow.com/');
    avoNA.goToEnterAddressPage();
    address.enterAvoAddress('Avo');
    avoHome.searchForADrink();
    booz.verifyOnAlcoholicDrinksResultPage();
    })
