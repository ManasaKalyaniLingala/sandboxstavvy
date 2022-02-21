
/// <reference types="cypress" />

import faker from "@faker-js/faker";
import { Login } from "../Pages/login_page";
import { Vendors } from "../Pages/vendors_page";

const login = new Login();
const vendors=new Vendors();
describe("Vendor test cases" , ()=>{

    beforeEach("Login as user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })


     it("verify inviting new vendor", ()=>{

        var domain=faker.name.firstName()+".com";
        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
        var vendorName=faker.name.findName();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var status="Invited";

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite new vendor
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain(domain);
        vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email);
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyInvitedVendorMessage(vendorName+" has been invited. Click the requested vendors tab.");
        vendors.verifyStatusOfVendor(domain,status);
     })


     it("verify inviting new vendor with the existing domain",()=>{

        var vendorName=faker.name.findName();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";

        //Navigate to Organizations
        vendors.clickOnOrganizations();
        vendors.CopyDomainAndEnterInVendorDoamin();
        vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email);
        vendors.clickOnInviteVendor();

        //Verify error text
        vendors.verifyErrorText("An existing or duplicate value has already been saved.");
     })


     it.only("verify inviting new vendor with the existing vendor mail",()=>{

        var domain=faker.name.firstName()+".com";
        var vendorName=faker.name.findName();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite vendor
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain(domain);
        vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email);
        vendors.clickOnInviteVendor();

        //Invite vendor with existing vendor mail
        vendors.clickOnInviteNewVendor()
        vendors.enterVendorDomain(domain);
        vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email);
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyErrorText("User already exists with that email. Did you use their correct domain?");
        vendors.clickOnCloseIcon();
        vendors.verifyDomainNotExistInTheList(domain);
     })


     it("verify navigating to details of connected org",()=>{

         //Navigate to Organizations
         vendors.clickOnOrganizations();

         //Navigate to Vendor details
         vendors.clickOnDetailsOfVendorAndVerifyVendorName();

         //Verify details page
         vendors.verifyRejectConnectionButtonPresentAndDisbaled();
     })

    })