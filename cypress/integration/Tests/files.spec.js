/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Files } from "../Pages/files_page";
import { Meetings } from "../Pages/meetings_page";

const { faker } = require('@faker-js/faker');

const login =new Login();
const files= new Files();
const meetings=new Meetings();

describe("Files test cases" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })
    
it("Create Purchase type File", ()=> {

    var fileType="Purchase";
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var purchaseAmount=Math.floor(Math.random()*1000);
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();
    var propertyAddress=streetNumber+" "+streetName+", "+city;
    var titleOrder="Title";
    var foreclosureOrder="Foreclosure";
    var status="Pending";

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.enterPurchasePrice(purchaseAmount);
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueInCreateFile();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
 })


it("Create a refinance type file",()=>{

    var fileType="Refinance";
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();
    var propertyAddress=streetNumber+" "+streetName+", "+city;
    var titleOrder="Title";
    var foreclosureOrder="Foreclosure";
    var status="Pending";

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickRefinanceType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueInCreateFile();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
 })


it("Create a equity type file",()=>{

    var fileType="Equity";
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();
    var propertyAddress=streetNumber+" "+streetName+", "+city;
    var titleOrder="Title";
    var foreclosureOrder="Foreclosure";
    var status="Pending";

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickEquityType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueInCreateFile();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
 })


it("Verify creating Floating Rate type Purchase file",()=>{

    var fileType="Purchase";
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var purchaseAmount=Math.floor(Math.random()*1000);
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();
    var propertyAddress=streetNumber+" "+streetName+", "+city;
    var titleOrder="Title";
    var foreclosureOrder="Foreclosure";
    var status="Pending";
    var rateType="Floating";


    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickFloatingRateType();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.enterPurchasePrice(purchaseAmount);
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueInCreateFile();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
    files.verifyRateTypeOfFile(rateType);
    
 })

it("Verify creating Floating rate type Refinance file",()=>{

    var fileType="Refinance";
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();
    var propertyAddress=streetNumber+" "+streetName+", "+city;
    var titleOrder="Title";
    var foreclosureOrder="Foreclosure";
    var status="Pending";
    var rateType="Floating";

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickRefinanceType();
    files.clickFloatingRateType();
    files.selectLoanProcessor();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueInCreateFile();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
    files.verifyRateTypeOfFile(rateType);
 })


it("Verify creating Floating rate type Equity file",()=>{

    var fileType="Equity";
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();
    var propertyAddress=streetNumber+" "+streetName+", "+city;
    var titleOrder="Title";
    var foreclosureOrder="Foreclosure";
    var status="Pending";
    var rateType="Floating";

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickEquityType();
    files.clickFloatingRateType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueInCreateFile();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
    files.verifyRateTypeOfFile(rateType);
 })


it("Verify creating file without assigning loan processor",()=>{
    
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var purchaseAmount=Math.floor(Math.random()*1000);
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.enterPurchasePrice(purchaseAmount);

    //Verify creting file
    files.verifyContinueButtonDisabled();
    files.verifyErrorText('Select assigned user for file');
 })


it("Verify creating a file without property address",()=>{
   
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var purchaseAmount=Math.floor(Math.random()*1000);;


    //Navigate to Files page
    files.navigateToFiles();

    //Create File
    files.clickCreateFileButton();
    files.enterLoanNumber(loanNumber);
    files.selectClosingDate();
    files.selectLoanProcessor();
    files.enterLoanAmount(loanAmount);
    files.enterPurchasePrice(purchaseAmount);

    //Verify Continue button is disabled and error text
    files.verifyContinueButtonDisabled();
    files.verifyErrorText("Valid address required");
 })


it("Verify creating file without filling Borrower details",()=>{

    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var purchaseAmount=Math.floor(Math.random()*1000);
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    
    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.enterPurchasePrice(purchaseAmount);
    files.clickContinueButton();
    files.clickContinueButton();
    
    //Verify created file
    files.verifyMessage("Each borrower must have a valid first and last name or valid entity name");
 })


it("Verify creating file wihtout adding orders",()=>{

    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=1+Math.floor(Math.random())*100;
    var purchaseAmount=Math.floor(Math.random()*1000);
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    files.selectLoanProcessor();
    files.enterPurchasePrice(purchaseAmount);
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.clickContinueButton();

    //Verify created file
    files.verifyMessage('Please select an order');
 })


