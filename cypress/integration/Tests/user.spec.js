/// <reference types="cypress" />

import { use } from "chai";
import { Login } from "../Pages/login_page";
import { Users } from "../Pages/users_page";

const { faker } = require('@faker-js/faker');

const login = new Login();
const users = new Users();

describe("Users test cases" , ()=>{


    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     });

     it.skip("inviting new user", () =>{

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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
        users.checkInviteUsersDisabled();
        users.clickOnManageUserCloseButton();
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

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";

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

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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
})