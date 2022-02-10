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
        cy.get(selectors.propertyAddressInputField).type(address);
        cy.xpath('//div[text()="'+address+'"]').click();
        cy.wait(1000);
    }

    selectClosingDate(date) {
        cy.xpath('(//input[@placeholder="MM/DD/YYYY"])[1]').type(date);
    }

    clickContinueButton() {
        cy.xpath(selectors.continueButtion).click();
    }

    verifyContinueButtonDisabled()
    {
        cy.xpath(selectors.continueButtion).should('be.disabled');
    }

    verifyErrorText(errorText)
    {
        cy.get(selectors.errorText).should('have.text',errorText)
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

    enterBorrowerDetails(firstName, lastName, email, phoneNumber, SSN, borrowerAddress) {
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
        cy.xpath('//tbody/tr/td[2][text()="'+loanNumber+'"]/preceding-sibling::td/text()').should('contain.text',address);
    }
    verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }
    verifyNoOfRowsDropDown()
    {
        cy.get(selectors.noOfRowsDropDown).should('exist');
    }
    selectNoOfRowsPerPage(number)
    {
        cy.get(selectors.noOfRowsDropDown).should('exist').click();
        cy.xpath("//ul/li/span[text()='"+number+" per page']").click();
    }
    verifyNoOfFilesInTheList(number)
    {
        cy.xpath('//tbody').children().should('have.length', number);
    }
    verifyPageTitle(title)
    {
        cy.xpath(selectors.filesPageTitle).should('have.text',title)
    }


    navigateToInProgressFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.inProgressTab).should('exist').click();
    }

    navigateToMyFavoritesFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.favoritesTab).should('exist').click();
    }

    navigateToCancelledFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.cancelledTab).should('exist').click();
    }

    navigateToCompletedFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.completedTab).should('exist').click();
    }

    verifyNavigatedToTab(tab)
    {
        cy.xpath('//div[text()="'+tab+'"]').should('contain.class',"stavviz-tab-is-active");
        this.verifyFilesTabSubtitle("Files: "+tab+"");
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

    verifyCreateFileButton()
    {
        cy.get(selectors.CreateFileButton).should('exist');
    }

    verifySearchBar()
    {
        cy.get(selectors.fileSearchBar).should('exist');
    }

    verifyFilesTabSubtitle(subtitle)
    {
        cy.xpath(selectors.filesTabSubtitle).should('contain.text',subtitle)
    }

    verifyTabView()
    {
        this.verifyCreateFileButton();
        this.verifyPageTitle("Files");
        this.verifyNoOfRowsDropDown();
        this.verifySearchBar();
        cy.get(selectors.inProgressTab).should('exist');
        cy.get(selectors.cancelledTab).should('exist');
        cy.get(selectors.favoritesTab).should('exist');
        cy.get(selectors.completedTab).should('exist');
        cy.xpath(selectors.partyOrBorrowerColoumn).should('exist');
        cy.xpath(selectors.fileNameColoumn).should('exist');
        cy.xpath(selectors.closeDateColoumn).should('exist');
        cy.xpath(selectors.ordersColoumn).should('exist');
        cy.xpath(selectors.filesList).should('exist');
    }

    verifyMyFavoritesTabView()
    {
        this.verifyCreateFileButton();
        this.verifyPageTitle("Files");
        this.verifyNoOfRowsDropDown();
        this.verifySearchBar();
        cy.get(selectors.inProgressTab).should('exist');
        cy.get(selectors.cancelledTab).should('exist');
        cy.get(selectors.favoritesTab).should('exist');
        cy.get(selectors.completedTab).should('exist');
        cy.xpath(selectors.partyOrBorrowerColoumn).should('exist');
        cy.xpath(selectors.fileNameColoumn).should('exist');
        cy.xpath(selectors.closeDateColoumn).should('exist');
        cy.xpath(selectors.ordersColoumn).should('exist');
        cy.xpath(selectors.statusColoumn).should('exist');
        cy.xpath(selectors.filesList).should('exist');
    
    }
    

    verifyFilesPageView()
    {
      this.verifyCreateFileButton();
      this.verifyPageTitle("Files");
      this.verifyNoOfRowsDropDown();
      this.verifySearchBar();
      cy.get(selectors.inProgressTab).should('exist');
      cy.get(selectors.cancelledTab).should('exist');
      cy.get(selectors.favoritesTab).should('exist');
      cy.get(selectors.completedTab).should('exist');
      this.verifyFilesTabSubtitle("Files: In Progress");
      cy.xpath(selectors.filesList).should('exist');
    }

    verifyAddedOrderStatus(order,status)
    {
        cy.xpath('//div[@class="subtitle"]/../div[text()="'+order+'"]/../following-sibling::div/div/div[2]/div/div/text()').should('have.text',status)
    }

    verifyAdderOrderDueDate(order,duedate)
    {
        cy.xpath('//div[@class="subtitle"]/../div[text()="'+order+'"]/../following-sibling::div/div[3]/div[2]/text()').should('contain.text',duedate)
    }

    verifyAddedOrderVendor(order,vendor)
    {
        cy.xpath('//div[@class="subtitle"]/../div[text()="'+order+'"]/../following-sibling::div/div[5]/div[2]/text()').should('have.text',vendor)
    }

    verifyAddedOrder(order)
    {
        cy.xpath(selectors.addedOrderInFileDetailsPage).should('contain.text',order);
    }
    verifyAddedOrderInTheFileDetailsPage(order,status,duedate,vendor)
    {
        this.verifyAddedOrder(order);
        this.verifyAddedOrderStatus(order,status);
        this.verifyAdderOrderDueDate(order,duedate);
        this.verifyAddedOrderVendor(order,vendor);
    }

    verifyFileDetailsInTheFileDetailsPage(loanNumber,loanType,address)
    {
    this.verifyNavigatedToFileDetailsPage();
    this.verifyLoanNumber(loanNumber);
    this.veifyLoanType(loanType);
    this.verifyAddressInFileDetailsPage(address);
    }

    verifyFileAddressInTheList(fileId,address)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../preceding-sibling::td/text()').should('contain.text',address)
    }

    verifyBorrowerOfFileInTheList(fileId,borrower)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../preceding-sibling::td/div/text()').should('contain.text',borrower)
    }

    verifyAddedOrdersInTheList(fileId,orders)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../td[4]').should('contain.text',orders)
    }

    verifyClosingDateInTheList(fileId,closeDate)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../td[3]').should('have.text',closeDate);
    }

    verifyAddedFileInTheList(fileId,address,borrower,orders,closeDate)
    {
        this.verifyFileAddressInTheList(fileId,address);
        this.verifyBorrowerOfFileInTheList(fileId,borrower);
        this.verifyAddedOrdersInTheList(fileId,orders);
        this.verifyClosingDateInTheList(fileId,closeDate);
    }


}