it("Navigate to file details page",()=>{
    
    //Navigate to File page
    files.navigateToFiles();
    files.navigateToActiveFilesTab();

    //Navigate to File details page
    files.navigateToFileDetailsPage();
    files.verifyNavigatedToFileDetailsPage();

    //Verify file details
    files.verifyLoanNumberInDetailsPage()
 })


it("Verify listing files by no of rows",()=>{
    //Navigate to File
    files.navigateToFiles();
    files.navigateToActiveFilesTab();

    //Select No of rows
    files.selectNoOfRowsPerPage("5");

    //Verify no of rows
    files.verifyNoOfFilesInTheList(5);

    //Select No of rows
    files.selectNoOfRowsPerPage("10");

    //Verify no of rows
    files.verifyNoOfFilesInTheList(10);
 })


it("Verify navigating to Files page and its view",()=>{

    //Navigate to Files page
    files.navigateToFiles();

    //Verify Files page view
    files.verifyFilesPageView();
 })


it("Verify switching between files tabs",()=>{

    //Navigate to Files page
    files.navigateToFiles();
    files.verifyFilesPageView();

    //Navigate to In Active files tab
    files.navigateToActiveFilesTab()
    files.verifyNavigatedToTab("Active");

    //Navigate to Archived files tab
    files.navigateToArchivedFilesTab();
    files.verifyNavigatedToTab("Archived");

    //Navigate to Cancelled files tab
    files.navigateToCancelledFilesTab();
    files.verifyNavigatedToTab("Cancelled");

    //Navigate to Favorites tab
    files.navigateToMyFavoritesFilesTab();
    files.verifyNavigatedToTab("My Favorites");

    //Navigate to Active tab
    files.navigateToActiveFilesTab();
    files.verifyNavigatedToTab("Active")
 })


it("Verify navigating to Active files tab and its view",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to Active files tab
    files.navigateToActiveFilesTab()

    //Verify navigated to Active files tab
    files.verifyNavigatedToTab("Active");

    //Verify Active files tab view
    files.verifyTabView();
 })


it("Verify navigating to My favourites files tab and its view",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to My favorites files
    files.navigateToMyFavoritesFilesTab();

    //Verify My favorites page
    files.verifyNavigatedToTab("My Favorites");

    //Verify My Favorites page view
    files.verifyMyFavoritesTabView();
 })


it("Verify navigating to Cancelled files tab and its view",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to Cancelled files
    files.navigateToCancelledFilesTab();

    //Verify Cancelled file page
    files.verifyNavigatedToTab("Cancelled");

    //Verify Cancelled page view
    files.verifyTabView();
 })


it("Verify navigating to Archived files tab and view",()=>{

    //Navigate to Files
    files.navigateToFiles();

    //Navigate to Archived files
    files.navigateToArchivedFilesTab();

    //Verify navigated Archied files tab 
    files.verifyNavigatedToTab("Archived");

    //Verify Archived tab view
    files.verifyTabView();
 })


it("Verify adding document",()=>{

    var document="title_exam (4).pdf"

    //Navigate to Files
    files.navigateToFiles();
    files.createAFile();
    files.verifyNavigatedToFileDetailsPage();

    //Add document
    files.uploadDocument(document);
    files.clickUploadButton();

    //Verify added document
    files.verifyMessage("Documents uploaded!");
 })


it("Verify updating Loan Number",()=>{

    var fileName=faker.name.findName();

    //Navigate to Files
    files.navigateToFiles();
    files.createAFile();

    //Update loan number
    files.updateLoanNumber(fileName);

    //Verify updated loan number
    files.verifyLoanNumber(fileName);
 })


it("Assign closer to file",()=>{

    //Navigate to Files
    files.navigateToFiles();
    files.createAFile();

    //Assign closer
    files.assignCloser();
 })

it("Assign Loan Processor",()=>{

    //Navigate to Files
    files.navigateToFiles();
    files.createAFile();

    //Assign Loan processor
    files.assignLoanProcessor();
  })

it("Verify archiving file",()=>{

    var status="Archived"

    //Navigate to files
    files.navigateToFiles();
    files.createAFile();

    //Archive File
    files.archiveThefile();
    files.reloadThePage();

    //Verify archived file
    files.verifyFileStatusInFileDetailsPage(status);
 })

