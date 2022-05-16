/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Users } from "../Pages/users_page";
import { Files } from "../Pages/files_page";

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

         var email = faker.internet.email().toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var role="User";

         //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.clickInviteUsers();

         //Verifying invited user
         users.verifyMessageText(email+" has been invited to your Stavvy account via email!");
         users.searchUser(firstName+" "+middleName+" "+lastName);
         users.navigateToManageUserPage(email);
         users.verifyUserRole(role);
         users.clickOnManageUserCloseButton();
        })


     it("inviting new user as notary", () =>{

         var email = faker.internet.email().toLowerCase();
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var role="User";

         //Navigate to Users page
         users.clickOnUsers();
 
         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Verifying invited user
         users.verifyMessageText(email+" has been invited to your Stavvy account via email!");
         users.searchUser(firstName+" "+middleName+" "+lastName);
         users.navigateToManageUserPage(email);
         users.verifyNotaryCheckBoxIsSelected();
         users.verifyUserRole(role);
         users.clickOnManageUserCloseButton();
       })


     it("inviting new user as Admin", () =>{

         var email = faker.internet.email().toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var role="Admin";

         //Navigate to Users page
         users.clickOnUsers();
 
         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.clickRoleDropdown();
         users.selectAdminRole();
         users.clickInviteUsers();

          //verifying invited user
         users.verifyMessageText(email+" has been invited to your Stavvy account via email!");
         users.searchUser(firstName+" "+middleName+" "+lastName);
         users.navigateToManageUserPage(email);
         users.verifyUserRole(role);
         users.clickOnManageUserCloseButton();
       })


     it("inviting new user as Notary and Admin", () =>{

         var email = faker.internet.email().toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var role="Admin";

         //Navigate to Users page
         users.clickOnUsers();
 
         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.selectNotaryOptionForUser();
         users.clickRoleDropdown();
         users.selectAdminRole();
         users.clickInviteUsers();
         users.verifyMessageText(email+" has been invited to your Stavvy account via email!")
        
         //Verification
         users.searchUser(firstName+" "+middleName+" "+lastName);
         users.navigateToManageUserPage(email)
         users.verifyUserRole(role);
         users.verifyNotaryCheckBoxIsSelected();
         users.clickOnManageUserCloseButton();
       })


     it("verify deleting user",()=>{

         var email = faker.internet.email().toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.clickInviteUsers();
         users.searchUser(firstName)

         //Delete user
         users.navigateToManageUserPage(email)
         users.copyAndPasteEmail();
         users.clickOnDeleteUserButton();

         //Verifying deleted user
         users.verifyMessageText("User has been deleted.");
         users.searchUser(firstName);
         users.verifyDeletedUserInTheList(email);
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
   
         var email = faker.internet.email().toLowerCase();
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();

         //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.clickInviteUsers();

         //Verify invited user
         users.verifyMessageText(email+" has been invited to your Stavvy account via email!");
         users.searchUser(firstName+" "+middleName+" "+lastName);
         users.navigateToManageUserPage(email);
         users.clickOnManageUserCloseButton();

         //Invite new user with existing user details
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         
         //Verify inviting user
         users.verifyErrorText("User already exists, please enter a different email.");
         users.verifyInviteUsersDisabled();
       })


     it("Verify inviting new user with an invalid email",()=>{


         var email = faker.name.findName();
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();

         //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
        
         //Verify erorr text
         users.verifyErrorText("Please enter a valid email address.");
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

         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterFirstName(firstName);
         users.enterMiddleName(middleName);
         users.enterLastName(lastName);
         users.clickInviteUsers();

         //Verify error text
         users.verifyErrorText("Error:  is not a valid email. A valid email is required to invite a user to your account.")
      })


     it("Verify inviting new user without filling Name fields",()=>{

         var email = faker.internet.email().toLowerCase();

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

         var email = faker.internet.email().toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Make Notary to Non-Notary
         users.searchUser(firstName);
         users.navigateToManageUserPage(email);
         users.selectNotaryOptionForUser();
         users.clickSaveUserButton();

         //Verify user's notarty status
         users.searchUser(firstName);
         users.navigateToManageUserPage(email);
         users.verifyNotaryCheckBoxIsDeselected();

         //Make Non-notary as Notary
         users.selectNotaryOptionForUser();
         users.clickSaveUserButton();

         //Verify user's notary status
         users.searchUser(firstName);
         users.navigateToManageUserPage(email)
         users.verifyNotaryCheckBoxIsSelected();
       })


     it("Verify creating new Loan oficcer",()=>{

          var name=faker.name.findName();
          var email=faker.internet.email().toLowerCase();
          var phone=faker.phone.phoneNumber();
          var NMLSlicesnceNumber=Math.floor(Math.random()*10000);
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name);
         users.enterLoanOfficerEmail(email);
         users.enterLoanOfficerPhone(phone);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList(name,email)
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

          var name=faker.name.findName();
          var email=faker.internet.email().toLowerCase();
     
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name);
         users.enterLoanOfficerEmail(email);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList(name,email);
       })


     it("Verify creating new loan officer with an existing loan officer details",()=>{

          var name=faker.name.findName();
          var email=faker.internet.email().toLowerCase();
          var phone=faker.phone.phoneNumber();
          var NMLSlicesnceNumber=Math.floor(Math.random()*10000);
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name);
         users.enterLoanOfficerEmail(email);
         users.enterLoanOfficerPhone(phone);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber);
         users.clickTheSubmitButton();

         //Create new loan officer with existing loan officer details
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name);
         users.enterLoanOfficerEmail(email);
         users.enterLoanOfficerPhone(phone);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('A user with an email of '+email+' already exists.');
       })


     it("Verify creating new loan officer with an existing loan officer's email",()=>{

          var name1=faker.name.findName();
          var name2=faker.name.findName();
          var email=faker.internet.email().toLowerCase();
          var phone1=faker.phone.phoneNumber();
          var phone2=faker.phone.phoneNumber();
          var NMLSlicesnceNumber1=Math.floor(Math.random()*10000);
          var NMLSlicesnceNumber2=Math.floor(Math.random()*10000);
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name1);
         users.enterLoanOfficerEmail(email);
         users.enterLoanOfficerPhone(phone1);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber1);
         users.clickTheSubmitButton();

         //Create new loan officer with existing loan officer details
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name2);
         users.enterLoanOfficerEmail(email);
         users.enterLoanOfficerPhone(phone2);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber2);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('A user with an email of '+email+' already exists.');
       })


     it("Verify creating new loan officer with an existing loan officer's name, phone, and NMLS License Number",()=>{

          var name=faker.name.findName();
          var email1=faker.internet.email().toLowerCase();
          var email2=faker.internet.email().toLowerCase();
          var phone=faker.phone.phoneNumber();
          var NMLSlicesnceNumber=Math.floor(Math.random()*10000);
          
         //Navigate to Users page
         users.clickOnUsers();

         //Create new loan officer
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name);
         users.enterLoanOfficerEmail(email1);
         users.enterLoanOfficerPhone(phone);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList(name,email1)

         //Create new loan officer with existing loan officer details
         users.clickOnUsers();
         users.clickCreateLoanOfficer();
         users.enterLoanOfficerName(name);
         users.enterLoanOfficerEmail(email2);
         users.enterLoanOfficerPhone(phone);
         users.enterLoanOfficerNMLSlicenseNumber(NMLSlicesnceNumber);
         users.clickTheSubmitButton();

         //Verify created loan officer
         users.verifyMessageText('Loan officer created!');
         files.navigateToFiles();
         files.clickCreateFileButton();
         files.clickTheLoanOfficerDropdown();
         users.verifyLoanOfficerIntheList(name,email1);
         })

      it("Verify editing user name details",()=>{

         var email = faker.internet.email().toLowerCase()
         var firstName1=faker.name.firstName();
         var middleName1=faker.name.middleName();
         var lastName1=faker.name.lastName();
         var firstName2=faker.name.firstName();
         var middleName2=faker.name.middleName();
         var lastName2=faker.name.lastName();
         var userName=firstName2+" "+middleName2+" "+lastName2;

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName1,middleName1,lastName1,email);
         users.selectNotaryOptionForUser();
         users.clickInviteUsers();

         //Edit the user name details
         users.searchUser(firstName1);
         users.navigateToManageUserPage(email);
         users.editTheUserNameDetails(firstName2,middleName2,lastName2);
         users.clickSaveUserButton();

         //Verify edited user name details
         users.searchUser(email);
         users.verifyUserNameInTheList(userName);
         users.navigateToManageUserPage(email);
         users.verifyEditedUserNameDetails(firstName2,middleName2,lastName2);
         })
         
         
    it("Verify users search bar",()=>{

         var email = faker.internet.email().toLowerCase()
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var userName=firstName+" "+middleName+" "+lastName;

         //Navigate to Users page
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
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