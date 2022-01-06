import selectors from "../Selectors/meetings"

export class Meetings {

    clickOnCreateMeeting()
    {
        cy.get(selectors.createMeetingBttn).click();
    }

    clickOnPurchaseType()
    {
        cy.xpath(selectors.purchaseTypeBttn).click();
    }

    clickOnRefinanceType()
    {
        cy.xpath(selectors.refinanceTypeBtnn).click();
    }
 
    clickOnEquityType()
    {
        cy.xpath(selectors.equityTypeBtnn).click();
    }
    clickOnModificationType()
    {
        cy.xpath(selectors.modificationTypeBtnn).click();
    }
    enterFileNumber(fileNumber)
    {
        cy.get(selectors.fileNumberTxBx).type(fileNumber);
    }

    selectPropertyAddress(address,streetName,streetNumber,postalCode)
    {
        this.enterPropertyInformation(address);
        this.enterStreetName(streetName);
        this.enterStreetNumber(streetNumber);
        this.enterPostalCode(postalCode);
    }

    enterPropertyInformation(address)
    {
        cy.get(selectors.propertyAddressTextbx).type(address);
        cy.xpath('//div[text()="'+ address +'"]').click();
    }

    enterStreetNumber(streetNumber){
        cy.get(selectors.streetNumber).type(streetNumber);
    }

    enterStreetName(streetName){
        cy.get(selectors.streetName).type(streetName);
    }

    enterPostalCode(postalCode){
        cy.get(selectors.postalCode).type(postalCode)
    }

    enterMeetingInfo(date,time,timeZone,notary)
    {
        this.selectMeetingDate(date);
        this.selectStartime(time);
        this.selectTimeZone(timeZone);
        this.selectNotary(notary);
    }

    selectMeetingDate(date)
    {
        cy.get(selectors.meetingDate).type(date);
    }

    selectStartime(time)
    {
        cy.xpath(selectors.startTime).click();
        cy.xpath('//li//span[text()="' + time + '"]').click();
    }

    selectTimeZone(timeZone)
    {
        cy.xpath(selectors.timeZone).click();
        cy.xpath('//li//span[text()="' + timeZone+ '"]').click();
    }

    selectNotary(notary)
    {
        cy.get(selectors.notary).click();
        cy.xpath('//span//div[text()="'+ notary +'"]').click();
    }

    enterSignerInfo(firstName,middleName,lastName,phoneNumber,email)
    {
        this.enterFirstName(firstName);
        this.enterMiddleName(middleName);
        this.enterLastName(lastName);
        this.enterPhoneNumber(phoneNumber);
        this.enterEmail(email);
    }

    enterFirstName(firstName)
    {
        cy.get(selectors.fisrtnameTxtbx).type(firstName);
    }
    enterMiddleName(middleName)
    {
        cy.get(selectors.middleNameTxbx).type(middleName);
    }

    enterLastName(lastName)
    {
        cy.get(selectors.lastNameTxtbx).type(lastName);
    }

    enterPhoneNumber(phoneNumber)
    {
        cy.get(selectors.phoneNumberTxtbx).type(phoneNumber);
    }

    enterEmail(email)
    {
        cy.get(selectors.emailTxtbx).type(email);
    }
    
    clickOnCreateClosing()
    {
        cy.get(selectors.createClosingBttn).click();
    }

    clickOnClosingsLink()
    {
        cy.xpath(selectors.closingsBttn).click();
    }
    verifyNavigatedToClosingDetailsPage()
    {
        cy.xpath(selectors.closingDetailsPage).should('have.text',"Closing Detail")
    }
    navigatingToClosingDetailsPage(fileID)
    {
        cy.xpath('//*[text()="'+fileID+'"]').click();
   }
   verifyCreatedMeetingMessage(message)
   {
    cy.get(".react-toast-notifications__toast__content").should('have.text', message)
   }
   verifyFileId(fileId)
   {
       cy.xpath(selectors.fileId).should('have.text',fileId);
   }
}