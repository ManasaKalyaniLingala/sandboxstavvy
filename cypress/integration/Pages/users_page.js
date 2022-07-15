import selectors from "../Selectors/users";
import faker from "@faker-js/faker";

     var userEmail = "testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
     var userFirstName=faker.name.firstName();
     var userMiddleName=faker.name.middleName();
     var userLastName=faker.name.lastName();
     var userName=userFirstName+" "+userMiddleName+" "+userLastName;
     var phoneNumber=faker.phone.phoneNumber();
     var NMLSlicesnceNumber=Math.floor(Math.random()*1000000);

export class Users{

    clickOnUsers()
    {
        cy.get(selectors.usersBttn).click();
    }
  
    clickOnInviteUser()
    {
        cy.get(selectors.inviteUserBttn).click();
    }
    
    enterUserInfo(email=userEmail,firstName=userFirstName,middleName=userMiddleName,lastName=userLastName)
    {
        this.enterFirstName(firstName);
        this.enterMiddleName(middleName);
        this.enterLastName(lastName);
        this.enterEmail(email);
    }

    enterFirstName(firstName=userFirstName)
    {
        cy.get(selectors.firstNameTxtbx).type(firstName);
    }

    enterMiddleName(middleName=userMiddleName)
    {
        cy.get(selectors.middleNameTxbx).type(middleName);
    }
    enterLastName(lastName=userLastName)
    {
        cy.get(selectors.lastNameTxbx).type(lastName);
    }

    enterEmail(email=userEmail)
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
        cy.wait(2000);
    }

    clickOnDeleteUserButton()
    {
        cy.xpath(selectors.deleteUserBttn).should('exist').click();
    }
    clickOnManageUserCloseButton()
    {
        cy.get(selectors.manageUserCloseBttn).should('exist').click();
    }

    verifyInviteUsersDisabled()
    {
        cy.get(selectors.inviteUsersBttn).should('be.disabled')
    }

    verifyErrorText(errorText)
    {
        cy.xpath(selectors.errorText).should('have.text',errorText)
    }

    verifyMessageText(messageText)
    {
        cy.get(".react-toast-notifications__toast__content").should('contain.text',messageText)
        cy.wait(5000);
    } 

    verifyInvitationMessageText(email=userEmail)  
    {
        cy.get(".react-toast-notifications__toast__content").should('contain.text',email+" has been invited to your Stavvy account via email!")
        cy.wait(5000);
    } 

    clickOnPageNumber(pageNumber)
    {
        cy.xpath('//div[2]/span[text()="'+pageNumber+'"]').click();
    }
    clickOnUserMail(mail=userEmail)
    {
        cy.xpath('//*[text()="'+mail+'"]').click();
    }
    searchUser(user=userName)
    {
     cy.wait(4000)
     cy.get(selectors.searchUser).clear().type(user);
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

    enterEmailInDeleteUserTextBox(email=userEmail)
    {
        cy.get(selectors.deleteUserTxBx).type(email);
    }
    clickOnUserName(userName=userName)
    {
        cy.xpath('//div[text()="'+userName+'"]').should('exist').click();
    }
    verifyDeletedUserInTheList(userName=userName)
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
            var email = $temp.text();

            this.clickSaveUserButton();
            this.verifyMessageText("User has been updated!");
            this.verifyUserRoleInTheList(role,email);
            this.navigateToManageUserPage(email);
            this.verifyUserRole(role);
        })
    }
    navigateToManageUserPage(mail=userEmail)
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

    verifyUserRoleInTheList(role,email=userEmail)
    {

        cy.xpath('//tr/td/div/div[2]/div[2][text()="'+email+'"]/../../../following-sibling::td/p').should('have.text',role);
    }

    clickOnAnyUserFromTheList()
    {
        cy.xpath(selectors.user).should('exist').click();
    }

    clickCreateLoanOfficer()
    {
        cy.xpath(selectors.createLoanOfficerBttn).should('exist').click();
    }

    enterLoanOfficerName(name=userName)
    {
        cy.get(selectors.loanOfficerName).should('exist').type(name)
    }

    enterLoanOfficerEmail(email=userEmail)
    {
        cy.get(selectors.laonOfficerEmail).should('exist').type(email)
    }
    
    enterLoanOfficerNMLSlicenseNumber(licenseNumber=NMLSlicesnceNumber)
    {
        cy.get(selectors.NMLSlicesnceNumber).should('exist').type(licenseNumber);
    }

    enterLoanOfficerPhone(Phone=phoneNumber)
    {
        cy.get(selectors.loanOfficerPhone).should('exist').type(Phone);
    }

    clickTheSubmitButton()
    {
        cy.xpath(selectors.submitBttn).should('exist').click();
    }

    enterLoanOfficerDetails(email=userEmail,name=userName,phone=phoneNumber,licenseNumber=NMLSlicesnceNumber)
    {
         this.enterLoanOfficerName(name);
         this.enterLoanOfficerEmail(email);
         this.enterLoanOfficerPhone(phone);
         this.enterLoanOfficerNMLSlicenseNumber(licenseNumber);
    }

    verifySubmitButtonIsDisabled()
    {
        cy.xpath(selectors.submitBttn).should('be.disabled');
    }

    verifyLoanOfficerIntheList(laonOfficerEmail=userEmail)
    {
        cy.xpath('//li/span/text()').should('contain.text',laonOfficerEmail);
    }

    editFirstName(firstName=userFirstName)
    {
        cy.get(selectors.firstNameTxtbx).clear().type(firstName);
    }

    editMiddleName(middleName=userMiddleName)
    {
        cy.get(selectors.middleNameTxbx).clear().type(middleName);
    }

    editLastName(lastName=userLastName)
    {
        cy.get(selectors.lastNameTxbx).clear().type(lastName);
    }

    editTheUserNameDetails(firstName=userFirstName,middleName=userMiddleName,lastName=userLastName)
    {
        this.editFirstName(firstName);
        this.editMiddleName(middleName);
        this.editLastName(lastName);
    }

    verifyUserNameInTheList(user=userName)
    {
        cy.xpath(selectors.userNameInTheList).should('contain.text',user)
    }

    verifyUserEmailInTheList(email=userEmail)
    {
        cy.xpath(selectors.userEmailInTheList).should('contain.text',email)
    }

    verifyEditedUserNameDetails(firstName=userFirstName,middleName=userMiddleName,lastName=userLastName)
    {
        cy.get(selectors.firstNameTxtbx).should('have.value',firstName);
        cy.get(selectors.middleNameTxbx).should('have.value',middleName);
        cy.get(selectors.lastNameTxbx).should('have.value',lastName);
    }

    verifyTheSearchedText(text)
    {
        cy.xpath(selectors.searchedText).should('contain.text',text)
    }

}