it.skip("Verify reopening archived file",()=>{

    var status="Active";

    //Navigate to files
    files.navigateToFiles();

    //Reopen archived files.
    files.navigateToArchivedFilesTab();
    files.navigateToFileDetailsPage();
    files.reopenTheArchivedFile();

    //Verify reopened file
    files.verifyFileStatusInFileDetailsPage(status);
  })


it.skip("Verify adding orders in file details page",()=>{
    
    var status="Pending";
    var foreclosureOrder="Foreclosure";
    var settlementOrder="Settlement"

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.createAFile();

    //Add order in File details page
    files.clickAddOrderButton();
    files.selectForeclosurOrder();
    files.selectSettlementOrder();
    files.addSettlementOrder();
    files.addForeclosureOrder();
    files.clickSubmitOrderButton();

    //Verify added orders in details page
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(settlementOrder,status);
 })


it("Verify switching between Details, Messages and Documents tabs",()=>{

    var documentsTab="Documents";
    var messagesTab="Messages";
    var detailsTab="Details";
    var detailsSutbtitle="Orders";

    //Navigate to files
    files.navigateToFiles();
    files.createAFile();

    //Switch to "Documents tab"
    files.clickDocumentsButton();

    //Verify documents tab
    files.verifyNavigatedToTabInDetailsPage(documentsTab)
    files.verifyTabSubtitleInFileDetailsPage(documentsTab);
    files.verifyDocuments();
    files.verifyCertifiedDocuments();
    files.verifyAddDocumentsButton();

    //Switch to "Details" tab
    files.clickDetailsTab()

    //Verify Details tab
    files.verifyNavigatedToTabInDetailsPage(detailsTab)
    files.verifyTabSubtitleInFileDetailsPage(detailsSutbtitle);
    files.verifyAddOrderButton();

    //Switch to "Messages" tab
    files.clickMessagesTab();

    //Verify messaged tab
    files.verifyNavigatedToTabInDetailsPage(messagesTab);
    files.verifyTabSubtitleInFileDetailsPage(messagesTab);
    files.verifyStartDiscuttionButton();
 })


it("Verify messaging in file details page",()=>{

    var subject=faker.name.findName();
    var message=faker.name.firstName();

    //Create a file
    files.createAFile();

    //Start discussion
    files.clickMessagesTab();
    files.clickStartDiscussionButton();
    files.selectVendorForDiscussion();
    files.enterSubjectLine(subject);
    files.enterMessageBody(message);
    files.clickSendButton();

    //Verify message thread
    files.verifyVendorInMessageThread();
    files.verifySubjectInMessageThread(subject);
    files.verifyLastMessageInMessageThread(message);
    files.verifyMessageAuthor();
    files.verifyLastMessageInMessageList(message);
 })


it("Verify making a file favorite or non favorite",()=>{

    //Navigate to files
    files.navigateToFiles();
    files.createAFile();
    files.copyTheLoanNumberInFileDetailsPage();

    //Make a file as Favorite or non-Favorite and then verify it
    files.verifyMakingFileAsFovoriteOrNonFavorite();
  })

it("Verify reassigning vendor for an order",()=>{

    //Create a file
    files.createAFile();

    //Reassign the vendor for an order
    files.clickEditButtinOfAnOrder();
    files.clickReassignButton();
    files.selectVendorForReassigning();
    files.clickReassignOrderButton();

    //Verify reassigned vendor
    files.verifyReassignedVendor();
  })


it("Verify cancelling the order",()=>{

    var status="Rejected"

    //creating a file
    files.createAFile();

    //Reassign the vendor for an order
    files.clickEditButtinOfAnOrder();
    files.cancelTheOrder();

    //Verify the status of order
    files.verifyStatusOfOrder(status)
   })


it("Verify reopening a rejected order",()=>{

    var status1="Rejected";
    var status2="Pending";

    //creating a file
    files.createAFile();

    //Reassign the vendor for an order
    files.clickEditButtinOfAnOrder();
    files.cancelTheOrder();

    //Verify the status of order
    files.verifyStatusOfOrder(status1);

    //Reopen a rejected order
    files.clickEditButtinOfAnOrder();
    files.clickReopenButton();

    //Verify reopened order
    files.verifyStatusOfOrder(status2)
     })


})