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
    propertyAddressInputField : '[data-testid="location-search-container-input"]',
    enterLoanAmount : 'input[placeholder="Loan Amount"]',
    enterPurchasePrice : 'input[placeholder="Purchase Price"]',
    continueButtion : '//button[text()="Continue"]',
    enterBorrowerFirstName : 'input[placeholder="First Name"]',
    enterBorrowerLastName : 'input[placeholder="Last Name"]',
    enterBorrowerEmail : 'input[placeholder="Email"]',
    enterBorrowerAddress : '[data-testid="location-search-input-input"]',
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
    loanNumberInTheList:'//tbody/tr/td[2]',
    borrowerNameInTheLit:'//tbody/tr/td[2][text()="1234"]/preceding-sibling::td/div/text()',
    filesPageTitle:'//h2/text()',
    inProgressTab:'[data-testid="in_progress"]',
    favoritesTab:'[data-testid="favorites"]',
    cancelledTab:'[data-testid="rejected"]',
    completedTab:'[data-testid="completed"]',
    archivedBttn:'//div[text()="Archived"]',
    noOfRowsDropDown:'[placeholder="Select an option"]',
    fivePerPageText:'[title="5 per page"]',
    tenPerPageText:'[title="10 per page"]',
    twentyFivePerPageText:'//ul/li/span/text()',
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
    assignCloserBtnn:'//div[text()="Closer"]/following-sibling::span',
    assignACloserDropDown:'[placeholder="Assign a Closer"]',
    saveBttn:'//button[text()="Save"]',
    closerName:'//div[4]/div[4]/text()',
    assignLoanProcessorLink:'//div[text()="Loan Processor"]/following-sibling::span',
    assignLoanProcessorDropDown:'[placeholder="Assign a Loan Processor"]',
    loanProcessorName:'//div[4]/div[3]/text()',
    fileSearchBar:'[placeholder="Search files by ID, property, or borrower name"]',
    filesTabSubtitle:'//div[@class="subtitle mb-6"]/text()',
    filesList:'//tbody/tr',
    addedOrderInFileDetailsPage:'//div[@class="subtitle"]/../following-sibling::div/div/div/div/text()',
    partyOrBorrowerColoumn:'//tr[@class="relative"]/th/span[text()="Property / Borrowers"]',
    fileNameColoumn:'//tr[@class="relative"]/th/span[text()="Name"]',
    closeDateColoumn:'//tr[@class="relative"]/th/span[text()="Close Date"]',
    ordersColoumn:'//tr[@class="relative"]/th/span[text()="Orders"]',
    statusColoumn:'//tr[@class="relative"]/th/span[text()="Status"]',
    errorText:'[class="error-text mb-4"]',
    streetName: '[name="Street name"]',
    streetNumber: '[name="Street no."]',
    city:'[name="City"]',
    postalCode: '[name="ZIP Code"]',
    addressUnit:'[name="Unit/Apt"]', 
    firstFileInTheList:'//tbody/tr[2]/td[2]',
    actionsDropdown:'//button[text()="Actions"]',
    archiveFileBttn:'[title="Archive file"]',
    fileStatusInDetailsPage:'//div[@class="mb-4"]/div/text()',
    nextButton:'//div[text()="Next"]',
    lastPageNumber:'//div[@class="flex whitespace-nowrap"]/span[last()]/text()',
    reopenFileBttn:'[title="Reopen file"]',
    addOrderBttn:'//button[text()="+ Add order"]',
    submitOrderBttn:'//div/button[text()="Submit Order"]',
    floatingRateTyepBttn:'//div[@class="flex h-8"]/label[@for="-Floating"]',
    rateTypeText:'//div[@class="text-base"]/div[text()="Rate Type"]/../text()',
    tabSubtitleInFileDetailsPage:"(//div[contains(@class,'mb-6 grid')]//div/text())",
    startDiscussionBttn:'//button[text()="+ Start Discussion"]',
    certifiedDocuments:'[title="Certified Documents - Click to open"]',
    documents:"(//div[@title='Documents - Click to open']//span)[3]",
    messagesTabInFileDetails:'[title="Select Messages tab"]',
    detailsTabFileDetail:'[title="Select Details tab"]',
    subjectLine:'[placeholder="Subject Line"]',
    messageBody:'[placeholder="Message Body"]',
    sendButtonInBeginDiscussion:'//div[@class="stavviz-button-row text-center"]/button[text()="Send"]',
    vendorNameInMessageThread:'(//span[@class="thread-vendor"]/text())[1]',
    subjectInMessageThread:'(//div[@class="subject"]/text())[1]',
    lastMessage:'(//div[@class="last-message"]/text())[1]',
    userNameInProfile:'//div[@class="hover:text-brand-secondary py-2"]/text()',
    messageAuthor:'(//div[@class="message-author"]/text())[1]',
    lastMessageInMessageList:'(//div[@class="message"]/div)[last()]',
    nameSorting:'//th/span[@class="relative"][text()="Name"]',
    favouriteIcon:'[title="Favorite"]',
    favoriteText:"//h3/span/*[local-name()='svg']/*/text()",
    removeFromFavoritesIcon:'[title="Remove from favorites"]',
    fileInTheList:'//tbody/tr/td[2]/text()',
    followButton:'//button[text()="Follow"]',
    editButtonOfAnOrderl:'//div[@data-testid="stavviz-card"][1]/div/div[2]/div/div',
    reassignButtonOfOrder:'//li[@title="Reassign"]',
    selectVendorForReassignVendor:'[placeholder="Select  Vendor"]',
    reassignOrderButton:'//button[text()="Reassign Order"]',
    vendorNameInOrder:'//div[@data-testid="stavviz-card"][1]/div[2]/div[5]/div[2]',
    statusOfOrder:'//div[@data-testid="stavviz-card"][1]/div[2]/div[1]/div[2]/div/div/text()',
    cancelButtonOfOrder:"//li/span[text()='Cancel']",
    cancelItButton:"//button[text()='Yes, cancel it']",
    reopenBttnOfOrder:'//li/span[text()="Reopen"]',
    addClosingBttn:'//button[text()[1]="+ Add "]',
    searchDropContainer:'[class="search-dropdown-container"]',
    loanNumberInSearchcontainer:'//div[@class="search-dropdown-container"]/div/div[@class="result-item"]/div[@class="loan-number-borrowers"]/text()',
    meetingCardInDetailsPage:'//div[@data-testid="meeting-card"]',
    addressInMeetingCard:'//div[@data-testid="meeting-card"]/div[2]/div/p',
    loanNumberInMeetingCard:'//div[@data-testid="meeting-card"]/div[2]/div/div[2]/div[1]/div[1]/p[2]',
    documentDescription:'[name="other-description"]',

}