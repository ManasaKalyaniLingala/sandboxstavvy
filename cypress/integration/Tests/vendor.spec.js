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
        vendors.verifyInvitedVendorMessage(vendorName+" has been invited. No further action is required.");
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

     it("Verify inviting new vendor with existing vendor details",()=>{

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


     it("verify inviting new vendor with the existing vendor mail",()=>{

        var vedndor1domain=faker.name.firstName()+".com";
        var vendor1Name=faker.name.findName();
        var vendor1firstName=faker.name.firstName();
        var vendor1middleName=faker.name.middleName();
        var vendor1lastName=faker.name.lastName();
        var vendor2domain=faker.name.firstName()+".com";
        var vendor2Name=faker.name.findName();
        var vendor2firstName=faker.name.firstName();
        var vendor2middleName=faker.name.middleName();
        var vendor2lastName=faker.name.lastName();
        var vendoremail = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite vendor
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain(vedndor1domain);
        vendors.enterVendorInfo(vendor1Name,vendor1firstName,vendor1middleName,vendor1lastName,vendoremail);
        vendors.clickOnInviteVendor();

        //Invite vendor with existing vendor mail
        vendors.clickOnInviteNewVendor()
        vendors.enterVendorDomain(vendor2domain);
        vendors.enterVendorInfo(vendor2Name,vendor2firstName,vendor2middleName,vendor2lastName,vendoremail);
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyErrorText("User already exists with that email. Did you use their correct domain?");
        vendors.clickOnCloseIcon();
        vendors.verifyDomainNotExistInTheList(vendor2domain);
     })

     it("Verify inviting new vendor with the existing vendor name credentials",()=>{

        var domain=faker.name.firstName()+".com";
        var domain2=faker.name.firstName()+".com";
        var vendorName=faker.name.findName();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email1=faker.internet.email().toLowerCase();
        var email2=faker.internet.email().toLowerCase();
        var status="Invited";

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite vendor
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain(domain);
        vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email1);
        vendors.clickOnInviteVendor();

        //Invite vendor with existing vendor name credentials
        vendors.clickOnInviteNewVendor()
        vendors.enterVendorDomain(domain2);
        vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email2);
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyInvitedVendorMessage(vendorName+" has been invited. No further action is required.");
        vendors.verifyStatusOfVendor(domain,status);
     })



     it("verify navigating to details of connected org",()=>{

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Navigate to Vendor details
        vendors.clickOnDetailsOfVendorAndVerifyVendorName();

        //Verify details page
        vendors.verifyRejectConnectionButtonPresentAndDisbaled();
     })



     it("Verify inviting new vendor without domain",()=>{

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite vendor
        vendors.clickOnInviteNewVendor();
        vendors.verifyNextButtonIsDisabled();
      })



    it("Verify inviting new vendor without vendor detail",()=>{

      var domain=faker.name.findName();

     //Navigate to Organizations
     vendors.clickOnOrganizations();

     //Invite vendor
     vendors.clickOnInviteNewVendor();
     vendors.enterVendorDomain(domain);
     vendors.clickOnNextButton();
     vendors.verifyInviteVendorIsDisabled();
    })


    it("Verify inviting vendor without vendor's email",()=>{

      var domain=faker.name.findName();
      var firstName=faker.name.firstName();
      var middleName=faker.name.middleName();
      var lastName=faker.name.lastName();
      var vendorName=faker.name.findName();

      //Navigate to Organizations
      vendors.clickOnOrganizations();

      //Invite vendor
      vendors.clickOnInviteNewVendor();
      vendors.enterVendorDomain(domain);
      vendors.clickOnNextButton();
      vendors.enterVendorName(vendorName);
      vendors.enterFirstName(firstName);
      vendors.enterMiddleName(middleName);
      vendors.enterLastName(lastName);
      vendors.verifyInviteVendorIsDisabled();
    })



    it("Verify inviting vendor with an improper vendor's email",()=>{

      var domain=faker.name.findName();
      var firstName=faker.name.firstName();
      var middleName=faker.name.middleName();
      var lastName=faker.name.lastName();
      var vendorName=faker.name.findName();
      var email=faker.name.findName();

      //Navigate to Organizations
      vendors.clickOnOrganizations();
      
      //Invite vendor
      vendors.clickOnInviteNewVendor();
      vendors.enterVendorDomain(domain);
      vendors.enterVendorInfo(vendorName,firstName,middleName,lastName,email);
      vendors.clickOnInviteVendor();
      vendors.verifyErrorText('Please enter a valid email address');
    })



    it("Verify inviting new vendor without vendor name credentials",()=>{
      
      var domain=faker.name.findName();
      var email=faker.internet.email();

      //Navigate to Organizations
      vendors.clickOnOrganizations();

      //Invite vendor
      vendors.clickOnInviteNewVendor();
      vendors.enterVendorDomain(domain);
      vendors.clickOnNextButton();
      vendors.enterVendoMail(email);
      vendors.verifyInviteVendorIsDisabled();
    })

    it("Verify inviting new vendor with an improper domain",()=>{

      var domain="1222"

      //Navigate to Organizations
      vendors.clickOnOrganizations();

      //Invite vendor
      vendors.clickOnInviteNewVendor();
      vendors.enterVendorDomain(domain);

      //Verify Next button is disabled
      vendors.verifyNextButtonIsDisabled();

    })

    })