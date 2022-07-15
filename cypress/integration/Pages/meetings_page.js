import selectors from "../Selectors/meetings"
const { faker } = require('@faker-js/faker')

     var fileId = "file"+Math.floor(Math.random()*1000);
     var propertyAddress=1+Math.floor(Math.random())*100;
     var streetName=faker.address.streetName();
     var streetNumber=propertyAddress;
     var city=faker.address.cityName();
     var postalCode=faker.address.zipCode();
     var signerFirstName=faker.name.firstName();
     var signerMiddleName=faker.name.middleName();
     var signerLastName=faker.name.lastName();
     var signerPhone=faker.phone.phoneNumber();
     var address=streetNumber+" "+streetName+", "+city;
     var signerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
     var signerName=signerFirstName+" "+signerMiddleName+" "+signerLastName;
     var notaryFirstName=faker.name.firstName();
     var notaryMiddleName=faker.name.middleName();
     var notaryLastName=faker.name.lastName();
     var notaryEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
     var externalNotaryName=notaryFirstName+" "+notaryMiddleName+" "+notaryLastName;

export class Meetings {

    getRandomInt(min, max){      
        return Math.floor(Math.random() * (max - min + 1)) + min;    
      } 
    navigateToMeetingsPage()
    {
        cy.xpath(selectors.meetingsLink).click();
    }

    clickOnCreateMeeting()
    {
        cy.get(selectors.createMeetingBttn).click();
    }

    clickTheClosingMeetingButton()
    {
        cy.xpath(selectors.closingMeetingBttn).should('exist').click();
        cy.get(selectors.createNewRONBtnn).click();
    }

    clickTheSigningMeetingButton()
    {
        cy.xpath(selectors.signingMeetingBttn).should('exist').click();
    }

    clickTheMeetingTypeDropdown()
    {
        cy.xpath('//label').then((res)=>{
            if(res.text().includes('Meeting Type'))
            {
                cy.get(selectors.meetingType).should('exist').click();
            }
        
        })
    }

    selectMeetingType(meetingType)
    {
        this.clickTheMeetingTypeDropdown();
        cy.xpath('//span[text()="'+meetingType+'"]').click();
    }

    clickOnRefinanceType()
    {
        this.clickTheMeetingTypeDropdown();
        cy.xpath(selectors.refinanceTypeBtnn).click();
    }

    enterFileId(meetingId=fileId)
    {
        cy.get(selectors.fileNumberTxBx).type(meetingId);
    }

    clickTheNextBttn()
    {
        cy.xpath('//button').then((res)=>{
         
        if(res.text().includes('Next'))
        {
            cy.xpath(selectors.nextBttn).should('exist').click();
            cy.wait(4000)
        }
        })
    }

    selectPropertyAddress()
    {
        this.enterPropertyInformation(propertyAddress);
        this.enterStreetNumber(streetNumber);
        this.enterStreetName(streetName);
        this.enterCity(city);
        this.enterPostalCode(postalCode);   
    }

