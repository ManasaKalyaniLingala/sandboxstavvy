/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Settings } from "../Pages/settings_page";

const login = new Login();
const settings=new Settings();

describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })

     it("Updating first name",()=>{
         
         var firstName="MANU";
         
        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();

         //Update first name
         settings.updateFirstName(firstName);

         //Verify updated first name
         settings.verifyUpdatedFirstName(firstName);
         settings.verifyUpdatedNameInProfile(firstName);
     })

     it("Updating middle name",()=>{

         var middleName="KAL";

        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();
         settings.updateOrganizationName(middleName);

         //Verify updated middle name
         settings.verifyUpdatedOrganizationName(middleName);
         settings.verifyUpdatedNameInProfile(middleName);
     })

     it("Updating last name",()=>{

         var lastName="L";

        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();
         settings.updateLastName(lastName);

         //Verify updated last name
         settings.verifyUpdatedLastName(lastName);
         settings.verifyUpdatedNameInProfile(lastName);
     })

     it("Update organization name",()=>{

         var organization="QUALITLABS";

        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();
         settings.updateOrganizationName(organization);

         //Verify updated organization
         settings.verifyUpdatedOrganizationName(organization);
     })
    })