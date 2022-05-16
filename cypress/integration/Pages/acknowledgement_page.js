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
        cy.wait(4000);
    }

    navigateToMeetingsPage()
    {
        cy.xpath(selectors.meetingsLink).should('exist').click();
        cy.wait(1000);
    }

    clickOnInitialReview()
    {
        cy.wait(2000);
        cy.xpath(selectors.initialReviewTab).click();
        cy.wait(2000);
    }

    clickOnRejectHandlingTab()
    {
        cy.get(selectors.rejectHandlingTab).should('exist').click();
    }

    verifyInitialReviewTab()
    {
       cy.xpath(selectors.initialReviewTab).should('exist');
    }

    verifyRejectHandlingTab()
    {
        cy.get(selectors.rejectHandlingTab).should('exist')
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
        cy.reload();
        cy.wait(2000);
        cy.get(selectors.acknowledgeTab).click();
        cy.wait(5000);
    }

    clickOnFinalReviewTab()
    {
        cy.wait(2000);
        cy.get(selectors.finalReviewTab).click();
        cy.wait(3000);
    }

    clickOnCompletePage()
    {
        cy.wait(2000);
        cy.xpath(selectors.completePage).click();
        cy.wait(3000);
    }

    selectAllDocuments()
    {
        cy.xpath(selectors.selectAllOfDocumentName).click();
    }

    copyDocumentName()
    {
        cy.xpath('//tbody/tr[1]/td[2]/div[text()]').as('document name');
    }

    copyLoanNumber()
    {
        cy.xpath('//tbody/tr[1]/td[3]/text()').as('loan number');
    }

    clickStartQCOfDocument()
    {
        this.copyDocumentName();
        this.copyLoanNumber();
        cy.get('@document name').then((res)=>{
            var document=res.text();
            cy.log(document)})
             cy.get('@loan number').then((response)=>{
               var  loanNumber=response.text()
               cy.log(loanNumber);})
        cy.xpath(selectors.startQcBttnOfFirstDocument).should('exist').click();
        cy.wait(7000)
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
        cy.reload();
    }

    verifyDocumentStatusInTheList(document,loanNumber,status)
    {
        cy.xpath('//div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[2]/div').should('have.text',status);
    }

    verifyDocumentLastReviewedInTheList()
    {
        cy.get('@document name').then((res)=>{
            var document=res.text();
             cy.get('@loan number').then((response)=>{
               var  loanNumber=response.text();
               cy.xpath('//div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[3]').should('contain.text','seconds ago')
             })
         })
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

    verifyDocumentNotInTheList()
    {
        cy.reload();
        cy.get('@document name').then((res)=>{
           var document=res.text();
           cy.log(document)
            cy.get('@loan number').then((response)=>{
              var  loanNumber=response.text();
              cy.log(loanNumber)
                cy.xpath('//tbody/tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]').should('not.exist');
            })
        })
    }

    verifyDocumentInTheList()
    {
        cy.get('@document name').then((res)=>{
            var document=res.text();
             cy.get('@loan number').then((response)=>{
               var  loanNumber=response.text();
               cy.xpath('//tbody/tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]').should('exist');
             })
         })
        
    }

    verifyDocumentAndItsStatusInTheCompleteTabList(status)
    {
        cy.get('@document name').then((res)=>{
          var  document=res.text();
            cy.get('@loan number').then((response)=>{
              var  loanNumber=response.text();
        this.verifyDocumentInTheList(document,loanNumber);
        this.verifyDocumentStatusInTheList(document,loanNumber,status);
            })
        })
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
        cy.xpath(selectors.tabHeadingText).should('contain.text',tabHeading);
    }

    selectTheDocumentInTheList()
    {
        cy.xpath(selectors.selectFirstDocument).should('exist').click();
        this.copyDocumentName();
        this.copyLoanNumber();
        cy.get('@document name').then((res)=>{
            cy.log(res.text())
        })
        cy.get('@loan number').then((res)=>{
            cy.log(res.text())
        })
        }
    

    clickArchiveButton()
    {
        cy.wait(5000);
        cy.get(selectors.archicveBttn).should('exist').click();
    }
    verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }

    verifyDocumentLastLocation(location)
    {
        cy.get('@document name').then((res)=>{
            var document=res.text();
             cy.get('@loan number').then((response)=>{
               var  loanNumber=response.text();
               cy.xpath('//tbody/tr/td[2]/div[text()="'+document+'"]/../following-sibling::td[text()="'+loanNumber+'"]/following-sibling::td[2]').should('have.text',location);
             })
         })
    }

    clickMoveToInboxButton()
    {
        cy.xpath(selectors.moveToInboxBttn).should('exist').click();
    }

    listDocumentsByStatus(status)
    {
        cy.xpath(selectors.documentStatusDropdown).should('exist').click();
        cy.xpath('//div/ul/li/span[text()="'+status+'"]').should('exist').click();
    }
    clickViewOfDocument()
    {
        cy.xpath(selectors.viewButtonOfFirstDocument).should('exist').click();
    }

    }
