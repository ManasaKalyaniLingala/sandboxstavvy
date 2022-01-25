/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Users } from "../Pages/users_page";

const login = new Login();
const users = new Users();

describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     });

     it("inviting new user", () =>{

        //Navigating to Users page.
         users.clickOnUsers();

         //Inviting user
         users.clickOnInviteUser();
         users.enterUserInfo("manasa","kalyani","lingala","manasa.lingala+7778@qualitlabs.com");
         users.clickInviteUsers();

        //Verifying invited user
         users.verifyMessageText("manasa.lingala+7778@qualitlabs.com has been invited to your Stavvy account via email!");
         users.searchUser("manasa");
         users.navigateToManageUserPage("manasa.lingala+7778@qualitlabs.com");
         users.verifyUserRole("User");
         users.clickOnManageUserCloseButton();
     })

     it("inviting new user as notary", () =>{

        //Navigate to Users page
        users.clickOnUsers();

        //Inviting user
        users.clickOnInviteUser();
        users.enterUserInfo("manasa","kalyani","lingala","manasa.lingala+8788@qualitlabs.com");
        users.selectNotaryOptionForUser();
        users.clickInviteUsers();

         //Verifying invited user
        users.verifyMessageText("manasa.lingala+8788@qualitlabs.com has been invited to your Stavvy account via email!");
        users.searchUser("manasa");
        users.navigateToManageUserPage("manasa.lingala+8788@qualitlabs.com");
        users.verifyNotaryCheckBoxIsChecked();
        users.verifyUserRole("User");
        users.clickOnManageUserCloseButton();
    })

    it("inviting new user as Admin", () =>{

        //Navigate to Users page
        users.clickOnUsers();

        //Inviting user
        users.clickOnInviteUser();
        users.enterUserInfo("zzz","bbbb","ccc","manasa.lingala+1234@qualitlabs.com");
        users.clickRoleDropdown();
        users.selectAdminRole();
        users.clickInviteUsers();

         //verifying invited user
        users.verifyMessageText("manasa.lingala+1234@qualitlabs.com has been invited to your Stavvy account via email!");
        users.searchUser("zzz bbbb ccc");
        users.navigateToManageUserPage("manasa.lingala+1234@qualitlabs.com");
        users.verifyUserRole("Admin");
        users.clickOnManageUserCloseButton();
    })

    it("inviting new user as Notary and Admin", () =>{

        //Navigate to Users page
        users.clickOnUsers();

        //Inviting user
        users.clickOnInviteUser();
        users.enterUserInfo("Test","user","1","manasa.lingala+8888@qualitlabs.com");
        users.selectNotaryOptionForUser();
        users.clickRoleDropdown();
        users.selectAdminRole();
        users.clickInviteUsers();
        users.verifyMessageText("manasa.lingala+8888@qualitlabs.com has been invited to your Stavvy account via email!")
        
        //Verification
        users.searchUser("manasa");
        users.navigateToManageUserPage("manasa.lingala+8888@qualitlabs.com");
        users.verifyUserRole("Admin");
        users.verifyNotaryCheckBoxIsChecked();
        users.clickOnManageUserCloseButton();
    })

    it("verify deleting user",()=>{
        const userName="Test user 1"

        //Navigate to Users page
        users.clickOnUsers();

        //Deleting user
        users.searchUser(userName);
        users.clickOnUserName(userName);
        users.copyAndPasteEmail()
        users.clickOnDeleteUserButton();

        //Verifying deleted user
        users.verifyMessageText("User has been deleted.");
        users.verifyDeletedUserInTheList(userName);
    })

    it("verify inviting new user with existing user's mail", ()=>{
        
        //Navigating to Users page
        users.clickOnUsers();

        //Inviting new user the existing user's email
        users.clickOnUserNameFromTheList();
        users.copyMailAndPasteInMail();

        //Verifying invited user
        users.verifyErrorText("User already exists, please enter a different email.");
        users.checkInviteUsersDisabled();
        users.clickOnManageUserCloseButton();
    })
    
    

})