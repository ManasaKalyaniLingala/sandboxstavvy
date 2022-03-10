/// <reference types="cypress" />

import { Header } from "../Pages/header_page";
import { Login } from "../Pages/login_page";

const login=new Login();
const header=new Header();

describe("Header test cases" , ()=>{

    beforeEach("Login as valid user",()=>{ 

        //Login to stavvy
        login.navigateToUrl();
        login.loginToApplication();
     })

     it("Verify Header view",()=>{

        //Verify Header view
        header.verifyHeaderView();
     })

     it("Verify Notifications bar view",()=>{

        //Click Notifications icon
        header.clickNotificationsButton();

        //Verify notification dropdown
        header.verifyNoticationsDropDown();
     })

     it("Verify Profile dropdown view",()=>{

        //Click profile
        header.clickProfileButton();

        //Verify profile dropdown
        header.verifyProfileDropdownList();
     })

     it("Verify Settings button in profile",()=>{

        //Click profile
        header.clickProfileButton();

        //Click Settings button
        header.clickSettingsButton();

        //Verify settings button
        header.verifyNavigatedToSettingsPage();
     })

     it("Verify signing out",()=>{

        //Click profile
        header.clickProfileButton();

        //Click Sign Out button
        header.clickSignOutButton();

        //Verify Signed out
        login.verifyLoginPageView();
     })

     it("Verify help button",()=>{

        //Hover over help button
        header.hoverOverHelpButton();

        //Verify help buton text
        header.verifyHelpButtonText();
     })

    })
