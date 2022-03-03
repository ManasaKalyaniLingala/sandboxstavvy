
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
        cy.xpath(Selectors.firstNameEditBttn).click({force:true});
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
        cy.xpath(Selectors.middleNameEditBttn).click({force:true});
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

    clickTimzoneDropdown()
    {
        cy.get(Selectors.timeZoneDropDown).should('exist').click();
    }
    verifyUpdatedTimezone(timezone)
    {
        cy.get(Selectors.timeZoneDropDown).should('have.value',timezone)
    }
    selectTimeZoneFromTheList(timezone)
    {
        cy.xpath('//li//span[text()="' + timezone+ '"]').click();
    }

    updateTimeZone(timezone)
    {
        this.clickTimzoneDropdown();
        this.selectTimeZoneFromTheList(timezone);
    }

    navigateToOrganizationTab()
    {
        cy.wait(2000);
        cy.get(Selectors.orgnizationTab).should('exist').click();
    }

    selectTheEnableFilesCheckBox()
    {
        cy.xpath(Selectors.enableFilesCheckBx).click()
    }

    verifyTextOfFilesCheckBox(text)
    {
        cy.xpath(Selectors.filesCheckBoxText).should('have.text',text);
    }

    clickSaveSettingsButton()
    {
        cy.xpath(Selectors.saveSettingsBttn).click();
    }

    disableFiles()
    {
      this.selectTheEnableFilesCheckBox();
      this.verifyTextOfFilesCheckBox("Disabled");
      this.clickSaveSettingsButton();
    }

    enableFiles()
    {
        this.selectTheEnableFilesCheckBox();
        this.verifyTextOfFilesCheckBox("Enabled");
        this.clickSaveSettingsButton();
    }

    verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }

    verifyDisabledTransactionNotInTheList(transaction)
    {
      cy.xpath('//nav/div[text()="Transactions"]/../ul/li/a[text()="'+transaction+'"]').should('not.exist');
    }

    verifyEnabledTransactionInTheList(transaction)
    {
      cy.xpath('//nav/div[text()="Transactions"]/../ul/li/a[text()="'+transaction+'"]').should('exist');
    }

    selectAcknowledgeCheckBox()
    {
        cy.xpath(Selectors.acknowledgementCheckBox).click();
    }

    verifyTextOfAcknowledgeCheckBox(text)
    {
      cy.xpath(Selectors.acknowledgementCheckBoxText).should('have.text',text)
    }

    disableAcknowldementMeetings()
    {
        this.selectAcknowledgeCheckBox();
        this.verifyTextOfAcknowledgeCheckBox("Disabled");
        this.clickSaveSettingsButton();
    }

    enableAcknowledgementMeetings()
    {
        this.selectAcknowledgeCheckBox();
        this.verifyTextOfAcknowledgeCheckBox("Enabled");
        this.clickSaveSettingsButton();
    }

    verifyAcknowledgementTransactionListLength(length)
    {
        cy.xpath(Selectors.acknowledgementTransactionsList).should('have.length',length);
    }

    verifyQualityControlTransactionInTheList(QcTransaction)
    {
        cy.xpath(Selectors.acknowledgementTransactionsList).should('contain.text',QcTransaction);
    }

    verifyQualityControlTransactionNotInTheList(QcTransaction)
    {
        cy.xpath('//nav/div[text()="Transactions"]/../ul/li[3]/ul/li/a[text()="'+QcTransaction+'"]').should('not.exist');
    }

    selectQualityControlCheckBox()
    {
        cy.xpath(Selectors.qualityControlCheckBox).should('exist').click();
    }

    verifyQualityControlCheckBoxText(text)
    {
        cy.xpath(Selectors.qualityControlCheckBoxText).should('have.text',text);
    }

    disableQualityControl()
    {
        this.selectQualityControlCheckBox();
        this.verifyQualityControlCheckBoxText("Disabled");
        this.clickSaveSettingsButton();
    }

    enableQualityControl()
    {
        this.selectQualityControlCheckBox();
        this.verifyQualityControlCheckBoxText("Enabled");
        this.clickSaveSettingsButton();
    }

    navigateToAcknowledgementPage()
    {
        cy.get(Selectors.acknowledgementLinkInSideBar).should('exist').click();
    }

    }
