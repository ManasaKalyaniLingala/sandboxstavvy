import Selectors from "../Selectors/header";

export class Header{

    clickProfileButton()
    {
        cy.get(Selectors.profileBttn).should('exist').click();
    }

    hoverOverHelpButton()
    {
        cy.get(Selectors.helpBttn).trigger('mouseover')
    }

    verifyHelpButtonText()
    {
        cy.xpath(Selectors.helpBttnTxt).should('exist');
    }

    clickNotificationsButton()
    {
        cy.get(Selectors.notificationsBttn).should('exist').click();
    }

    clickSettingsButton()
    {
        cy.xpath(Selectors.settingsBttn).should('exist').click();
    }

    clickSignOutButton()
    {
        cy.xpath(Selectors.signOutBttn).should('exist').click();
    }

    verifyHeaderView()
    {
       cy.get(Selectors.profileBttn).should('exist');
       cy.get(Selectors.notificationsBttn).should('exist');
       cy.get(Selectors.helpBttn).should('exist');
    }

    verifyProfileDropdownList()
    {
        cy.xpath(Selectors.loggedInText).should('exist');
        cy.xpath(Selectors.settingsBttn).should('exist');
        cy.xpath(Selectors.signOutBttn).should('exist');
    }

    verifyNoticationsDropDown()
    {
        cy.get(Selectors.notificationElement).should('exist');
        cy.get(Selectors.notificationsDropdown).should('exist');
        cy.get(Selectors.notificationsRefresh).should('exist');
        cy.xpath(Selectors.notificationsTitle).should('exist');
        cy.xpath(Selectors.markAllAsRead).should('exist');
    }

    clickNoticationsRefreshButton()
    {
        cy.xpath(Selectors.notificationsRefresh).should('exist').click();
    }

    clickMarkAllAsReady()
    {
        cy.xpath(Selectors.markAllAsRead).should('exist').click();
    }

    verifyNavigatedToSettingsPage()
    {
        cy.url().should('include', '/settings/profile');
    }
}