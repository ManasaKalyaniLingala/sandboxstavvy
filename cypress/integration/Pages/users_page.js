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
        cy.xpath(selectors.notaryCheckbx).click();
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
        cy.wait(3000);
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
        cy.get(".react-toast-notifications__toast__content").should('contain.text',messageText)
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
     cy.get(selectors.searchUser).clear().type(userName);
     cy.wait(3000);
    }
    verifyUserRole(role)
    {
        cy.xpath('//input[@placeholder="Select role"]').should('have.value',role);
    }
    verifyDeletedUserMail(txt)
    {
        cy.xpath('//div[4]/div/div/div/div/div/input').should('not.have.text',txt);
    }
    verifyNotaryCheckBoxIsSelected()
    {
        cy.get(selectors.notaryCheckBox).should('be.checked');
    }

    verifyNotaryCheckBoxIsDeselected()
    {
        cy.get(selectors.notaryCheckBox).should('not.be.checked');
    }


    copyAndPasteEmail()
    {
        cy.xpath('(//h3//text())[1]').then(($temp)=>{
            const txt = $temp.text()
            cy.get('[name="delete-user"]').type(`${txt}`)})
    }
    clickOnUserName(userName)
    {
        cy.xpath('//div[text()="'+userName+'"]').should('exist').click();
    }
    verifyDeletedUserInTheList(userName)
    {
        cy.xpath('//div[text()="'+userName+'"]').should('not.exist');
    }
    copyMailAndPasteInMail()
    {
        cy.xpath('(//h3//text())[1]').then(($temp)=>{
            const txt = $temp.text()
    this.clickOnManageUserCloseButton();
    this.clickOnInviteUser();
    this.enterEmail(`${txt}`)});
    }

   saveUserAndVerifyUserRole(role)
    {
        cy.xpath('(//h3//text())[1]').then(($temp)=>{
            var mail = $temp.text();

            this.clickSaveUserButton();
            this.verifyMessageText("User has been updated!");
            this.verifyUserRoleInTheList(mail,role);
            this.navigateToManageUserPage(mail);
            this.verifyUserRole(role);
        })
    }
    navigateToManageUserPage(mail)
    {
        cy.xpath('//tr/td/div/div[2]/div[2][text()="'+mail+'"]').should('exist').click();
    }

    clickOnUserByRole(role)
    {
        cy.xpath('(//td/p[text()="'+role+'"])[1]').should('exist').click();
    }

    clickOnUser()
    {
        cy.xpath(selectors.userRole).should('exist').click();
    }

    clickSetUserRoleDropdown()
    {
        cy.get(selectors.selectRoleDropDown).should('exist').click();
    }

    clickSaveUserButton()
    {
        cy.xpath(selectors.saveUserBttn).should('exist').click();
    }

    verifyUserRoleInTheList(email,role)
    {
        cy.xpath('//tr/td/div/div[2]/div[2][text()="'+email+'"]/../../../following-sibling::td/p').should('have.text',role)
    }

    clickOnAnyUserFromTheList()
    {
        cy.xpath(selectors.user).should('exist').click();
    }

    


}