/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Files } from "../Pages/files_page";

const { faker } = require('@faker-js/faker');

const login =new Login();
const files= new Files();
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
    files.enterPurchasePrice(purchaseAmount);
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
})


it("create a refinance type file",()=>{

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
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
})


it("create a equity type file",()=>{

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
    files.clickContinueButton();
    files.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    files.addTitleOrder();
    files.addForeclosureOrder();
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,fileType,propertyAddress);
    files.verifyAddedOrderInTheFileDetailsPage(titleOrder,status);
    files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
})


it("navigate to file details page",()=>{
    
    //Navigate to File page
    files.navigateToFiles();

    //Navigate to File details page
    files.navigateToFileDetailsPage();
    files.verifyNavigatedToFileDetailsPage();

    //Verify file details
    files.verifyLoanNumberInDetailsPage()
})


it("verify creating a file without property address",()=>{
   
    var loanNumber="Loan"+Math.floor(Math.random()*1000);
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


it("verify listing files by no of rows",()=>{
    //Navigate to File
    files.navigateToFiles();

    //Select No of rows
    files.selectNoOfRowsPerPage("5");

    //Verify no of rows
    files.verifyNoOfFilesInTheList(5);

    //Select No of rows
    files.selectNoOfRowsPerPage("25");

    //Verify no of rows
    files.verifyNoOfFilesInTheList(25);

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
    files.verifyNavigatedToTab("In Progress");

    //Navigate to completed tab
    files.navigateToCompletedFilesTab();
    files.verifyNavigatedToTab("Completed");

    //Navigate to Cancelled tab
    files.navigateToCancelledFilesTab();
    files.verifyNavigatedToTab("Cancelled");

    //Navigate to Favorites tab
    files.navigateToMyFavoritesFilesTab();
    files.verifyNavigatedToTab("My Favorites");

})

it("Verify navigating to In Progress files tab and its view",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to In progress tab
    files.navigateToInProgressFilesTab();

    //Verify navigated to In progress tab
    files.verifyNavigatedToTab("In Progress");

    //Verify In Progress tab view
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


it("verify navigating to Cancelled files tab and its view",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to Cancelled files
    files.navigateToCancelledFilesTab();

    //Verify Cancelled file page
    files.verifyNavigatedToTab("Cancelled");

    //Verify Cancelled page view
    files.verifyTabView();
})


it("Verify navigating to Completed files tab and view",()=>{

    //Navigate to Files
    files.navigateToFiles();

    //Navigate to Completed files
    files.navigateToCompletedFilesTab();

    //Verify navigated Completed files tab 
    files.verifyNavigatedToTab("Completed");

    //Verify Completed tab view
    files.verifyTabView();
})


it("Verify adding document",()=>{

    var document="title_exam (4).pdf"

    //Navigate to Files
    files.navigateToFiles();

    //Add document
    files.navigateToFileDetailsPage()
    files.uploadDocument(document);
    files.clickUploadButton();

    //Verify added document
    files.verifyMessage("Documents uploaded!");
})


it("verify updating Loan Number",()=>{

    var fileName=faker.name.findName();

    //Navigate to Files
    files.navigateToFiles();

    //Update loan number
    files.navigateToFileDetailsPage()
    files.updateLoanNumber(fileName);

    //Verify updated loan number
    files.verifyLoanNumber(fileName);
})


it("Assign closer to file",()=>{

    var closer="Wilton c Hintz (Guadalupe58@hotmail.com)";
    var closerName="Wilton c Hintz";

    //Navigate to Files
    files.navigateToFiles();

    //Assign closer
    files.navigateToFileDetailsPage();
    files.assignCloser(closer);

    //Verify assigned closer
    files.verifyAssignedCloserName(closerName);
})

it("assign Loan Processor",()=>{

    var loanProcessor="Wilton c Hintz (Guadalupe58@hotmail.com)";
    var loanProcessorName="Wilton c Hintz";

    //Navigate to Files
    files.navigateToFiles();

    //Assign Loan processor
    files.navigateToFileDetailsPage()
    files.assignLoanProcessor(loanProcessor);

    //Verify assigned loan procesor
    files.verifyAssignedLoanProcessor(loanProcessorName);
})
})