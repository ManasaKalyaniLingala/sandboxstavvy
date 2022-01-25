import selectors from "../Selectors/files"
export class Files{
    navigateToFiles() {
        cy.xpath(selectors.filesSection).click()
    }
    clickPurchaseType()
    {
        cy.get(selectors.purachaseLoanType).click();
    }
    clickRefinanceType()
    {
        cy.get(selectors.refinanceLoanType).click();
    }
    clickEquityType()
    {
        cy.get(selectors.equityLoanType).click();
    }
    clickCreateFileButton() {
        cy.get(selectors.CreateFileButton).click()
    }

    selectPurchaseLoanType() {
        cy.get(selectors.purachaseLoanType).click()
    }

    selectLoanProcessor(loanProcessor) {
        cy.xpath(selectors.clickLoanProcessorDropDown).click()
        cy.xpath('//li//span[text()="'+loanProcessor+'"]').click();
    }

    enterLoanNumber(loanNumber) {
        cy.xpath(selectors.enterLoanNumber).type(loanNumber);
    }

    enterLoanAmount(loanAmount) {
        cy.get(selectors.enterLoanAmount).type(loanAmount);
    }

    enterPurchasePrice(purchasePrice) {
        cy.get(selectors.enterPurchasePrice).type(purchasePrice);
    }

    enterPropertyAddress(address) {
        cy.xpath(selectors.propertyAddressInputField).type(address);
        cy.xpath('//div[text()="'+address+'"]').click();
        cy.wait(1000);
    }

    selectClosingDate(date) {
        cy.xpath('(//input[@placeholder="MM/DD/YYYY"])[1]').type(date);
    }

    clickContinueButton() {
        cy.xpath(selectors.continueButtion).click();
    }

    clickCreateFileButtonOnReviewOfAFile() {
        cy.xpath(selectors.createFileButtonInReviewPageOfFile).click();
    }

    verifyCreatedFile(address) {
        cy.xpath('//div[text()="'+address+'"]').click();
    }

    enterBasicInfo(loanNumber, settlementClosingDate, loanProcessor, loanAmount, address) {
    
        this.enterLoanNumber(loanNumber);
        this.selectClosingDate(settlementClosingDate);
        this.selectLoanProcessor(loanProcessor);
        this.enterLoanAmount(loanAmount);
        this.enterPropertyAddress(address);
    }

