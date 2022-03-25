
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
            this.clickNextButton();
        }

    clickNextButton()
    {
        cy.wait(4000);
        cy.xpath(selectors.nextBttn).click();
    }

    selectJustMeAndOthers()
    {
        cy.get(selectors.selectJustMeAndOthersBttn).click();
    }
    selectJustMe()
    {
        cy.get(selectors.selectJustMeBttn).click();
        cy.wait(3000)
    }
    selectJustOthers()
    {
        cy.get(selectors.selectJustOthersBttn).click();
    }
    clickOnUploadDocuments(documentName)
    {
        cy.get(selectors.uploadDocumentsBttn).attachFile(documentName);
        cy.wait(2000);
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
        cy.wait(4000)
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
    clickFirstNameAnnotation()
    {
    cy.xpath(selectors.fullNameAnnotation).should('exist').click();
    }
    clickSignatureAnnotation()
    {
        cy.xpath(selectors.signatureAnnotation).should('exist').click();
    }
    clickInitialsAnnotation()
    {
        cy.xpath(selectors.initialsAnnotation).should('exist').click();
    }
    clickDateAnnoataion()
    {
        cy.xpath(selectors.dateAnnotation).should('exist').click();
    }
    clickTextFieldAnnotation()
    {
        cy.xpath(selectors.textFieldAnnotation).should('exist').click();
    }
    clickCheckBoxAnnotation()
    {
        cy.xpath(selectors.checkBoxAnnotation).should('exist').click();
    }
    clickDeleteAllAnnotations()
    {
        cy.xpath(selectors.deleteAllAnnotationsBttn).should('exist').click();
    }
    clickDataHiddenButton()
    {
        cy.get(selectors.dataHiddenBttn).should('exist').click();
    }
    clickApplyExistingTemplate()
    {
        cy.wait(5000)
        cy.get(selectors.applyExisitingTemplateBttn).should('exist').click();
    }
    clickReassignAnnotationDropdown()
    {
        cy.get(selectors.reassignAnnotationDropdown);
    }
    clickSmallButton()
    {
        cy.xpath(selectors.smallBtnn).should('exist').click();
    }
    clickMediumButton()
    {
        cy.xpath(selectors.mediumBtnn).should('exist').click();
    }
    clickLargeButton()
    {
        cy.xpath(selectors.largeBtnn).should('exist').click();
    }
    clickMaximizeButton()
    {
        cy.get(selectors.maximizeBtnn).should('exist').click();
    }
    clickMinimizeButton()
    {
        cy.get(selectors.minimizeBtnn).should('exist').click();
    }
    clickBackToPacketDetailsLink()
    {
        cy.xpath(selectors.backtoPacketDetailsLink).should('exist').click();
    }
    clickMakeChangesButton()
    {
        cy.xpath(selectors.makeChangesBtnn).click();
        cy.wait(4000);
    }
    clickCloseButton() 
    {
        cy.get(selectors.eSigncloseBtnn).click();
    }
    clickSetSigningOrderCheckBox()
    {
        cy.get(selectors.setSigningOrderCheckBx).click();
    }
    clickPencilIconButton()
    {
        cy.get(selectors.pencilIconBtnn).click();
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
        cy.xpath('(//*[text()="'+eSignpacketName +'"])[1]').should('exist').dblclick();
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
        cy.xpath('//button').then((res)=>{
            if(res.text().includes('send'))
            {
                this.clickSendButton();
            }
        })
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
        cy.xpath(selectors.viewDocumentBttn).should('exist').click();
    }
    clickOnEditAnnotations()
    {
        cy.xpath(selectors.editAnnotationsBttn).click()
        cy.wait(3000);
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

    verifySaveBttnIsDisabled()
    {
        cy.xpath(selectors.saveBttn).should('be.disabled');
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
            this.refreshESignListPage();
            this.searcPacket(packetTitle);
            cy.wait(3000);
            this.verifyPacketStatusInTheList(packetTitle,status);
        })
     }
    
    creatingNewESignWithJustMeOption(packetTitle,documentName)
    {   
        this.clickOneSignButton();
        this.clickOnCreateNeweSignButton();
        this.enterPacketTitle(packetTitle);
        this. clickOnUploadDocuments(documentName);
        this.selectJustMe();
        this.clickNextButton();
        this.clickNextButton();
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
        cy.reload();
        cy.wait(3000)

     }

    createNewEsignWithMeAndOthers(packetTitle,documentName,firstName,middleName,lastName,email)
    {
        this.clickOneSignButton();
        this.clickOnCreateNeweSignButton();
        this.enterPacketTitle(packetTitle);
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

    clearSignerData()
    {
        this.emptyFirstNameField();
        this.emptyMiddleNameField();
        this.emptyLastNameField();
        this.emptyEmailField();
    }

    emptyFirstNameField()
    {
        cy.xpath(selectors.editFirstName).clear();
    }

    emptyMiddleNameField()
    {
        cy.xpath(selectors.editMiddleName).clear()
    }

    emptyLastNameField()
    {
        cy.xpath(selectors.editLastName).clear();
    }

    emptyEmailField()
    {
        cy.xpath(selectors.editEmail).clear();   
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
    copyEsign()
    {
        cy.xpath('//tbody/tr[1]/td[1]').as('packetTitle')
    }

    searchedPacketAndVerify()
    {
        this.copyEsign()
        cy.get('@packetTitle').then((res)=>{
            cy.get(selectors.searchPacketTxBx).type(res.text());
            cy.xpath('(//*[text()="'+res.text()+'"])[1]').click();
            cy.xpath(selectors.packetTitleIneSignDetailsPage).should('have.text',res.text());
        })
    }
    searcPacket(packetTitle)
    {
        cy.get(selectors.searchPacketTxBx).type(packetTitle);
    }
    verifyAddedSignerInTheList(signerMail,firstName,middleName,lastName)
    {
        cy.contains(signerMail);
        cy.contains(firstName);
        cy.contains(middleName);
        cy.contains(lastName);
    }
    verifyAddedDocumentInTheList(documentName)
    {
        cy.xpath(selectors.addedDocName).should('have.text',documentName)
    }

    verifyDocumentStatusInList(document,status)
    {
        cy.xpath('//tbody/tr/td[1][text()="'+document+'"]/following-sibling::td[2]/div').should('contain.text',status)
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

   clickResendInviteButton()
   {
       cy.xpath(selectors.resendInvite).should('exist').click();
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
       cy.get(selectors.packetTitle).trigger('mouseover');
       cy.get('[data-icon="pencil"]').click({force:true})
       cy.get(selectors.editPacketTitleTxBx).clear().type(packetName);
       cy.get(selectors.saveIconBttn).should('exist').click();

   }

   verifyEsignPageView()
   {
       cy.xpath(selectors.createNeweSignBttn).should('exist');
       cy.xpath(selectors.eSignHeading).should('have.text',"eSign");
       cy.get(selectors.searchPacketTxBx).should('exist');
       cy.get(selectors.statusDropdown).should('exist');
       cy.get(selectors.createdByDropdown).should('exist');
       cy.xpath(selectors.tabSubtitle).should('have.text',"Packets");
       cy.xpath(selectors.eSignListColoumnName).should('contain.text',"Packet Title");
       cy.xpath(selectors.eSignListColoumnName).should('contain.text',"Created on");
       cy.xpath(selectors.eSignListColoumnName).should('contain.text',"Created by");
       cy.xpath(selectors.eSignListColoumnName).should('contain.text',"Status");
       cy.xpath("//tbody/tr").should('exist');
       cy.get(selectors.previousBttn).should('exist');
       cy.get(selectors.nextButton).should('exist');
   }

   verifyErrorText(errorText)
   {
       cy.xpath(selectors.errorText).should('contain.text',errorText);
   }

   verifyEmailValidationError(errorText)
   {
       cy.xpath(selectors.emailValidationError).should('contain.text',errorText)
   }

   verifyInputValidationError(errorText)
   {
       cy.xpath(selectors.inputValidationError).should('contain.text',errorText)
   }
   clickSendButton()
   {
       cy.xpath(selectors.sendBttn).should('exist').click();
   }

   verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }

    clickInviteAllSigners()
    {
        cy.xpath(selectors.inviteAllSigners).should('exist').click();
    }

    clickSignNowButton()
    {
        cy.xpath(selectors.signNowBttn).should('exist').click();
    }

    clickStartSigning()
    {
        cy.xpath(selectors.startSigning).should('exist').click();
    }

    clickFinishSigning()
    {
        cy.xpath(selectors.finishSigning).should('exist').click();
    }

    verifySigningCompletePopupPage()
    {
        cy.xpath(selectors.completeSigning).should('exist');
    }

    verifyDocumentSignedText()
    {
        cy.xpath(selectors.documentSignedText).should('exist');
    }

    verifyDocumentStatusUnderDocumentName(document,status)
    {
        cy.xpath('//div[text()="'+document+'"]/../../../following-sibling::div/span/span').should('contain.text',status)
    }

    clickSignerDropdown()
    {
        cy.get(selectors.signerDropdown).should('exist').click();
    }

    clickApplyButton()
    {
        cy.xpath(selectors.applyBttn).should('exist').click();
    }

    clickOnAnnotations()
    {
        cy.xpath("(//div[@data-rnd-annotation-type='SIGNATURE']//div)[1]").should('exist').dblclick();
        cy.xpath('//button').then((res)=>{
             cy.log(res.text())
            if(res.text().includes('Use this signature'))
            {
                this.clickUseThisSignature();
            }

            else{
                cy.xpath(selectors.checkBoxInAdopNewSignature).should('exist').click();
                this.clickOnSaveButton();
            }
        })
        cy.xpath("//div[@data-rnd-annotation-type='CHECK']").should('exist').dblclick();
    }

    verifyAnnotationsExist()
    {
        cy.xpath("(//div[@data-rnd-annotation-type='SIGNATURE']//div)[1]").should('exist');
        cy.xpath("//div[@data-rnd-annotation-type='CHECK']").should('exist');
        cy.xpath("//div[@data-rnd-annotation-type='DATE']").should('exist');
        cy.xpath("//div[@data-rnd-annotation-type='TEXT']").should('exist');

    }

    applyTemplateToDocument()
    {
        this.clickApplyExistingTemplate();
        cy.xpath('//tbody/tr/td[text()="signer template"]').click();
        this.clickNextButton();
        this.clickSignerDropdown();
        cy.xpath('//ul/li[1]').click();
        this.clickApplyButton();
    }

    clickUseThisSignature()
    {
        cy.xpath(selectors.useThisSignatureBttn).should('exist').click();
    }

    redirectPacketDetailsPageFromSignerPorta()
    {
        cy.go(-1);
    }

    verifyNavigatedToUrl(link)
    {
        cy.url().should('include',link);
    }

    verifyPacketTitleInViewDocumentPage(packetTitle)
    {
        cy.xpath(selectors.packetTitleInViewDocument).should('contain.text',packetTitle)
    }

    verifyDocumentNameInViewDocumentPage(documentName)
    {
        cy.xpath(selectors.documentNameInViewDocument).should('contain.text',documentName)
    }

    verifyDocumentIsLoaded()
    {
        cy.xpath(selectors.loadedDocument).should('exist');
    }

    clickStartSigningLink()
    {
        cy.xpath(selectors.startSigningLink).should('exist').click();
    }

    clickEditAnnotationsInViewDocumentPage()
    {
        cy.xpath(selectors.editAnnotationsBttnInViewDocument).should('exist').click();
        cy.wait(4000)
    }

    clickAddSignersButtonInViewDocumentPage()
    {
        cy.xpath(selectors.addSignersBttnInViewDocument).should('exist').click();
    }

    clickEditButtonOfSignerInViewDocumentPage()
    {
        cy.xpath(selectors.editButtonOfSignerInViewDocumentPage).should('exist').click();
    }

    clickBackToPacketOverviewLink()
    {
        cy.xpath(selectors.backToPacketOverviewLink).should('exist').click();
    }

    clickBackToSignerPortal()
    {
        cy.xpath(selectors.backToSignerPortal).should('exist').click();
    }

    verifyNavigateToPacketOverviewPage()
    {
        cy.xpath(selectors.signYourDocumentsText).should('exist');
        cy.xpath(selectors.viewYourSignedDocumentsText).should('exist');
        cy.get(selectors.packetDetailsBttnInSignerPortal).should('exist');
        cy.xpath(selectors.startSigning).should('exist');
        cy.xpath(selectors.startSigningLink).should('exist');
    }

    verifyNavigateToSignerPortal()
    {
        cy.xpath(selectors.signerPortalHeading).should('exist');
        cy.get(selectors.eSignPacketsTabInSignerPortal).should('exist');
        cy.get(selectors.meetingsTabInSignerPortal).should('exist');
    }

    verifyNavigatedToSigningDocumentPage(document,status)
    {
        cy.xpath(selectors.signYourDocumentsText).should('not.exist')
        cy.xpath(selectors.viewYourSignedDocumentsText).should('not.exist');
        cy.get(selectors.packetDetailsBttnInSignerPortal).should('exist');
        cy.xpath(selectors.startSigning).should('not.exist');
        cy.xpath(selectors.startSigningLink).should('not.exist');
        this.verifyDocumentStatusUnderDocumentName(document,status);
        this.verifyDocumentIsLoaded();
    }
   }