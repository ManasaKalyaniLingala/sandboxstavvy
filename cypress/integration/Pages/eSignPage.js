
import selectors from "../Selectors/eSign"

export class eSign {
    clickOneSignButton()
    {
        cy.get(selectors.eSignBttn).click();
    }
    clickOnCreateNeweSignButton()
    {
        cy.xpath(selectors.createNeweSignBttn).click();
    }

    enterPacketTitle(packetTitle)
        {
            cy.get(selectors.packetTitlTxtBx).type(packetTitle);
        }

    clickNextButton()
    {
        cy.xpath(selectors.nextBttn).click();
    }

    selectJustMeAndOthers()
    {
        cy.get(selectors.selectJustMeAndOthersBttn).click();
    }
    selectJustMe()
    {
        cy.get(selectors.selectJustMeBttn).click();
    }
    selectJustOthers()
    {
        cy.get(selectors.selectJustOthersBttn).click();
    }

    clickOnUploadDocuments(DocumentName)
    {
        cy.get(selectors.uploadDocumentsBttn).attachFile(DocumentName);
    }
    clickNextButton()
    {
        cy.xpath(selectors.nextBttn).click();
    }
    selectJustMeOption()
    {
        cy.get(selectors.selectJustMeBttn).click();
    }
    selectJustMeAndOthersOption()
    {
        cy.get(selectors.selectJustMeAndOthers).click();
    }
    selectJustOthersOption()
    {
        cy.get(selectors.selectJustOthersBttn).click();
    }
    clickOnSaveAndExitButton()
    {
        cy.xpath(selectors.saveAndExitBttn).click();
    }
    clickBarsIcon()
    {
    cy.get(selectors.barsIcon).click();
    }
    clickOnTrashIcon()
    {
        cy.get(selectors.trashIcon).click();
    }
    clickOnaddSignerButton()
    {
        cy.xpath(selectors.addSignerBttn).click();
    }
    clickOnAddSignerButton()
    {
        cy.xpath(selectors.AddSignerBttn).click();
    }
    addSigner1Info(firstName,middleName,lastName,email)
    {
        this.enterSigner1FirstName(firstName);
        this.enterSigner1MiddleName(middleName);
        this.enterSigner1LastName(lastName);
        this.enterSigner1Email(email);
    }
    enterSigner1FirstName(firstName)
    {
        cy.xpath(selectors.firstNameOfFirstSignerTxtBx).type(firstName);
    }
    enterSigner1MiddleName(middleName)
    {
        cy.xpath(selectors.middleNameOfFirstSignerTxtBx).type(middleName);
    }
    enterSigner1LastName(lastName)
    {
        cy.xpath(selectors.lastNameOfFirstSignerTxtBx).type(lastName);
    }
    enterSigner1Email(email)
    {
        cy.xpath(selectors.emailOfFirstSignerTxtBx).type(email);
    }
    addSigner2Info(firstName,middleName,lastName,email)
    {
        this.enterSigner2FirstName(firstName);
        this.enterSigner2MiddleName(middleName);
        this.enterSigner2LastName(lastName);
        this.enterSigner2Email(email);
    }
    enterSigner2FirstName(firstName)
    {
        cy.xpath(selectors.firstNameOfSecondSignerTxtBx).type(firstName);
    }
    enterSigner2MiddleName(middleName)
    {
        cy.xpath(selectors.middleNameOfSecondSignerTxtBx).type(middleName);
    }
    enterSigner2LastName(lastName)
    {
        cy.xpath(selectors.lastNameOfSecondSignerTxtBx).type(lastName);
    }
    enterSigner2Email(email)
    {
        cy.xpath(selectors.emailOfSecondSignerTxtBx).type(email);
    }
    clickOnBackButton()
    {
        cy.xpath(selectors.backBttn);
    }
    clickOnReviewPacketDetails()
    {
        cy.xpath(selectors.reviewPacketDetaisBttn);
    }
    clickMarkReadyForSigning()
    {
        cy.xpath(selectors.markReadyForSigningBttn);
    }
    clickSelectAssigneeDeatils()
    {
        cy.get(selectors.selectAssigneeDropDown);
    }
    dragFirstNameAnnotation()
    {
    cy.xpath(selectors.fullNameAnnotation);
    }
    clickSignatureAnnotation()
    {
        cy.xpath(selectors.signatureAnnotation);
    }
    clickInitialsAnnotation()
    {
        cy.xpath(selectors.initialsAnnotation);
    }
    clickDateAnnoataion()
    {
        cy.xpath(selectors.dateAnnotation);
    }
    clickTextFieldAnnotation()
    {
        cy.xpath(selectors.textFieldAnnotation);
    }
    clickCheckBoxAnnotation()
    {
        cy.xpath(selectors.checkBoxAnnotation);
    }
    clickDeleteAllAnnotations()
    {
        cy.xpath(selectors.deleteAllAnnotationsBttn);
    }
    clickDataHiddenButton()
    {
        cy.get(selectors.dataHiddenBttn);
    }
    clickApplyExistingTemplate()
    {
        cy.get(selectors.applyExisitingTemplateBttn);
    }
    clickReassignAnnotationDropdown()
    {
        cy.get(selectors.reassignAnnotationDropdown);
    }
    clickSmallButton()
    {
        cy.xpath(selectors.smallBtnn);
    }
    clickMediumButton()
    {
        cy.xpath(selectors.mediumBtnn);
    }
    clickLargeButton()
    {
        cy.xpath(selectors.largeBtnn);
    }
    clickMaximizeButton()
    {
        cy.get(selectors.maximizeBtnn);
    }
    clickMinimizeButton()
    {
        cy.get(selectors.minimizeBtnn);
    }
    clickBackToPacketDetailsLink()
    {
        cy.xpath(selectors.backtoPacketDetailsLink);
    }
    clickMakeChangesButton()
    {
        cy.xpath(selectors.makeChangedBtnn);
    }
    clickCloseButton() 
    {
        cy.get(selectors.eSigncloseBtnn);
    }
    clickSetSigningOrderCheckBox()
    {
        cy.get(selectors.setSigningOrderCheckBx);
    }
    clickPencilIconButton()
    {
        cy.get(selectors.pencilIconBtnn);
    }
    clickOnPacketTitle()
    {
        cy.get(selectors.packetTitle).trigger('mouseover');
    }
    editPacketTitle(editedTitle)
    {
        cy.get(selectors.editPacketTitle).clear().type(editedTitle)
    }
    clickCancelButton()
    {
        cy.xpath(selectors.cancelBtnn);
    }
    clickSaveAndSignNowButton()
    {
        cy.xpath(selectors.saveAndSignNow);
    }
    enterCommentInEmailMessageBox()
    {
        cy.get(selectors.emailMessageTxtBx);
    }
    clickOnPacketFromTheList(eSignpacketName)
    {
        cy.xpath('(//*[text()="'+eSignpacketName +'"])[1]').click();
    }
    clickOnEditButtonOfSigner(mailIdOfSigner)
    {
        cy.xpath('//div/span[text()="'+mailIdOfSigner+'"]/following-sibling::span/div[1]').click();
    }
    verifyDeletedSigner(mailIdOfSigner)
    {
        cy.xpath('//*/div/div[2]/div/span/text()').should('not.have.text',mailIdOfSigner)
    }
    verifyAddedSigner(mailIdOfSigner)
    {
        cy.xpath('//*/div/div[2]/div/span/text()').should('have.text',mailIdOfSigner)
    }
    clickOnAddDocument()
    {
        cy.xpath(selectors.addDocument).click();
    }
    clickUploadButton()
    {
        cy.xpath(selectors.uploadButton).click();
    }
    clickOnSignerEditButton()
    {
        cy.xpath(selectors.signerEditBttn).click()
    }
    clickOnSendInvite()
    {
        cy.xpath(selectors.sendInvite).click();
    }
    clickOnEdit()
    {
        cy.xpath(selectors.editBttn).click();
    }
    clickOnDelete()
    {
        cy.xpath(selectors.deleteBttn).click();
    }
    clickOnDocEditButton()
    {
      cy.xpath(selectors.docEditButton).click();
    }
    clickOnViewDocument()
    {
        cy.xpath(selectors.viewDocumentBttn).click();
    }
    clickOnEditAnnotations()
    {
        cy.xpath(selectors.editAnnotationsBttn).click();
    }
    clickOnRemoveDocument()
    {
    cy.xpath(selectors.removeDocument).click();
    }
    clickOnRemoveDocumentButton()
    {
        cy.xpath(selectors.removeDocumentBttn).click();
    }
    clickOnSaveButton()
    {
        cy.xpath(selectors.saveBttn).click();
    }
    verifyPacketInTheList(packetTitle)
    {
        cy.xpath(selectors.verifyPacketInTheList).should('have.text',packetTitle);
    }
    verifyPacketStatus(status)
    {
        cy.xpath(selectors.packetStatusInEsignDetailsPage).should('have.text',status);
    }
    clickOnRemoveSignerButton()
    {
        cy.xpath(selectors.removeSignerBttn).click();
    }
    
