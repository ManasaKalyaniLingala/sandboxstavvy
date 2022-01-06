import selectors from "../Selectors/users"

export class Users{

    clickOnUsers()
    {
        cy.get(selectors.usersBttn).click();
    }
  
    clickOnInviteUser()
    {
        cy.get(selectors.inviteUserBttn).click();
    }
    enterUserInfo(firstName,middleName,lastName,email)
    {
        this.enterFirstName(firstName);
        this.enterMiddleName(middleName);
        this.enterLastName(lastName);
        this.enterEmail(email);

    }

    enterFirstName(firstName)
    {
        cy.get(selectors.firstNameTxtbx).type(firstName);
    }

    enterMiddleName(middleName)
    {
        cy.get(selectors.middleNameTxbx).type(middleName);
    }
    enterLastName(lastName)
    {
        cy.get(selectors.lastNameTxbx).type(lastName);
    }

    enterEmail(email)
    {
        cy.get(selectors.emailTxbx).type(email);
    }

    checkNotaryBox()
    {
        cy.get(selectors.notaryCheckbx).click();
    }

    selectAdminRole()
    {
        cy.get(selectors.adminRoleBttn).click();
    }

    clickRoleDropdown()
    {
        cy.get(selectors.roleDropdownBttn).click();
    }

    selectUserRole()
    {
        cy.get(selectors.userRoleBttn).click();
    }

    clickInviteUsers()
    {
        cy.get(selectors.inviteUsersBttn).click();
    }

    clickOnUserNameFromTheList()
    {
        cy.xpath(selectors.userNameBttn).click();
    }

    clickOnDeleteUserButton()
    {
        cy.xpath(selectors.deleteUserBttn).click();
    }
    clickOnManageUserCloseButton()
    {
        cy.get(selectors.manageUserCloseBttn).click();
    }

    checkInviteUsersDisabled()
    {
        cy.get(selectors.inviteUsersBttn).should('be.disabled')
    }

    verifyErrorText(errorText)
    {
        cy.get(selectors.errorText).should('have.text',errorText)
    }

    verifyMessageText(messageText)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text',messageText)
    }



}