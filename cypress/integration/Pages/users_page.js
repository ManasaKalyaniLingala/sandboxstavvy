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

    selectNotaryOptionForUser()
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
        cy.wait(5000);
    } 

    clickOnPageNumber(pageNumber)
    {
        cy.xpath('//div[2]/span[text()="'+pageNumber+'"]').click();
    }
    clickOnUserMail(mail)
    {
        cy.xpath('//*[text()="'+mail+'"]').click();
    }
    searchUser(userName)
    {
     cy.get(selectors.searchUser).type(userName);
    }
    verifyUserRole(role)
    {
        cy.xpath('//input[@placeholder="Select role"]').should('have.value',role);
    }
    verifyDeletedUserMail(txt)
    {
        cy.xpath('//div[4]/div/div/div/div/div/input').should('not.have.text',txt);
    }
    verifyNotaryCheckBoxIsChecked()
    {
        cy.get(selectors.notaryCheckBox).should('be.checked')
    }
    copyAndPasteEmail()
    {
        cy.xpath('(//h3//text())[1]').then(($temp)=>{
            const txt = $temp.text()
            cy.get('[name="delete-user"]').type(`${txt}`)})
    }
    clickOnUserName(userName)
    {
        cy.xpath('//div[text()="'+userName+'"]').click();
    }
    verifyDeletedUserInTheList(userName)
    {
        cy.xpath('//div/text()').should('not.have.text',userName);
    }
    copyMailAndPasteInMail()
    {
        cy.xpath('(//h3//text())[1]').then(($temp)=>{
            const txt = $temp.text()
    this.clickOnManageUserCloseButton();
    this.clickOnInviteUser();
    this.enterEmail(`${txt}`)});
    }
    navigateToManageUserPage(mailId)
    {
        cy.contains(mailId).click();
    }



}