    enterPropertyInformation(propertyAddress)
    {
        cy.get(selectors.propertyAddressTextbx).type(propertyAddress);
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

    enterSignerInfo(firstName=signerFirstName,middleName=signerMiddleName,lastName=signerLastName,phone=signerPhone,email=signerEmail)
    {
        this.enterFirstName(firstName);
        this.enterMiddleName(middleName);
        this.enterLastName(lastName);
        this.enterPhoneNumber(phone);
        this.enterEmail(email);
    }

    addAttendeeToTheMeeting(firstName=signerFirstName,middleName=signerMiddleName,lastName=signerLastName,email=signerEmail,phoneNumber=signerPhone)
    {
        cy.xpath(selectors.firstNameInAddAttendee).should('exist').type(firstName);
        cy.xpath(selectors.middleNameInAddAttendee).should('exist').type(middleName);
        cy.xpath(selectors.lastNameInAddAttendee).should('exist').type(lastName);
        cy.xpath(selectors.emailInAddAttendee).should('exist').type(email);
        this.enterPhoneNumber(phoneNumber);
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
        cy.xpath(selectors.phoneNumberTxtbx).type(phoneNumber);
    }

    enterEmail(email)
    {
        cy.get(selectors.emailTxtbx).clear().type(email);
    }
    
    clickOnCreateClosing()
    {
        cy.xpath(selectors.createClosingBttn).should('exist').click();
    }

    clickOnClosingsLink()
    {
        cy.xpath(selectors.closingsBttn).click();
    }
    verifyNavigatedToClosingDetailsPage()
    {
        cy.xpath(selectors.closingDetailsPage).should('have.text',"Closing Detail");
    }

    verifyNavigatedToMeetingDetailsPage()
    {
        cy.xpath(selectors.closingDetailsPage).should('have.text',"Meeting Detail");    
        cy.wait(4000);
        cy.reload();
    }
    copyTheLoanNumber()
    {
        cy.xpath(selectors.firstMeetingLoanNumber).as('loan number');
    }

    verifyNextButtonIsDisabled()
    {
        cy.xpath(selectors.nextBttn).should('be.disabled')
    }

    navigatingToClosingDetailsPage()
    {
        cy.wait(3000)
        cy.xpath(selectors.meetingCardInList).should('exist').click();
    }
        
   verifyPopupMessage(message)
   {
    cy.get(".react-toast-notifications__toast__content").should('contain.text', message)
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
    verifyFileId(loanNumber=fileId)
   {
    cy.xpath(selectors.fileId).should('have.text',loanNumber);
   }
   navigatingToClosingsPage()
   {
       cy.xpath(selectors.closingsLink).click();
   }
   navigateToUpcomingMeetingsTab()
   {
       cy.xpath(selectors.scheduledMeetingsBttn).click();
   }
   navigateToPastMeetingsTab()
   {
       cy.xpath(selectors.completedMeetingsBttn).click();
       cy.wait(6000)
   }
   navigateToCancelledMeetingsTab()
   {
       cy.xpath(selectors.cancelledMeetingsBttn).click();
   }
   verifyNavigatedToMeetingsTab(meetingType)
   {
      if(meetingType=="upcoming")
      {
        cy.xpath('//div[@data-testid="StavvizCard"]//div[contains(@class,"text-brand-secondary bg-brand-secondary-light")]').should('exist');
        cy.xpath('//div[@data-testid="upcoming"]').should('contain.text',"Upcoming");
      }
     else if(meetingType=="completed")
     {
        cy.xpath('//div[@data-testid="StavvizCard"]//div[contains(@class,"text-success-dark bg-success-light grid")]').should('exist');
        cy.xpath('//div[@data-testid="completed"]').should('contain.text',"Past");
     }

     else if(meetingType=="cancelled")
     {
      cy.xpath('//div[@data-testid="StavvizCard"]//div[contains(@class,"text-grey-dark bg-grey")]').should('exist');
      cy.xpath('//div[@data-testid="cancelled"]').should('contain.text',"Cancelled");
     }
      cy.xpath('//div[@data-testid="'+meetingType+'"][contains(@class,"stavviz-tab-is-active font-bold text-black")]').should('exist')
   }

   verifyMeetingCardStatus(status)
   {
       cy.xpath(selectors.meetingCardStatus).should('have.text',status)
   }
   selectHost()
   {
    cy.get(selectors.notary).click();
    cy.xpath('//div/ul/li/span')
    .then(listing => {        
      const randomNumber = this.getRandomInt(2, listing.length-1);
      cy.log(randomNumber);
       cy.xpath('(//div/ul/li['+randomNumber+']/span)').click({ force: true });     
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
       cy.xpath(selectors.uploadButton).should('exist').click();
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
       cy.wait(2000);
   }
   verifyAddedAttendee(role,attendeeEmail=signerEmail,attendeeName=signerName)
   {
       cy.xpath('//tbody/tr/td[3][text()="'+attendeeEmail+'"]/../td[2]/text()').should('contain.text',role)
       cy.xpath(selectors.addedAttendeeEmail).should('contain.text',attendeeEmail);
       cy.xpath(selectors.addedAttendeeName).should('contain.text',attendeeName);
   }
   verifyEditedSigner(attendeeEmail1,attendeeEmail2=signerEmail)
   {
       cy.xpath(selectors.addedAttendeeEmail).should('contain.text',attendeeEmail1)
       cy.xpath(selectors.addedAttendeeEmail).should('not.have.text',attendeeEmail2)
   }

   verifyTransactionType(transaction)
   {
       cy.xpath(selectors.transactionType).should('have.text',transaction);
   }

   pickDate()
   {
       cy.xpath('//tbody/tr[last()]/td[last()]').click();
   }

   verifyAddressInMeetingDetailsPage(meetingAddress=address)
   {
       cy.xpath(selectors.addressTextInMeetingDetailsPage).should('contain.text',meetingAddress);
   }
  
clickMeeting(fileId)
{
    cy.contains(fileId).click();
}

selectObserverAttendeeType()
{
    cy.get(selectors.selectAttendeeTypeDropdown).should('exist').click();
    cy.get(selectors.observerAttendeeType).should('exist').click();
}

verifyAttendeeType(attendeeType,email=signerEmail,)
{
    cy.xpath('//tr/td[text()="'+email+'"]/../td[2]').should('contain.text',attendeeType)
}

createRonClosingMeeting(meetingType)
{
    //creating meeting
    this.clickOnCreateMeeting();
    this.clickTheClosingMeetingButton();
    this.selectMeetingType(meetingType);
    this.enterFileId();
    this.selectPropertyAddress();
    this.enterMeetingInfo();
    this.clickTheNextBttn();
    this.selectHost();
    this.enterSignerInfo(); 
    this.clickOnCreateClosing();
    cy.wait(5000);
}

verifyCreatedMeeting(transactionType,role)
{
    this.verifyNavigatedToClosingDetailsPage();
    this.verifyFileId();
    this.verifyAddressInMeetingDetailsPage();
    this.verifyTransactionType(transactionType);
    this.verifyAddedAttendee(role);
}

createASigningMeeting()
{
     this.clickOnCreateMeeting();
     this.clickTheSigningMeetingButton();
     this.enterFileId();
     this.enterMeetingInfo();
     this.selectHost();
     this.addAttendeeToTheMeeting(); 
     this.clickOnCreateClosing();
}

verifyCreatedSigningMeeting(role)
{
    this.verifyNavigatedToMeetingDetailsPage();
  //  this.verifyMeetingNameInSignigngMeetingDetailsPage();
    this.verifyAddedAttendee(role);
}

verifyAddedExternalNotary(role)
{
    this.verifyAddedAttendee(role,notaryEmail,externalNotaryName)
}

clickEditButtonOfSigner(email=signerEmail)
{
    cy.xpath('//tr/td[text()="'+email+'"]/following-sibling::td/div/div/div').should('exist').click();
}

clickOnEdit()
{
    cy.xpath(selectors.editBttn).should('exist').click();
}

editFirstName(firstName)
{
    cy.get(selectors.firstNameInEditSigner).should('exist').clear().type(firstName)
}

editMiddleName(middleName)
{
    cy.get(selectors.middleNameInEditSigner).should('exist').clear().type(middleName)
}

editLasttName(lastName)
{
    cy.get(selectors.lastNameInEditSigner).should('exist').clear().type(lastName)
}

editEmail(email)
{
    cy.get(selectors.emailInEditSigner).should('exist').clear().type(email)
}

editSignerDetails(firstName=signerFirstName,middleName=signerMiddleName,lastName=signerLastName,email=signerEmail)
{
   this.editFirstName(firstName);
   this.editMiddleName(middleName);
   this.editLasttName(lastName);
   this.editEmail(email);
}

clickTheSaveButton()
{
    cy.xpath(selectors.saveButton).should('exist').click();
}

verifyAddedAttendeeName(signerName1)
{
    cy.xpath(selectors.addedAttendeeName).should('contain.text',signerName1);
}

verifyEditedAttendeeName(signerName1,signerName2=signerName)
{
    cy.xpath(selectors.addedAttendeeName).should('contain.text',signerName1);
    cy.xpath(selectors.addedAttendeeName).should('not.have.text',signerName2);
}

clickTheResendInviteButton()
{
    cy.xpath(selectors.resendInviteBttn).should('exist').click();
}

clickTheMoreActionsDropdown()
{
    cy.xpath(selectors.moreActionsBttn).should('exist').click();
}

clicktheCancelButton()
{
    cy.xpath(selectors.cancelBttn).should('exist').click();
}

verifyMeetingCardStatusInMeetingDetailsPage(status)
{
    cy.xpath(selectors.meetingCardStatusInMeetingDetailsPage).should('have.text',status);
}

verifyJoinButtonIsRemoved()
{
    cy.get(selectors.joinButton).should('not.exist');
}

verifyJoinButtonExists()
{
    cy.get(selectors.joinButton).should('exist');
}

verifyCreateClosingButtonIsDisabled()
{
    cy.xpath(selectors.createClosingBttn).should('be.disabled')
}

verifyMeetingNameInSignigngMeetingDetailsPage(meetingName=fileId)
{
    cy.xpath(selectors.addressTextInMeetingDetailsPage).should('contain.text',meetingName)
}

verifyErrorText(errorText)
{
    cy.xpath(selectors.errorText).should('contain.text',errorText)
}

verifyEmailErrorText(errorText,email=signerEmail)
{
    cy.log(email);
    cy.xpath(selectors.errorText).should('contain.text',email+" "+errorText);
}

clickTheAddObserverButton()
{
    cy.xpath(selectors.addObserverBttn).should('exist').click();
}

clickPrepareForEsigningLink()
{
    cy.xpath(selectors.prepareForEsigningLink).should('exist').click();
}

addAnnotation()
{
    cy.xpath("//*[text()='Full Name']").drag('[class="react-pdf__Page"]');
    cy.wait(4000)
}

addSignatureAnnotation()
{
    cy.get('[data-testid="annotation-Signature"]').drag('[class="react-pdf__Page"]',{target: { position: 'left' }})
    cy.wait(2000);
}

clickMarkReadyForSigning()
{
    cy.xpath(selectors.markReadyForSigningBttn).should('exist').dblclick();
    cy.wait(5000);
}

clickBackToMeetingDetailsLink()
{
    cy.xpath(selectors.backToMeetingDetailsLink).should('exist').click();
}

verifyDocumentStatusInEditDocumentPage(status)
{
    cy.xpath(selectors.documentStatusInEditDocumentPage).should('have.text',status)
}

verifyDocumentStatusInMeetingDetailsPage(document,status)
{
    cy.xpath('//tbody/tr/td/div/div[text()="'+document+'"]/../../following-sibling::td[2]/div/text()').should('have.text',status)
}

clickEditDocumentLink()
{
    cy.xpath(selectors.editDocumentLink).should('exist').click();
}

clickMakeChangesButton()
{
    cy.xpath(selectors.makeChangesBttn).should('exist').click();
}

verifyAddedSignatureAnnotation()
{
    cy.xpath("(//div[@data-rnd-annotation-type='SIGNATURE']//div)[1]").should('exist');
}

verifyEmailValidationErrorMessage(errorText)
{
    cy.get(selectors.emailValidationErrorMessage).should('have.text',errorText)
}

clickAddExternalNotary()
{
    cy.xpath(selectors.addExternalNotaryBttn).should('exist').click();
}

enterNotaryEmail(email=notaryEmail)
{
    cy.get(selectors.notaryEmail).should('exist').type(email);
}

clickAddNotaryButton()
{
    cy.xpath(selectors.addNotaryBttn).should('exist').click();
}

enterNoatryFirstName(firstName)
{
    cy.get(selectors.notaryFirstName).should('exist').type(firstName);
}

enterNotaryMiddleName(middleName)
{
    cy.get(selectors.notaryMiddleName).should('exist').type(middleName);
}

enterNotaryLastName(lastName)
{
    cy.get(selectors.notaryLastName).should('exist').type(lastName);
}

enterNotaryNameCredentials(firstName=notaryFirstName,middleName=notaryMiddleName,lastName=notaryLastName)
{
    this.enterNoatryFirstName(firstName);
    this.enterNotaryMiddleName(middleName);
    this.enterNotaryLastName(lastName);
}

clickInviteNotaryButton()
{
    cy.xpath(selectors.inviteNotaryBttn).should('exist').click();
}

addExternalNotary(firstName,middleName,lastName,email)
{
    this.clickAddExternalNotary();
    this.enterNotaryEmail(email);
    this.clickAddNotaryButton();
    this.enterNotaryNameCredentials(firstName,middleName,lastName);
    this.clickInviteNotaryButton();
}

verifyExternalNotaryNameInCreateMeetingPage()
{
    cy.xpath(selectors.externalNotaryNameInCreateMeetingPage).should('contain.text',externalNotaryName)
}

clickViewVerificationResultsButton()
{
    cy.xpath(selectors.viewVerificationResultsBttn).should('exist').click();
}

verifyViewingVerificationResults(signer=signerName)
{
    cy.xpath(selectors.signerNameInVerificationResultPage).should('contain.text',signer);
    cy.xpath(selectors.securityDetailsTxt).should('contain.text'," Security Results");
    cy.xpath(selectors.KBAheading).should('have.text',"Knowledge Based Authentication");
    cy.xpath(selectors.scansHeading).should('have.text',"Scans");
}

clickArchiveButton()
{
    cy.xpath(selectors.archiveBttn).should('exist').click();
}

clickUnarchiveButton()
{
    cy.get(selectors.unarchiveBttn).should('exist').click();
}

clickEditButtonOfNotary()
{
    cy.xpath(selectors.editButtonOfNotary).should('exist').click();
}

clickReassignButton()
{
    cy.xpath(selectors.reassignBttn).should('exist').click();
}

clickReassignButtonInReassignNotaryPage()
{
    cy.xpath(selectors.reassignBttnInReassignNotaryPage).should('exist').click();
}

copyNotaryEmail()
{
    cy.xpath('//tr[1]/td[3][text()]').as('notary email');
}

copyNotaryName()
{
    cy.xpath('//tr[1]/td[1][text()]').as('notary name');
}

verifyNotaryReassigned()
{
    cy.get('@notary name').then((res)=>{

        var notaryName=res.text();

        cy.xpath('//tr[1]/td[1][text()]').should('not.have.text',notaryName)
    })
}

verifyNotaryNameReassigned()
{
    cy.get('@notary email').then((response)=>{

        var notaryEmail=response.text()
       
        cy.xpath('//tr[1]/td[3][text()]').should('not.have.text',notaryEmail)
    })

}

reloadThePage()
{
    cy.reload();
}

clickTheMyMeetingsDropdown()
{
    cy.get(selectors.myMeetingsDropdown).should('exist').click();
}

clickTheSelectAllButton()
{
    cy.get(selectors.selectAllBttn).should('exist').click();    
}

clickTheEditButtonOfFileId()
{
    cy.xpath(selectors.editFileIdButton).realClick();
    cy.xpath(selectors.editFileIdButton).click({force:true});
}

editTheFileIdNumber(fileId)
{
    cy.get(selectors.fileIdNumberTxBx).clear().type(fileId);
}

clickTheSaveIconButton()
{
    cy.get(selectors.saveIconButton).should('exist').click();
}
}

