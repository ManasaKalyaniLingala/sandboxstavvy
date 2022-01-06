/// <reference types="cypress" />

import { Login } from "../Pages/loginPage";
import { Users } from "../Pages/usersPage";

const login = new Login();
const users = new Users();

describe("stavvy application" , ()=>{

    before("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     });

     it.only("inviting new user", () =>{
         users.clickOnUsers();
         users.clickOnInviteUser();
         users.enterUserInfo("manasa","kalyani","lingala","manasa.lingala+7778@qualitlabs.com");
         users.clickInviteUsers();
         users.verifyMessageText("manasa.lingala+7778@qualitlabs.com has been invited to your Stavvy account via email!")
     })

     it("inviting new user as notary", () =>{
        users.clickOnUsers();
        users.clickOnInviteUser();
        users.enterUserInfo("manasa","kalyani","lingala","manasa.lingala+8788@qualitlabs.com");
        users.checkNotaryBox();
        users.clickInviteUsers();
        users.verifyMessageText("manasa.lingala+8788@qualitlabs.com has been invited to your Stavvy account via email!")
    })

    it("inviting new user as Admin", () =>{
        users.clickOnUsers();
        users.clickOnInviteUser();
        users.enterUserInfo("manasa","kalyani","lingala","manasa.lingala+8788@qualitlabs.com");
        users.clickRoleDropdown();
        users.selectAdminRole();
        users.clickInviteUsers();
        users.verifyMessageText("manasa.lingala+8788@qualitlabs.com has been invited to your Stavvy account via email!")
    })

    it("inviting new user as Notary and Admin", () =>{
        users.clickOnUsers();
        users.clickOnInviteUser();
        users.enterUserInfo("manasa","kalyani","lingala","manasa.lingala+8788@qualitlabs.com");
        users.checkNotaryBox();
        users.clickRoleDropdown();
        users.selectAdminRole();
        users.clickInviteUsers();
        users.verifyMessageText("manasa.lingala+8788@qualitlabs.com has been invited to your Stavvy account via email!")
    })

    it("verify deleting user",()=>{

        users.clickOnUsers();
        users.clickOnUserNameFromTheList();
        cy.xpath('(//h3//text())[1]').then(($temp)=>{
            const txt = $temp.text()
            cy.get('[name="delete-user"]').type(`${txt}`+'{enter}')})
         users.clickOnDeleteUserButton();
         users.verifyMessageText("User has been deleted.")
        })

it("verify inviting new user with existing user's mail", ()=>{
    users.clickOnUsers();
    users.clickOnUserNameFromTheList();
    cy.xpath('(//h3//text())[1]').then(($temp)=>{
            const txt = $temp.text()
    users.clickOnManageUserCloseButton();
    users.clickOnInviteUser();
    users.enterFirstName("manasa");
    users.enterMiddleName("kalyani");
    users.enterLastName("lingala");
    cy.get("[name='email']").type(`${txt}`+'{enter}')})
    users.verifyErrorText("User already exists, please enter a different email.");
    users.checkInviteUsersDisabled();

})


})