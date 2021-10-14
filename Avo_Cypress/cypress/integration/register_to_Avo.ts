/// <reference types="cypress" /> 
import {base} from "../pages/base_page"
import { avoNoAddress } from "../pages/avo_No_Address_Page"
import {avoHomePage} from "../pages/avo_Home_Page"
import {enterAddressPage}from "../pages/enter_Address_Page"
import {signInPage}from "../pages/sign_in_page"
import {createAccountPage}from "../pages/create_account_page"


beforeEach(() => {
    cy.viewport(1280, 720)
  })
  
const basePage = new base()
const avoNA  = new avoNoAddress()
const address = new enterAddressPage()
const avoHome  = new avoHomePage()
const sign  = new signInPage()
const newaccount  = new createAccountPage()

 it('registration test', function(){

    basePage.navigate('https://www.avonow.com/');
    avoNA.goToEnterAddressPage();
    address.enterAvoAddress('Avo');
    avoHome.goToSignInPage();
    sign.goToCreateAccountPage();
    newaccount.createRandomAccount();
    avoHome.verifyRegistration();
    })
