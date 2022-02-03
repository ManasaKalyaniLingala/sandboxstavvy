export default {
    createMeetingBttn: "[class=align-bottom]",
    meetingsLink:'(//a[@data-testid="nav-link-Meetings"])[1]',
    purchaseTypeBttn:"//*[text()='Purchase']",
    refinanceTypeBtnn: "//*[text()='Refinance']",
    equityTypeBtnn:"//*[text()='Equity']",
    modificationTypeBtnn:"//*[text()='Modification']",
    propertyAddressTextbx : "[placeholder='Property Address Search']",
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
    streetNumber: '[name="Street number"]',
    postalCode: '[name="Postal code"]',
    addressUnit:'[name="Address unit"]',
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
    addedAttendeeEmail:'(//tbody)[1]/tr[last()]/td[3]/text()',
    
}