    enterBorrowerAddress(firstName, lastName, email, phoneNumber, SSN, borrowerAddress) {
        cy.get(selectors.enterBorrowerFirstName).type(firstName);
        cy.get(selectors.enterBorrowerLastName).type(lastName);
        cy.get(selectors.enterBorrowerEmail).type(email);
        cy.xpath(selectors.enterPhoneNumberOfBorrower).clear();
        cy.xpath(selectors.enterPhoneNumberOfBorrower).type(phoneNumber);
        cy.xpath(selectors.enterSSNOfBorrower).clear();
        cy.xpath(selectors.enterSSNOfBorrower).type(SSN);
        cy.get(selectors.enterBorrowerAddress).type(borrowerAddress);
        cy.xpath('//div[text()="'+borrowerAddress+'"]').click();
        this.clickContinueButton();
    }
    addSettlementOrder(date,vendorName)
    {
      this.selectSettlementOrder();
      this.enterSettlementDate(date);
      this.selectSettlementVendorFromTheList(vendorName);
    }
    selectSettlementOrder()
    {
        cy.xpath(selectors.settlementOrderBttn).click();
    }
    enterSettlementDate(date)
    {
        cy.xpath(selectors.settlementDateBttn).click().type(date)
    }
    selectSettlementVendorFromTheList(vendorName)
    {
       cy.xpath(selectors.settlementVendorDropdown).click();
       cy.xpath('//ul/li[@title="'+vendorName+'"]').click();
    }
    addTitleOrder(date,vendorName)
    {
        this.selectTitleOrder();
        this.enterTitleDueDate(date);
        this.selectTitleVendorFromTheList(vendorName);
    }
    selectTitleOrder()
    {
        cy.xpath(selectors.titleOrderBttn).click();
    }
    enterTitleDueDate(date)
    {
        cy.xpath(selectors.titleDateBttm).type(date);
    }
    selectTitleVendorFromTheList(vendorName)
    {
        cy.xpath(selectors.titleVendorDropdown).click();
        cy.xpath('//ul/li[@title="'+vendorName+'"]').click();
    }
    addForeclosureOrder(date,vendorName)
    {
        this.selectForeclosurOrder();
        this.enterForeclosureDueDate(date);
        this.selectForeclosureServicerFromTheList(vendorName);
    }
    selectForeclosurOrder()
    {
        cy.xpath(selectors.foreclosureOrderBttn).click();
    }
    enterForeclosureDueDate(date)
    {
        cy.xpath(selectors.foreclosureDateBttn).type(date);
    }
    selectForeclosureServicerFromTheList(vendorName)
    {
        cy.xpath(selectors.servicerDropdown).click();
        cy.xpath('//ul/li[@title="'+vendorName+'"]').click();  
    }
    selectAppraisalOrder()
    {
        cy.xpath(selectors.appraisalOrderBttn).click();
    }
    selectCustomerFacingOrder(vendorName)
    {
        cy.xpath(selectors.bankruptcyOrderBttn).click();
        cy.xpath('//ul/li[@title="'+vendorName+'"]').click();
    }
    verifyNavigatedToFileDetailsPage()
    {
        cy.xpath(selectors.fileDeatilsPage).should('have.text',"File Details");
    }
    veifyLoanType(loanType)
    {
      cy.xpath(selectors.loanTypeTxt).should('have.text',loanType)
    }
    verifyLoanNumber(loanNumber)
    {
       cy.xpath(selectors.loanNumberText).should('have.text',loanNumber)
    }
    verifyAddressInFileDetailsPage(address)
    {
        cy.xpath(selectors.addressTextInFileDetailsPage).should('contain.text',address);
    }
    clickOnCloseDateSorting()
    {
        cy.xpath(selectors.closeDateSorting).click();
        cy.wait(3000);
    }
    verifyFileDetailsInTheList(loanNumber,address)
    {
        cy.xpath(selectors.loanNumberInTheList).should('contain.text',loanNumber);
        cy.xpath('//div[@class="table-body"]/div/div/div[3][text()="'+loanNumber+'"]/../div[1]/text()').should('contain.text',address);

    }
    verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }
    selectNoOfRows(numberOfRows)
    {   cy.wait(3000);
        cy.xpath('//select').select(numberOfRows);
    }
    verifyNoOfFilesInTheList(number)
    {
        cy.xpath('//div[@class="table-body"]').children().should('have.length', number);
    }
    verifyPageTitle(title)
    {
        cy.xpath(selectors.filesPageTitle).should('have.text',title)
    }
    navigateToInProgressFilesPage()
    {
      cy.get(selectors.inProgressBttn).click();
    }
    navigateToMyFavoritesFilesPage()
    {
        cy.get(selectors.myFavoritesBttn).click();
    }
    navigateToCancelledFilesPage()
    {
        cy.xpath(selectors.archivedBttn).click();
        cy.get(selectors.cancelledBtnn).click();
    }
    navigateToCompletedFilesPage()
    {
        cy.xpath(selectors.archivedBttn).click();
        cy.get(selectors.completedBttn).click();
    }
    verifyStatusTextOfFileInTheList(status)
    {
        cy.xpath(selectors.statusTxt).should('contain.text',status)
    }
    clickOnFile(file)
    {
        cy.contains(file).click();
    }
    uploadDocument(document,documentType)
    {
        this.clickDocumentsButton();
        this.clickAddDocumentButton();
        this.attachDocument(document);
        this.selectDocumentType(documentType);
    }
    clickDocumentsButton()
    {
        cy.get(selectors.documentsBttn).click();
    }
    clickAddDocumentButton()
    {
        cy.xpath(selectors.addDocumentBttn).click();
    }
    attachDocument(document)
    {
        cy.get(selectors.uploadDocumentField).attachFile(document);
    }
    clickUploadButton()
    {
        cy.xpath(selectors.uploadButton).click();
    }
    selectDocumentType(documentType)
    {
        cy.get(selectors.selectDocumentTypeDropDown).click();
        cy.xpath('//ul/li/span[text()="'+documentType+'"]').click();
    }
    selectVendor()
    {
        cy.get(selectors.sharedWithDropDown).click();
    }
    verifyAddedDocumentInTheList(documentName)
    {
        cy.xpath(selectors.addedDocumentName).should('have.text',documentName);
    }
    updateLoanNumber(loanNumber)
    {  
        this.clickSetLoanNumberButton();
        this.editLoanNumber(loanNumber);
        this.saveEditedLoanNumber();
    }
    clickSetLoanNumberButton()
    {
        cy.xpath(selectors.setLoanNumberBttn).click();
    }
    editLoanNumber(loanNumber)
    {
        cy.get(selectors.setLoanNumberInputTxBx).clear().type(loanNumber)
    }
    saveEditedLoanNumber()
    {
        cy.get(selectors.setLoanNumberSaveBttn).click();
    }
    clickOnAssignCloserButton()
    {
        cy.xpath(selectors.assignCloserBtnn).click();
    }
    selectCloserFromTheDropdown(closer)
    {
        cy.get(selectors.assignACloserDropDown).click();
        cy.xpath('//ul/li/span[text()="'+closer+'"]').click();
    }
    clickSaveButton()
    {
        cy.xpath(selectors.saveBttn).click();
    }
    assignCloser(closer)
    {
        this.clickOnAssignCloserButton();
        this.selectCloserFromTheDropdown(closer);
        this.clickSaveButton();
    }
    verifyAssignedCloserName(closer)
    {
        cy.xpath(selectors.closerName).should('have.text',closer);
    }
    clickReassignButton()
    {
        cy.xpath(selectors.reassignCloserBttn).click();
    }
    reassignCloser(closer)
    {
        this.clickReassignButton();
        this.selectCloserFromTheDropdown(closer);
        this.clickSaveButton();
    }
    clickAssignLoanProcessorLink()
    {
        cy.xpath(selectors.assignLoanProcessorLink).click();
    }
    selectLoanProcessorFromTheDropDown(loanProcessor)
    {
        cy.get(selectors.assignLoanProcessorDropDown).click();
        cy.xpath('//ul/li/span[text()="'+loanProcessor+'"]').click();
    }
    assignLoanProcessor(loanProcessor)
    {
        this.clickAssignLoanProcessorLink();
        this.selectLoanProcessorFromTheDropDown(loanProcessor);
        this.clickSaveButton();
    }
    verifyAssignedLoanProcessor(loanProcessor)
    {
        cy.xpath(selectors.loanProcessorName).should('have.text',loanProcessor)
    }


}

