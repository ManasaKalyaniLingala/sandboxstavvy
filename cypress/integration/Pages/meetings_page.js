import selectors from "../Selectors/meetings"

export class Meetings {

    navigateToMeetingsPage()
    {
        cy.xpath(selectors.meetingsLink).click();
    }
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

    selectPropertyAddress(address,streetNumber,streetName,city,postalCode)
    {
        this.enterPropertyInformation(address);
        this.enterStreetNumber(streetNumber);
        this.enterStreetName(streetName);
        this.enterCity(city);
        this.enterPostalCode(postalCode);   
    }

    enterPropertyInformation(address)
    {
        cy.get(selectors.propertyAddressTextbx).type(address);
        cy.wait(200);
        cy.xpath('//div[@class="stavviz-dropdown relative flex"]/div[2]/ul/li[2]').click();
        cy.wait(5000);
    }

    enterStreetNumber(streetNumber)
    {
        cy.get(selectors.streetNumber).clear().type(streetNumber);
    }

    enterStreetName(streetName)
    {
        cy.get(selectors.streetName).clear().type(streetName);
    }

    enterPostalCode(postalCode){
        cy.get(selectors.postalCode).clear().type(postalCode)
    }

    enterCity(city)
    {
        cy.get(selectors.city).clear().type(city)
    }

    enterMeetingInfo()
    {
        this.selectMeetingDate();
        this.selectStartime();
        this.selectTimeZone();
    }

    selectMeetingDate()
    {
        cy.get(selectors.meetingDate).click();
        this.pickDate();
    }

    selectStartime()
    {
        cy.xpath(selectors.startTime).click();
        cy.xpath('//div/ul/li[4]').click();
    }

    verifyDefaultTimezone(timezone)
    {
        cy.get(selectors.defaultTimeZoneText).should('have.value',timezone)
    }

    selectTimeZone()
    {
        cy.xpath(selectors.timeZone).click();
        cy.xpath('//div/ul/li[4]').click();
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
        cy.xpath(selectors.closingDetailsPage).should('have.text',"Closing Detail");
    }
    copyTheLoanNumber()
    {
        cy.xpath(selectors.firstMeetingLoanNumber).as('loan number');
    }
    navigatingToClosingDetailsPage()
    {
        cy.xpath(selectors.meetingCardInList).should('exist').click();
    }
        
   verifyPopupMessage(message)
   {
    cy.get(".react-toast-notifications__toast__content").should('have.text', message)
   }
   verifyFileIdInMeetingDetailsPage()
   {
       cy.get('@loan number').then((res)=>{
            var fileId=res.text()
            cy.xpath(selectors.fileId).should('have.text',fileId);
       })
   }

   copyTheOrderTypeInDetailsPage()
   {
       cy.xpath('(//button[text()="Accept"])[1]/../../../div[1]/div/text()').as('order type in details page');
   }
    verifyFileId(fileId)
  {
    cy.xpath(selectors.fileId).should('have.text',fileId);
  }
    
   
   navigatingToClosingsPage()
   {
       cy.xpath(selectors.closingsLink).click();
   }
   navigateToScheduledMeetings()
   {
       cy.xpath(selectors.scheduledMeetingsBttn).click();
   }
   navigateToCompletedMeetings()
   {
       cy.xpath(selectors.completedMeetingsBttn).click();
   }
   navigateToCancelledMeetings()
   {
       cy.xpath(selectors.cancelledMeetingsBttn).click();
   }
   verifyNavigatedToScheduledMeetings()
   {
       cy.xpath(selectors.meetingsHeading).should('have.text',"Meetings: Scheduled");
   }
   verifyNavigatedToCompletedMeetings()
   {
       cy.xpath(selectors.meetingsHeading).should('have.text',"Meetings: Completed");
   }
   verifyNavigatedToCancelledMeetings()
   {
       cy.xpath(selectors.meetingsHeading).should('have.text',"Meetings: Cancelled");
   }
   verifyMeetingCardStatus(status)
   {
       cy.xpath(selectors.meetingCardStatus).should('have.text',status)
   }
   selectHost()
   {
    cy.get(selectors.notary).click();
    cy.xpath('//div/ul/li')
    .should('have.length.gt', 3)
    .then(($li) => {
      const items = $li.toArray()
      return Cypress._.sample(items)
    })
    .then(($li) => {
      expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
      cy.log(`you picked "${$li.text()}"`).click();
    })
   }
   

   filterTheMeetingsBy(notary)
   {
       cy.get(selectors.filterByNotaryDropdown).click();
       cy.xpath('//li[@title="'+notary+'"]').click();
       cy.get(selectors.filterByNotaryDropdown).click();
   }
   clickAddDocumentButton()
   {
       cy.xpath(selectors.addDocumentBttn).click();
   }
   addAttendeeButton()
   {
       cy.xpath(selectors.addAttendeeBttn).click();
   }
   attachDocument(document)
   {
       cy.get(selectors.uploadDocumentField).attachFile(document);
   }
   clickUploadButton()
   {
       cy.xpath(selectors.uploadButton).should('exist').realClick();
   }
   uploadDocument(document)
   {
       this.clickAddDocumentButton();
       this.attachDocument(document);
       this.clickUploadButton();
   }
   verifyAddedDocumentName(documentName)
   {
       cy.xpath(selectors.documentName).should('have.text',documentName);
   }
   clickAddAttendeeButton()
   {
       cy.xpath(selectors.addAttendeeBttn).click();
   }
   clickAddAttendeeButtonInTheMeetingInfoPage()
   {
       cy.xpath(selectors.addAttendeeBttnInMeetingInfoPage).click();
   }
   verifyAddedSigner(attendeeEmail)
   {
       cy.xpath(selectors.addedAttendeeEmail).should('have.text',attendeeEmail)
   }

   verifyTransactionType(transaction)
   {
       cy.xpath(selectors.transactionType).should('have.text',transaction);
   }

   pickDate()
   {
       cy.xpath('//tbody/tr[last()]/td[last()]').click();
   }

   verifyAddressInMeetingDetailsPage(address)
   {
       cy.xpath(selectors.addressTextInMeetingDetailsPage).should('contain.text',address);
   }
  
clickMeeting(fileId)
{
    cy.contains(fileId).click();
}
}
