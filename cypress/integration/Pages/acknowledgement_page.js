import selectors from '../Selectors/acknowledgement';

export class Acknowledgement {

    navigateToAcknowledgementPage()
    {
        cy.get(selectors.acknowledgmentLink).should('exist').click();
    }

    navigateToInboxPage()
    {
        cy.get(selectors.inboxLink).click();
        cy.wait(1000);
    }
    
    navigateToArchivedPage()
    {
        cy.get(selectors.archivedLink).click();
        cy.wait(1000);
    }

    navigateToMeetingsPage()
    {
        cy.xpath(selectors.meetingsLink).should('exist').click();
        cy.wait(1000);
    }

    clickOnInitialReview()
    {
        cy.wait(2000);
        cy.get(selectors.initialReviewTab).click();
        cy.wait(2000);
    }

    verifyInitialReviewTab()
    {
       cy.get(selectors.initialReviewTab).should('exist');
    }

    verifyAcknowledgeTab()
    {
        cy.get(selectors.acknowledgeTab).should('exist');
    }

    verifyCompleteTab()
    {
        cy.get(selectors.completeTab).should('exist');
    }

    verifyFinalReviewTab()
    {
        cy.get(selectors.finalReviewTab).should('exist');
    }

    clickOnAcknowledgeTab()
    {
        cy.wait(2000);
        cy.get(selectors.acknowledgeTab).click();
        cy.wait(3000);
    }

    clickOnFinalReviewTab()
    {
        cy.wait(2000);
        cy.get(selectors.finalReviewTab).click();
        cy.wait(3000);
    }

    clickOnCompleteTab()
    {
        cy.wait(2000);
        cy.get(selectors.completeTab).click();
        cy.wait(3000);
    }

    selectAllDocuments()
    {
        cy.xpath(selectors.selectAllOfDocumentName).click();
    }

    clickStartQCOfDocument(document,loanNumber)
    {
        cy.xpath('//tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td/button').click();
    }

    clickOnDropdownOfDocumentName(document)
    {
        cy.xpath('//tr/td[2]/div[text()="'+document+'"]/../../td[7]/div/div/div/span').click();
    }

    clickDocumentDetails()
    {
        cy.get(selectors.documentDetailsBttn).click();
    }

    downloadDocument()
    {
        cy.get(selectors.documentDownloadBttn).click();
    }

    selectApproveNoAcknowledgement()
    {
        cy.xpath(selectors.selectApproveNoAcknowledgement).click();
    }

    selectApproveAcknowledgmentRequired()
    {
        cy.xpath(selectors.selectApproveAcknowledgementRequired).click();
    }

    selectReject()
    {
        cy.xpath(selectors.selectReject).click();
    }

    clickSubmitButton()
    {
        cy.xpath(selectors.submitBttn).click();
        cy.wait(3000);
    }

    verifyDocumentStatusInTheList(document,loanNumber,status)
    {
        cy.xpath('//div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[3]').should('have.text',status);
    }

    verifyDocumentLastReviewedInTheList(document,loanNumber)
    {
        cy.xpath('//div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[3]').should('contain.text','seconds ago')
    }

    clickViewOfDocument(document,loanNumber)
    {
        cy.xpath('//div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[4]/button').click();
    }

    verifyApprovedWithNoAcknowledgememtQAText()
    {
        cy.xpath(selectors.approvedQualityControlText).should('have.text',"Approved with no further action needed.");
    }

    verifyApprovedWithAcknowledgmentQAText()
    {
        cy.xpath(selectors.approvedQualityControlText).should('have.text',"Approved with acknowledgement required.");
    }

    verifyQualityControlStatusText(status)
    {
       cy.xpath(selectors.qualityControlText).should('contain.text',status);
    }

    clickBackToInboxButton()
    {
        cy.xpath(selectors.backToInboxBttn).click();
    }

    verifyDocumentNotInTheList(document,loanNumber)
    {
        cy.xpath('//tbody/tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]').should('not.exist');
    }

    verifyDocumentInTheList(document,loanNumber)
    {
        cy.xpath('//tbody/tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]').should('exist');
    }

    verifyDocumentAndItsStatusInTheCompleteTabList(document,loanNumber,status)
    {
        this.clickOnCompleteTab();
        this.verifyDocumentInTheList(document,loanNumber);
        this.verifyDocumentStatusInTheList(document,loanNumber,status);
    }

    verifyPageHeading(heading)
    {
        cy.xpath(selectors.headingText).should('have.text',heading);
    }

    verifyDocumentListExists()
    {
     cy.xpath(selectors.DocumentList).should('exist');
    }

    verifySearchDocuments()
    {
        cy.get(selectors.seacrhDocuments).should('exist').click();
    }

    verifyNoOfRowsPerPageDropDown()
    {
        cy.get(selectors.noOfRowsPerPageDropDown).should('exist').click();
    }

    verifyTabHeadingText(tabHeading)
    {
        cy.xpath(selectors.tabHeadingText).should('have.text',tabHeading);
    }

    selectTheDocumentInTheList(document,loanNumber)
    {
        cy.xpath('//tbody/tr/td/div[text()="'+document+'"]/../../td[3][text()="'+loanNumber+'"]/../td[1]').click();
    }

    clickArchiveButton()
    {
        cy.get(selectors.archicveBttn).should('exist').click();
    }
    verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }

    verifyDocumentLastLocation(document,loanNumber,location)
    {
        cy.xpath('//tbody/tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[2]').should('have.text',location);
    }

    clickMoveToInboxButton()
    {
        cy.xpath(selectors.moveToInboxBttn).should('exist').click();
    }
}