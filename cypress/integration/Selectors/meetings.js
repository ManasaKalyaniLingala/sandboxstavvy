export default {
    createMeetingBttn: "[class=align-bottom]",
    meetingsLink:'(//a[@data-testid="nav-link-Meetings"])[1]',
    purchaseTypeBttn:"//*[text()='Purchase']",
    refinanceTypeBtnn: "//*[text()='Refinance']",
    equityTypeBtnn:"//*[text()='Equity']",
    modificationTypeBtnn:"//*[text()='Modification']",
    propertyAddressTextbx : '[data-testid="new-meeting-location-search-input"]',
    meetingDate: "[data-testid='new-meeting-date-datepicker-input']",
    startTime: '(//input[@name="timezone-dropdown"])[1]',
    timeZone: '(//input[@name="timezone-dropdown"])[2]',
    defaultTimeZoneText:'[placeholder="Select timezone"]',
    notary: '[name="notary"]',
    fisrtnameTxtbx:'[name="firstName"]',
    middleNameTxbx:'[name="middleName"]',
    lastNameTxtbx: '[name="lastName"]',
    phoneNumberTxtbx: '[inputmode="numeric"]',
    emailTxtbx:'[name="email"]',
    createClosingBttn: '[data-testid="review-create-meeting-btn"]',
    streetName: '[name="Street name"]',
    streetNumber: '[name="Street no."]',
    city:'[name="City"]',
    postalCode: '[name="ZIP Code"]',
    addressUnit:'[name="Unit/Apt"]',
    closingsBttn:"//*[text()='Closings']",
    closingDetailsPage:'//span[3]/text()',
    fileNumberTxBx:"[name='fileNumber']",
    fileId:'//div[3]/div/div[2]/text()',
    closingsLink:'//*[text()="Closings"]',
    scheduledMeetingsBttn:'//div[text()="Scheduled"]',
    completedMeetingsBttn:'//div[text()="Completed"]',
    cancelledMeetingsBttn:'//div[text()="Cancelled"]',
    meetingsHeading:'//h2/text()',
    meetingCardStatus:'(//*[@data-testid="meeting-card"]/div[2]/div/div[1]/span)[1]',
    filterByNotaryDropdown:'[placeholder="My meetings"]',
    addDocumentBttn:'//button[text()="+ Add document"]',
    addAttendeeBttn:'//button[text()="+ Add attendee"]',
    addAttendeeBttnInMeetingInfoPage:'//button[text()="Add attendee"]',
    uploadDocumentField:'#upload-doc',
    uploadButton:'//button[text()="Upload"]',
    documentName:'((//tbody)[2]/tr[last()]//td/div/div/text())[1]',
    addedAttendeeEmail:'(//tbody)[1]/tr/td[3]/text()',
    addedAttendeeName:'(//tbody)[1]/tr/td[1]/text()',
    transactionType:'//div[@class="text-base"][2]/text()',
    addressTextInMeetingDetailsPage:'//h3/div/text()',
    nextArrowButton:'[data-icon="long-arrow-right"]',
    loanNumberInList:'//div/div[1]/div[1][@class="flex flex-row"]/p[2]/text()',
    meetingCardInList:'//div[@data-testid="meeting-card"][1]',
    firstMeetingLoanNumber:'(//div/div[1]/div[1][@class="flex flex-row"]/p[2]/text())[1]',
    createNewPageText:'//div[@role="button"]/div/div',
    closingMeetingBttn:'//div[@role="button"]/div/div[text()="Closing Meeting"]',
    selectAttendeeTypeDropdown:'[placeholder="Select an option"]',
    observerAttendeeType:'[title="Observer"]',
    editBttn:'//span[text()="Edit"]',
    firstNameInEditSigner:'[placeholder="First name"]',
    middleNameInEditSigner:'[placeholder="Middle name"]',
    lastNameInEditSigner:'[placeholder="Last name"]',
    emailInEditSigner:'[placeholder="Email"]',
    saveButton:'//button[text()="Save"]',
    resendInviteBttn:'//li/span[text()="Resend invite"]',
    moreActionsBttn:'//button[text()="More actions"]',
    cancelBttn:'//li/span[text()="Cancel"]',
    meetingCardStatusInMeetingDetailsPage:'//div[@data-testid="meeting-detail-card"]/div/div/text()',
    joinButton:'//button[text()="Join"]',
}