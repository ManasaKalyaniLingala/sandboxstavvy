export default{
    CreateFileButton : '[data-testid="create-file-btn"]',
    purachaseLoanType : '[data-button-group-text="Purchase"]',
    refinanceLoanType: '[data-button-group-text="Refinance"]',
    equityLoanType:'[data-button-group-text="Equity"]',
    clickLoanProcessorDropDown : '//label[text()="Loan Processor"]/..//div//input[@name="select-toggle"]',
    searchForLoanProcessor : 'input[class="border-none p-1"]',
    filesSection : '//a[text()="Files"]',
    enterLoanNumber : '//label[text()="Loan Number"]/..//div//input',
    clickClosingOrSettlementDate : '//label[text()="Closing or Settlement Date"]/..//div//input[@name="closing-date-input-datepicker-input"]',
    propertyAddressInputField : '//div//input[@placeholder="Property Address Search"]',
    enterLoanAmount : 'input[placeholder="Loan Amount"]',
    enterPurchasePrice : 'input[placeholder="Purchase Price"]',
    continueButtion : '//button[text()="Continue"]',
    enterBorrowerFirstName : 'input[placeholder="First Name"]',
    enterBorrowerLastName : 'input[placeholder="Last Name"]',
    enterBorrowerEmail : 'input[placeholder="Email"]',
    enterBorrowerAddress : 'input[placeholder="Borrower Address"]',
    enterSSNOfBorrower : '//label[text()="SSN"]/..//input',
    enterPhoneNumberOfBorrower : '//label[text()="Phone Number"]/..//input',
    createFileButtonInReviewPageOfFile : '//button[text()="Create file"]',
    fileDeatilsPage:'//section/div/div/span[3]/text()',
    loanNumberText:'(//section/div[4]/div/text())[1]',
    loanTypeTxt:'(//div[4]/div[2]/span/text())[1]',
    closeDateSorting:'//span[text()="Close Date"]',
    titleOrderBttn:'//div[@data-testid="title-order-button"]',
    titleDateBttm:'//div//input[@name="title-due-date-datepicker-input"]',
    titleVendorDropdown:'//input[@placeholder="Select Title Vendor"]',
    settlementOrderBttn:'//div[@data-testid="settlement-order-button"]',
    settlementVendorDropdown:'//input[@placeholder="Select Settlement Vendor"]',
    settlementDateBttn:'//div//input[@name="settlement-due-date-datepicker-input"]',
    foreclosureOrderBttn:'//div[@data-testid="foreclosure-order-button"]',
    foreclosureDateBttn:'//div//input[@name="foreclosure-due-date-datepicker-input"]',
    servicerDropdown:'//input[@placeholder="Select Servicer"]',
    bankruptcyOrderBttn:'//div[@data-testid="bankruptcy-order-button"]',
    appraisalOrderBttn:'//div[@data-testid="appraisal-order-button"]',
    backBttn:'//button[text()="Back"]',
    addressTextInFileDetailsPage:'//h3/div/text()',
    loanNumberInTheList:'//div[@class="table-body"]/div/div/div[3]/text()',
    filesPageTitle:'//h2/text()[2]',
    inProgressBttn:'[data-testid="inbox-in_progress"]',
    myFavoritesBttn:'[data-testid="inbox-favorites"]',
    cancelledBtnn:'[data-testid="inbox-rejected"]',
    completedBttn:'[data-testid="inbox-completed"]',
    archivedBttn:'//div[text()="Archived"]',
    statusTxt:'//div[@class="table-body"]//div/div/div[4]/text()',
    documentsBttn:'[data-testid="documents"]',
    addDocumentBttn:'//button[text()="+ Add document"]',
    uploadDocumentField:'#upload-doc',
    selectDocumentTypeDropDown:'[name="document-type-dropdown"]',
    sharedWithDropDown:'[placeholder="Select Vendor"]',
    uploadButton:'//button[text()="Upload"]',
    addedDocumentName:'//div[@class="table-body"]/div[last()]/div/div[2]/text()',
    setLoanNumberBttn:'//button[text()="Set loan number"]',
    setLoanNumberInputTxBx:'[placeholder="Set loan number"]',
    setLoanNumberSaveBttn:'[title="Save"]:nth-last-child(1)',
    assignCloserBtnn:'//div/div[text()="Closer"]/../span[text()="Assign"]',
    reassignCloserBttn:'//div/div[text()="Closer"]/../span[text()="Reassign"]',
    assignACloserDropDown:'[placeholder="Assign a Closer"]',
    saveBttn:'//button[text()="Save"]',
    closerName:'//div[4]/div[4]/text()',
    assignLoanProcessorLink:'//div[4]/div[3]/span[@class="text-link hover:underline cursor-pointer"]',
    assignLoanProcessorDropDown:'[placeholder="Assign a Loan Processor"]',
    loanProcessorName:'//div[4]/div[3]/text()'

}