
import selectors from "../Selectors/eSign"

export class ESign {
    clickOneSignButton()
    {
        cy.get(selectors.eSignBttn).click();
        cy.wait(3000);
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
    clickOnUploadDocuments(documentName)
    {
        cy.get(selectors.uploadDocumentsBttn).attachFile(documentName);
    }
    clickNextButton()
    {
        cy.xpath(selectors.nextBttn).click();
    }
    clickUploadButton()
    {
        cy.xpath(selectors.uploadButton).should('exist').click();
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
        cy.xpath(selectors.saveExitButton).click();
    }
    clickBarsIcon()
    {
    cy.get(selectors.barsIcon).click();
    }
    clickOnTrashIcon()
    {
        cy.get(selectors.trashIcon).click();
    }
    clickOnaddSignerBttn()
    {
        cy.xpath(selectors.addSignerBttn).click();
    }
    clickOnAddSignerButton()
    {
        cy.xpath(selectors.addSignerButton).click();
    }
    addSignerInfo(firstName,middleName,lastName,email)
    {
        this.enterSignerFirstName(firstName)
        this.enterSignerMiddleName(middleName);
        this.enterSignerLastName(lastName);
        this.enterSignerEmail(email);
    }
    enterSignerFirstName(firstName)
    {
        cy.xpath(selectors.firstNameOfSignerTxtBx).type(firstName);
    }
    enterSignerMiddleName(middleName)
    {
        cy.xpath(selectors.middleNameOfSignerTxtBx).type(middleName);
    }
    enterSignerLastName(lastName)
    {
        cy.xpath(selectors.lastNameOfSignerTxtBx).type(lastName);
    }
    enterSignerEmail(email)
    {
        cy.xpath(selectors.emailOfSignerTxtBx).type(email);
    }
    
    clickOnBackButton()
    {
        cy.xpath(selectors.backBttn);
    }
    clickOnReviewPacketDetails()
    {
        cy.xpath(selectors.reviewPacketDetaisBttn).click();
    }
    clickMarkReadyForSigning()
    {
        cy.xpath(selectors.markReadyForSigningBttn).dblclick()
        cy.wait(5000);
    }
    clickSelectAssigneeDeatils()
    {
        cy.get(selectors.selectAssigneeDropDown).click();
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
        cy.xpath('//*/div/div[2]/div/span/text()').should('have.text',mailIdOfSigner);
    }
    clickOnAddDocument()
    {
        cy.xpath(selectors.addDocument).click();
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
    clickRemoveDocument()
    {
       cy.xpath(selectors.removeDocument).click();
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
    verifyPacketStatusInTheList(packetTitle,status)
    {
        cy.xpath('//tr/td[text()="'+packetTitle+'"]/following-sibling::td[3]/div/text()').should('have.text',status);
    }

    verifyPacketStatusInDetailsPage(status)
    {
        cy.xpath(selectors.packetStatusInEsignDetailsPage).should('have.text',status);
    }
    clickOnRemoveSignerButton()
    {
        cy.xpath(selectors.removeSignerBttn).click();
    }
    verifyPacketNameInDetailsPage(packetTitle)
    {
        cy.xpath(selectors.packetTitleIneSignDetailsPage).should('have.text',packetTitle);
    }

    verifyCancelledPacketInTheList(status)
    {

        cy.xpath(selectors.packetTitleIneSignDetailsPage).then(($res)=>{

            var packetTitle=$res.text();
            this.clickOneSignLink();
            this.searcPacket(packetTitle)
            this.verifyPacketStatusInTheList(packetTitle,status);
        })
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
        cy.wait(5000);
        cy.xpath("//*[text()='Full Name']").drag('[class="react-pdf__Page"]')
        cy.wait(5000);
        this.clickMarkReadyForSigning();
        this.clickOnReviewPacketDetails();
        this.clickOnSaveAndExitButton();
    }

    creatingNewESignWithJustOtherOption(packetTitle,documentName,firstName,middleName,lastName,email)
    {   
        this.clickOneSignButton();
        this.clickOnCreateNeweSignButton();
        this.enterPacketTitle(packetTitle);
        this.clickNextButton();
        this.clickOnUploadDocuments(documentName);
        cy.wait(1000)
        this.selectJustOthers();
        this.clickNextButton();
        cy.wait(1000)
        this.addSignerInfo(firstName,middleName,lastName,email);
        this.clickNextButton();
        cy.wait(5000);
         cy.xpath("//*[text()='Full Name']").drag('[class="react-pdf__Page"]')
         cy.wait(5000)
         this.clickMarkReadyForSigning();
         this.clickOnReviewPacketDetails();
         this.clickOnSaveAndSendNow();
        this.clickDone();
    }

    refreshESignListPage()
    {
        cy.visit('https://connect.sandbox.stavvy.com/esign');

    }

    createNewEsignWithMeAndOthers(packetTitle,documentName,firstName,middleName,lastName,email)
    {
        this.clickOneSignButton();
        this.clickOnCreateNeweSignButton();
        this.enterPacketTitle(packetTitle);
        this.clickNextButton();
        this.clickOnUploadDocuments(documentName);
        cy.wait(1000)
        this.selectJustMeAndOthers();
        this.clickNextButton();
        cy.wait(1000)
        //this.clickOnAddSignerButton();
        this.clickOnaddSignerBttn();
        this.addSignerInfo(firstName,middleName,lastName,email);
        this.clickNextButton();
        cy.wait(5000)
         cy.xpath("//*[text()='Full Name']").drag('[class="react-pdf__Page"]')
         cy.wait(5000)
         this.clickMarkReadyForSigning();
         this.clickOnReviewPacketDetails();
         this.clickOnSaveAndSendNow();
        this.clickViewPacketDetails();
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
    clickOnSaveAndSendNow()
    {
        cy.xpath(selectors.saveAndSendNow).click();
    }
    clickDone()
    {
        cy.xpath(selectors.doneBttn).click();
        cy.wait(3000);
    }
    clickViewPacketDetails()
    {
        cy.xpath(selectors.viewPacketDetailsBttn).click();
    }
    clickOneSignLink()
    {
        cy.xpath(selectors.eSignLink).click();
    }
    clickOnCancelPacket()
    {
        cy.xpath(selectors.cancelPacketBttn).click();
    }
    clickOnCancelPacketButtonInPopupPage()
    {
        cy.xpath(selectors.cancelPacketBttn2).click();
    }
    searcPacket(packetTitle)
    {
        cy.get(selectors.searchPacketTxBx).type(packetTitle);
    }
    verifyAddedSignerInTheList(signerMail)
    {
        cy.contains(signerMail);
    }
    verifyAddedDocumentInTheList(documentName)
    {
        cy.xpath(selectors.addedDocName).should('have.text',documentName)
    }
    clickPacketStatusDropDownAndSelectValue(value)
    {
        cy.wait(2000)
        cy.get(selectors.statusDropdown).should('exist').click();
        this.selectValueFromDropDown(value);
        cy.wait(3000);
    }

    selectValueFromDropDown(value)
    {
        cy.xpath('//div/ul/li/span[text()="'+value+'"]').should('exist').click();
    }

    deleteAndVerifyDeletedSigner()
    {
        cy.xpath(selectors.signerMailOfEditButton).then((mail)=>{
            var email=mail.text();
        this.clickEditSignerBttn();
        this.clickOnDelete();
        this.clickOnRemoveSignerButton();

        this.verifyDeletedSigner(email)
        })
    }


    selectPacketFromTheList()
   {
    cy.xpath('//tbody/tr')
    .then(($li) => {
      const items = $li.toArray()
      return Cypress._.sample(items)
    })
    .then(($li) => {
      expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
      cy.log(`you picked "${$li.text()}"`).click();
      cy.wait(5000);
      this.verifyNavigatedToPacketDetailsPage();
    })
   }

   verifyNavigatedToPacketDetailsPage()
   {
       cy.xpath(selectors.packetDetailsPage).should('exist');
   }

   clickEditSignerBttn()
   {
       cy.xpath(selectors.editSignerButton).should('exist').click();
   }

   clickEditButtonOfDocument(document)
   {
       cy.xpath('//div[text()="Documents"]/../following-sibling::div/div/table/tbody/tr/td[1][text()="'+document+'"]/following-sibling::td[3]/div').should('exist').click();
   }

   verifyDeletedDocument(document)
   {
       cy.xpath('//tbody/tr/td[1][text()="'+document+'"]').should('not.exist');
   }

   editPacketTitle(packetName)
   {
       cy.xpath(selectors.packetTitleEditBttn).should('exist').realHover();
       cy.xpath(selectors.packetTitleEditBttn).should('exist').realClick();
       cy.get(selectors.editPacketTitleTxBx).clear().type(packetName);

   }
}
