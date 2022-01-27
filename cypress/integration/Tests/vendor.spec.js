/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Vendors } from "../Pages/vendors_page";

const login = new Login();
const vendors=new Vendors();
describe("Vendor test cases" , ()=>{

    beforeEach("eSign test cases",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })


     it("verify inviting new vendor", ()=>{

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite new vendor
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain("yyyyy112.com");
        vendors.enterVendorInfo("First Vendor6","first","middle","last","abbcdeeee@gmail.com");
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyInvitedVendorMessage("First Vendor6 has been invited. Click the requested vendors tab.");
        vendors.verifyStatusOfVendor("yyyyy.com","Invited");
     })

     it("verify inviting new vendor with the existing domain",()=>{

        //Navigate to Organizations
        vendors.clickOnOrganizations();
        vendors.CopyDomainAndEnterInVendorDoamin();
        vendors.enterVendorInfo("First Vendor4","first","middle","last","bbbccc@gmail.com");
        vendors.clickOnInviteVendor();

        //Verify error text
        vendors.verifyErrorText("An existing or duplicate value has already been saved.");
     })

     it("verify inviting new vendor with the existing vendor mail",()=>{

        //Navigate to Organizations
        vendors.clickOnOrganizations();
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain("ttttt.com");
        vendors.enterVendorInfo("First Vendor5","first","middle","last","aaaaa@gmail.com");
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyErrorText("User already exists with that email. Did you use their correct domain?");
        vendors.clickOnCloseIcon();
        vendors.verifyDomainNotExistInTheList("ttt.com");
     })

     it("verify navigating to details of connected org",()=>{
         const vendor="kalyani";

         //Navigate to Organizations
         vendors.clickOnOrganizations();

         //Navigate to Vendor details
         vendors.clickOnDetailsOfVendor(vendor);

         //Verify details page
         vendors.verifyVendorNameInDetailsPage(vendor);
         vendors.verifyRejectConnectionButtonPresentAndDisbaled();
     })

   
    })