    creatingNewESignWithJustMeOption(packetTitle,documentName)
    {   
        this.clickOneSignButton();
        this.clickOnCreateNeweSignButton();
        this.enterPacketTitle(packetTitle);
        this.clickNextButton();
        this. clickOnUploadDocuments(documentName);
        cy.wait(1000)
        this.selectJustMe();
        this.clickNextButton();
        cy.wait(1000)
        this.clickNextButton();
        cy.xpath("//*[text()='Full Name']").drag('[class="react-pdf__Page"]')
        this.clickMarkReadyForSigning();
        this.clickOnReviewPacketDetails();
        this.clickOnSaveAndExitButton();
        this.clickOnSaveAndExitButton();
    }
    creatingNewESignWithJustOtherOption(packetTitle,DocumentName,firstName,middleName,lastName,email)
    {   
        this.clickOneSignButton();
        this.clickOnCreateNeweSignButton();
        this.enterPacketTitle(packetTitle);
        this.clickNextButton();
        this.clickOnUploadDocuments(DocumentName);
        cy.wait(1000)
        this.selectJustOthers();
        this.clickNextButton();
        cy.wait(1000)
        //this.clickOnAddSignerButton();
        this.addFirstSignerInfo(firstName,middleName,lastName,email);
        this.clickNextButton();
         cy.xpath("//*[text()='Full Name']").drag('[class="react-pdf__Page"]')
         this.clickMarkReadyForSigning();
         this.clickOnReviewPacketDetails();
         this.clickOnSaveAndExitButton();
         this.clickOnSaveAndExitButton();
    }

    editSignerDetails(editedFirstName,editedMiddleName,editedLastName,editedEmail)
    {
        this.editFirsName(editedFirstName);
        this.editMiddleName(editedMiddleName);
        this.editLastName(editedLastName);
        this.editEmail(editedEmail);
    }

    editFirsName(editedFirstName)
    {
        cy.xpath(selectors.editFirstName).clear().type(editedFirstName)
    }
    editMiddleName(editedMiddleName)
    {
      cy.xpath(selectors.editMiddleName).clear().type(editedMiddleName)
    }
    editLastName(editedLastName)
    {
        cy.xpath(selectors.editLastName).clear().type(editedLastName);
    }
    editEmail(editedEmail)
    {
        cy.xpath(selectors.editEmail).clear().type(editedEmail);
    }

}
