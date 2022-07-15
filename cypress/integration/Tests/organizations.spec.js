/// <reference types="cypress" />

import faker from "@faker-js/faker";
import { Login } from "../Pages/login_page";
import { Vendors } from "../Pages/organizations_page";

const login = new Login();
const vendors=new Vendors();
describe("Vendor test cases" , ()=>{

    beforeEach("Login as user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })


     it("verify inviting new vendor", ()=>{

         var domain=faker.name.findName()+".com";
         var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
         var status="Invited";

        //Navigate to Organizations
        vendors.clickOnOrganizations();

        //Invite new vendor
        vendors.clickOnInviteNewVendor();
        vendors.enterVendorDomain(domain);
        vendors.enterVendorInfo(email);
        vendors.clickOnInviteVendor();

        //Verify added vendor
        vendors.verifyInvitedVendorMessage();
        vendors.verifyStatusOfVendor(status,domain);
     })

   
     it("verify inviting new vendor with the existing domain",()=>{

       var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

        //Navigate to Organizations
        vendors.clickOnOrganizations();
        vendors.CopyDomainAndEnterInVendorDoamin();
        vendors.enterVendorInfo(email);
        vendors.clickOnInviteVendor();

        //Verify error text
        vendors.verifyErrorText("An existing or duplicate value has already been saved.");
     })


     it("Verify inviting new vendor with existing vendor details",()=>{

         var domain=faker.name.findName()+".com";
         var email1="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
         var email2="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Organizations
          vendors.clickOnOrganizations();

         //Invite vendor
          vendors.clickOnInviteNewVendor();
          vendors.enterVendorDomain(domain);
          vendors.enterVendorInfo(email1);
          vendors.clickOnInviteVendor();

         //Invite vendor with existing vendor mail
          vendors.clickOnInviteNewVendor();
          vendors.enterVendorDomain(domain);
          vendors.enterVendorInfo(email2);
          vendors.clickOnInviteVendor();

         //Verify added vendor
          vendors.verifyErrorText("An existing or duplicate value has already been saved.");
      })


     it("verify inviting new vendor with the existing vendor mail",()=>{

          var vendorDomain=faker.name.firstName()+".com";
          var vendorName=faker.name.findName();
          var vendorFirstName=faker.name.firstName();
          var vendorMiddleName=faker.name.middleName();
          var vendorLastName=faker.name.lastName();
          var vendorDomain2=faker.name.findName()+".com";
          var domain2=faker.name.findName()+".com";
          var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Organizations
          vendors.clickOnOrganizations();

         //Invite vendor
          vendors.clickOnInviteNewVendor();
          vendors.enterVendorDomain(vendorDomain);
          vendors.enterVendorInfo(email);
          vendors.clickOnInviteVendor();

         //Invite vendor with existing vendor mail
          vendors.clickOnInviteNewVendor();
          vendors.enterVendorDomain(vendorDomain2);
          vendors.enterVendorInfo(email,vendorName,vendorFirstName,vendorMiddleName,vendorLastName);
          vendors.clickOnInviteVendor();

         //Verify added vendor
          vendors.verifyErrorText("User already exists with that email. Did you use their correct domain?");
          vendors.clickOnCloseIcon();
          vendors.verifyDomainNotExistInTheList(vendorDomain);
      })

     it("Verify inviting new vendor with the existing vendor name credentials",()=>{

          var domain=faker.name.firstName()+".com";
          var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
          var status="Invited";

         //Navigate to Organizations
          vendors.clickOnOrganizations();

         //Invite vendor
          vendors.clickOnInviteNewVendor();
          vendors.enterVendorDomain();
          vendors.enterVendorInfo();
          vendors.clickOnInviteVendor();

         //Invite vendor with existing vendor name credentials
          vendors.clickOnInviteNewVendor()
          vendors.enterVendorDomain(domain);
          vendors.clickOnNextButton();
          vendors.enterVendorName();
          vendors.enterFirstName();
          vendors.enterMiddleName();
          vendors.enterLastName();
          vendors.enterVendoMail(email);
          vendors.clickOnInviteVendor();

         //Verify added vendor
          vendors.verifyInvitedVendorMessage();
          vendors.verifyStatusOfVendor(status,domain);
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

         //Navigate to Organizations
          vendors.clickOnOrganizations();

         //Inviting new vendor without vendor details
          vendors.clickOnInviteNewVendor();
          vendors.enterVendorDomain();
          vendors.clickOnNextButton();

         //Verification
          vendors.verifyInviteVendorIsDisabled();
      })


    it("Verify inviting vendor without vendor's email",()=>{

      //Navigate to Organizations
       vendors.clickOnOrganizations();

      //Invite vendor
       vendors.clickOnInviteNewVendor();
       vendors.enterVendorDomain();
       vendors.clickOnNextButton();
       vendors.enterVendorName();
       vendors.enterFirstName();
       vendors.enterMiddleName();
       vendors.enterLastName();
       vendors.verifyInviteVendorIsDisabled();
      })



    it("Verify inviting vendor with an improper vendor's email",()=>{

       var firstName=faker.name.firstName();
       var middleName=faker.name.middleName();
       var lastName=faker.name.lastName();
       var vendorName=faker.name.findName();
       var email=faker.name.findName();

      //Navigate to Organizations
       vendors.clickOnOrganizations();
      
      //Invite vendor
       vendors.clickOnInviteNewVendor();
       vendors.enterVendorDomain();
       vendors.enterVendorInfo(email,vendorName,firstName,middleName,lastName);
       vendors.clickOnInviteVendor();
       vendors.verifyErrorText('Please enter a valid email address');
      })



    it("Verify inviting new vendor without vendor name credentials",()=>{
      
       var domain=faker.name.findName()+".com";
       var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

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


   it("Verify inviting vendor by Vendor Phone Number",()=>{

          var vendorPhoneNumber=faker.phone.phoneNumberFormat();
          var status="Invited";
          var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";


         //Navigate to Organizations
          vendors.clickOnOrganizations();

         //Invite new vendor
          vendors.clickOnInviteNewVendor();
          vendors.clickTheWebsiteNotAvailableButton();
          vendors.enterVendorName();
          vendors.enterFirstName();
          vendors.enterMiddleName();
          vendors.enterLastName();
          vendors.enterVendorPhoneNumber(vendorPhoneNumber);
          vendors.enterVendoMail(email);
          vendors.clickOnInviteVendor();

        //Verify added vendor
          vendors.verifyInvitedVendorMessage();
          vendors.verifyStatusOfVendor(status,vendorPhoneNumber)
         })

    })