

import Selectors from '../Selectors/settings';
export class Settings{

    clickOnProfileIcon()
    {
       cy.xpath(Selectors.profileIcon).click();
    }

    navigateToSettingsPage()
    {
      cy.xpath(Selectors.settingsBttn).click();
      cy.wait(3000);
    }

    updateFirstName(name)
    {
        cy.xpath(Selectors.firstName).realHover();
        cy.xpath(Selectors.firstNameEditBttn).click();
        cy.get(Selectors.inputTextBx).clear().type(name);
        cy.get(Selectors.saveIconBttn).click();
    }

    verifyUpdatedFirstName(firstName)
    {
        cy.xpath(Selectors.firstName).should('have.text',firstName);
    }

    updateMiddleName(name)
    {
        cy.xpath(Selectors.middleName).realHover();
        cy.xpath(Selectors.middleNameEditBttn).click();
        cy.get(Selectors.inputTextBx).clear().type(name);
        cy.get(Selectors.saveIconBttn).click();
    }

    verifyUpdatedMiddleName(middleName)
    {
        cy.xpath(Selectors.middleName).should('have.text',middleName);
    }

    updateLastName(name)
    {
        cy.xpath(Selectors.lastName).realHover();
        cy.xpath(Selectors.lastNameEditBttn).click();
        cy.get(Selectors.inputTextBx).clear().type(name);
        cy.get(Selectors.saveIconBttn).click();
    }

    verifyUpdatedLastName(lastName)
    {
        cy.xpath(Selectors.lastName).should('have.text',lastName);
    }

    updateOrganizationName(name)
    {
        cy.xpath(Selectors.organization).realHover();
        cy.xpath(Selectors.organizationEditBttn).click();
        cy.get(Selectors.inputTextBx).clear().type(name);
        cy.get(Selectors.saveIconBttn).click();
    }

    verifyUpdatedOrganizationName(organization)
    {
        cy.xpath(Selectors.organization).should('have.text',organization);
    }

    verifyUpdatedNameInProfile(name)
    {
       cy.xpath(Selectors.profileIcon).should('contain',name);
    }

    }
