/// <reference types="cypress" />

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

     it("inviting new user", () =>{

        const email=faker.internet.email();
        const firstName=faker.name.firstName();
        const middleName=faker.name.middleName();
        const lastName=faker.name.lastName();
        const role="User";

        //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo(firstName,middleName,lastName,email);
         users.clickInviteUsers();

        //Verifying invited user
         users.verifyMessageText(email+" has been invited to your Stavvy account via email!");
         users.searchUser(firstName);
         users.navigateToManageUserPage(email);
         users.verifyUserRole(role);
         users.clickOnManageUserCloseButton();
     })

     it("inviting new user as notary", () =>{

        const email="manasa.lingala+9898@qualitlabs.com";
        const firstName=faker.name.firstName();
        const middleName=faker.name.middleName();
        const lastName=faker.name.lastName();
        const role="User";

        //Navigate to Users page
        users.clickOnUsers();

        //Inviting user
        users.clickOnInviteUser();
        users.enterUserInfo(firstName,middleName,lastName,email);
        users.selectNotaryOptionForUser();
        users.clickInviteUsers();

         //Verifying invited user
        users.verifyMessageText(email+" has been invited to your Stavvy account via email!");
        users.searchUser(firstName);
        users.navigateToManageUserPage(email);
        users.verifyNotaryCheckBoxIsSelected();
        users.verifyUserRole(role);
        users.clickOnManageUserCloseButton();
    })

    it("inviting new user as Admin", () =>{

        const email="manasa.lingala+9898@qualitlabs.com";
        const firstName=faker.name.firstName();
        const middleName=faker.name.middleName();
        const lastName=faker.name.lastName();
        const role="Admin";

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
        users.searchUser(firstName);
        users.navigateToManageUserPage(email);
        users.verifyUserRole(role);
        users.clickOnManageUserCloseButton();
    })


    it("inviting new user as Notary and Admin", () =>{

        const email="manasa.lingala+9898@qualitlabs.com";
        const firstName=faker.name.firstName();
        const middleName=faker.name.middleName();
        const lastName=faker.name.lastName();
        const role="User";

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
        users.searchUser(firstName);
        users.navigateToManageUserPage(email);
        users.verifyUserRole(role)
        users.verifyNotaryCheckBoxIsSelected();
        users.clickOnManageUserCloseButton();
    })


    it("verify deleting user",()=>{

        const userName="Test user 1"

       //Navigate to Users page
        users.clickOnUsers();

        //Deleting
        users.searchUser(userName);
        users.clickOnUserName(userName);
        users.copyAndPasteEmail()
        users.clickOnDeleteUserButton();

        //Verifying deleted user
        users.verifyMessageText("User has been deleted.");
        users.verifyDeletedUserInTheList(userName);
    })


    it("verify inviting new user with existing user's mail", ()=>{

        var mail="manasa.lingala+7778@qualitlabs.com"

        //Navigating to Users page
        users.clickOnUsers();

        //Inviting new user the existing user's email
        users.clickOnUserMail(mail);
        users.copyMailAndPasteInMail();

        //Verifying invited user
        users.verifyErrorText("User already exists, please enter a different email.");
        users.checkInviteUsersDisabled();
        users.clickOnManageUserCloseButton();
    })


    it("Verify setting role of an existing User to Admin",()=>{
 
        var userRole="User";
        var role ="Admin";

        //Navigating to Users page
        users.clickOnUsers();

        //Set user's role to "User"
        users.clickOnUserByRole(userRole);
        users.clickSetUserRoleDropdown();
        users.selectAdminRole();
         
        //Save user and verify user role
        users.saveUserAndVerifyUserRole(role);
    })


    it("Verify setting role of an existing Admin to User",()=>{

        var userRole="Admin";
        var role ="User";

        //Navigating to Users page
        users.clickOnUsers();

        //Set user's role to "User"
        users.clickOnUserByRole(userRole);
        users.clickSetUserRoleDropdown();
        users.selectUserRole();
         
        //Save user and verify user role
        users.saveUserAndVerifyUserRole(role);
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

})