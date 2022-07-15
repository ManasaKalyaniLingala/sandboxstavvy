/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Users } from "../Pages/users_page";
import { Files } from "../Pages/files_page";
import { use } from "chai";

const { faker } = require('@faker-js/faker');

const login = new Login();
const users = new Users();
const files = new Files();

describe("Users test cases" , ()=>{


    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
       });


     it("inviting new user", () =>{

         var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
         var role="User";

         //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.clickInviteUsers();

         //Verifying invited user
         users.verifyInvitationMessageText(userEmail);
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.verifyUserRole(role);
        })


     it("inviting new user as notary", () =>{

         var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
         var role="User";

         //Navigate to Users page
         users.clickOnUsers();
 
         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Verifying invited user
         users.verifyInvitationMessageText(userEmail);
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.verifyNotaryCheckBoxIsSelected();
         users.verifyUserRole(role);
       })


     it("inviting new user as Admin", () =>{

         var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
         var role="Admin";

         //Navigate to Users page
         users.clickOnUsers();
 
         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.clickRoleDropdown();
         users.selectAdminRole();
         users.clickInviteUsers();

          //verifying invited user
         users.verifyInvitationMessageText(userEmail);
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.verifyUserRole(role);
       })


     it("inviting new user as Notary and Admin", () =>{

         var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
         var role="Admin";

         //Navigate to Users page
         users.clickOnUsers();
 
         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.selectNotaryOptionForUser();
         users.clickRoleDropdown();
         users.selectAdminRole();
         users.clickInviteUsers();
         users.verifyInvitationMessageText(userEmail)
        
         //Verification
         users.searchUser();
         users.navigateToManageUserPage(userEmail)
         users.verifyUserRole(role);
         users.verifyNotaryCheckBoxIsSelected();
       })


     it("verify deleting user",()=>{

         var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.clickInviteUsers();
         users.searchUser(userEmail)

         //Delete user
         users.navigateToManageUserPage(userEmail)
         users.enterEmailInDeleteUserTextBox(userEmail)
         users.clickOnDeleteUserButton();

         //Verifying deleted user
         users.verifyMessageText("User has been deleted.");
         users.searchUser(userEmail);
         users.verifyDeletedUserInTheList(userEmail);
        })
   

     it("verify inviting new user with existing user's mail", ()=>{

         //Navigating to Users page
         users.clickOnUsers();

         //Inviting new user the existing user's email
         users.clickOnAnyUserFromTheList();
         users.copyMailAndPasteInMail();

         //Verifying invited user
         users.verifyErrorText("User already exists, please enter a different email.");
         users.verifyInviteUsersDisabled();
         users.clickOnManageUserCloseButton();
       })


     it("Verify inviting new user with an existing user's details",()=>{
   
        var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.clickInviteUsers();

         //Verify invited user
         users.verifyInvitationMessageText(userEmail);
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.clickOnManageUserCloseButton();

         //Invite new user with existing user details
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
        
         //Verify inviting user
         users.verifyErrorText("User already exists, please enter a different email.");
         users.verifyInviteUsersDisabled();
       })


     it("Verify inviting new user with an invalid email",()=>{

         var email = faker.name.findName();

         //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterEmail(email);
         users.enterFirstName();
         users.enterLastName();
        
         //Verify erorr text
         users.verifyErrorText("Please enter a valid email address.");
         users.verifyInviteUsersDisabled();
       })
 

     it("Verify setting role of an existing User to Admin",()=>{
 
         var userRole="User";
         var adminRole ="Admin";

         //Navigating to Users page
         users.clickOnUsers();

         //Set user's role to "User"
         users.clickOnUserByRole(userRole);
         users.clickSetUserRoleDropdown();
         users.selectAdminRole();
         
         //Save user and verify user role
         users.saveUserAndVerifyUserRole(adminRole);
       })


     it("Verify setting role of an existing Admin to User",()=>{

         var adminRole="Admin";
         var userRole ="User";

         //Navigating to Users page
         users.clickOnUsers();

         //Set user's role to "User"
         users.clickOnUserByRole(adminRole);
         users.clickSetUserRoleDropdown();
         users.selectUserRole();
         
         //Save user and verify user role
         users.saveUserAndVerifyUserRole(userRole);
       })


     it("Verify inviting new user without filling details",()=>{

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.clickInviteUsers();

         //Verify error text
         users.verifyErrorText("Error:  is not a valid email. A valid email is required to invite a user to your account.");
      })

 
     it("Verify inviting new user without filling email field",()=>{

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterFirstName();
         users.enterMiddleName();
         users.enterLastName();
         users.clickInviteUsers();

         //Verify error text
         users.verifyErrorText("Error:  is not a valid email. A valid email is required to invite a user to your account.")
      })


     it("Verify inviting new user without filling Name fields",()=>{

         var email = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterEmail(email);
         users.clickInviteUsers();

         //Verify error text
         users.verifyErrorText("Error: Missing First Name entry for email: "+email);
      })


     it("Verify making an exsiting Notary to Non-Notary and non-Notary to Notary",()=>{

        var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Make Notary to Non-Notary
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.selectNotaryOptionForUser();
         users.clickSaveUserButton();

         //Verify user's notarty status
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.verifyNotaryCheckBoxIsDeselected();

         //Make Non-notary as Notary
         users.selectNotaryOptionForUser();
         users.clickSaveUserButton();

         //Verify user's notary status
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail)
         users.verifyNotaryCheckBoxIsSelected();
       })


     it("Verify creating new Loan oficcer",()=>{

        var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerDetails(userEmail)
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList(userEmail);
       })


     it("Verify creating new loan officer without giving details",()=>{
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create loan officer
         users.clickCreateLoanOfficer();
         
         //Verify submit button is disabled
         users.verifySubmitButtonIsDisabled();   
       })


     it("Verify creating new loan officer by giving only email and name",()=>{

        var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName();
         users.enterLoanOfficerEmail(userEmail);

         //Verify submit button is disabled
         users.verifySubmitButtonIsDisabled();
       })


     it("Verify creating new loan officer with an existing loan officer details",()=>{

        var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerDetails(userEmail)
         users.clickTheSubmitButton();

         //Create new loan officer with existing loan officer details
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerDetails(userEmail);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('A user with an email of '+userEmail+' already exists.');
       })


     it("Verify creating new loan officer with an existing loan officer's email",()=>{

          var name1=faker.name.findName();
          var name2=faker.name.findName();
          var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"
          var phone1=faker.phone.phoneNumber();
          var phone2=faker.phone.phoneNumber();
          var NMLSlicesnceNumber1=Math.floor(Math.random()*10000);
          var NMLSlicesnceNumber2=Math.floor(Math.random()*10000);
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerDetails(name1,email,phone1,NMLSlicesnceNumber1);
         users.clickTheSubmitButton();

         //Create new loan officer with existing loan officer details
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerDetails(name2,email,phone2,NMLSlicesnceNumber2);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('A user with an email of '+email+' already exists.');
       })


     it("Verify creating new loan officer with an existing loan officer's name, phone, and NMLS License Number",()=>{

          var email="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerDetails();
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList()

         //Create new loan officer with existing loan officer details
         users.clickOnUsers();
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName();
         users.enterLoanOfficerEmail(email);
         users.enterLoanOfficerPhone();
         users.enterLoanOfficerNMLSlicenseNumber();
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList(email);
         })


      it("Verify editing user name details",()=>{

         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var userName=firstName+" "+middleName+" "+lastName;
         var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting new user
         users.clickOnInviteUser();
         users.enterUserInfo(userEmail);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Edit the user name details
         users.searchUser(userEmail);
         users.navigateToManageUserPage(userEmail);
         users.editTheUserNameDetails(firstName,middleName,lastName);
         users.clickSaveUserButton();

         //Verify edited user name details
         users.searchUser(userEmail);
         users.verifyUserNameInTheList(userName);
         users.navigateToManageUserPage(userEmail);
         users.verifyEditedUserNameDetails(firstName,middleName,lastName);
         })
         
         
    it("Verify users search bar",()=>{

         var email = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com".toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var userName=firstName+" "+middleName+" "+lastName;

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(email,firstName,middleName,lastName);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Search the user with email
         users.searchUser(email);
         
         //Verify the user in the list
         users.verifyTheSearchedText(email);
         users.verifyUserEmailInTheList(email);

         //Search the user with full name
         users.searchUser(userName)

         //Verify the user in the list
         users.verifyTheSearchedText(userName)
         users.verifyUserNameInTheList(userName);

         //Search the user with first name
         users.searchUser(firstName);

         //Verify the user in the list
         users.verifyTheSearchedText(firstName)
         users.verifyUserNameInTheList(firstName);

         //Search the user with first name
         users.searchUser(middleName);

         //Verify the user in the list
         users.verifyTheSearchedText(middleName)
         users.verifyUserNameInTheList(middleName);

         //Search the user with first name
         users.searchUser(lastName);

         //Verify the user in the list
         users.verifyTheSearchedText(lastName);
         users.verifyUserNameInTheList(lastName);
    })

}) 