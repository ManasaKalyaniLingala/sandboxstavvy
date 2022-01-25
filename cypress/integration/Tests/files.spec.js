/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Files } from "../Pages/files_page";
import { should } from "chai";
const login =new Login();
const files= new Files();
describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })
    
it("Create Purchase type File", ()=> {
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,"01/26/2022","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
    files.enterPurchasePrice("150");
    files.clickContinueButton();
    files.enterBorrowerAddress("jaya", "prakash", "manasa.lingala+123@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("01/20/2022","MANASA VENDOR")
    files.addForeclosureOrder("01/22/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyNavigatedToFileDetailsPage();
    files.verifyLoanNumber(loanNumber);
    files.veifyLoanType("Purchase");
    files.verifyAddressInFileDetailsPage("23700 West Bluff Road");
    files.navigateToFiles();
    files.clickOnCloseDateSorting();
    files.selectNoOfRows("25");
    files.verifyFileDetailsInTheList(loanNumber,"23700 West Bluff Road, Channahon");
})


it("create a refinance type file",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to File page
    files.navigateToFiles();

    // creating file
    files.clickCreateFileButton();
    files.clickRefinanceType();
    files.enterBasicInfo(loanNumber,"01/26/2022","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
    files.clickContinueButton();
    files.enterBorrowerAddress("jaya", "prakash", "manasa.lingala+123@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("01/20/2022","MANASA VENDOR")
    files.addForeclosureOrder("01/22/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();
    files.verifyMessage("Creating file...");
    
    //verify created file
    files.verifyNavigatedToFileDetailsPage();
    files.verifyLoanNumber(loanNumber);
    files.veifyLoanType("Refinance");
    files.verifyAddressInFileDetailsPage("23700 West Bluff Road");
    files.navigateToFiles();
    files.clickOnCloseDateSorting();
    files.selectNoOfRows("25");
    files.verifyFileDetailsInTheList(loanNumber,"23700 West Bluff Road, Channahon");
})


it("create a equity type file",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickEquityType();
    files.enterBasicInfo(loanNumber,"01/26/2022","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
    files.clickContinueButton();
    files.enterBorrowerAddress("jaya", "prakash", "manasa.lingala@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("01/20/2022","MANASA VENDOR")
    files.addForeclosureOrder("01/22/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify Created file
    files.verifyMessage("Creating file...");
    files.verifyNavigatedToFileDetailsPage();
    files.verifyLoanNumber(loanNumber);
    files.veifyLoanType("Equity");
    files.verifyAddressInFileDetailsPage("23700 West Bluff Road");
    files.navigateToFiles();
    files.clickOnCloseDateSorting();
    files.selectNoOfRows("25");
    files.verifyFileDetailsInTheList(loanNumber,"23700 West Bluff Road, Channahon");
})


it("navigate to file details page",()=>{
    var file="SN-945";
    
    //Navigate to File page
    files.navigateToFiles();

    //Navigate to File details page
    files.clickOnFile(file)
    files.verifyNavigatedToFileDetailsPage();

    //Verify file details
    files.verifyLoanNumber(file);
})


it("verify creating a file without property address",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to Files page
    files.navigateToFiles();

    //Create File
    files.clickCreateFileButton();
    files.enterLoanNumber(loanNumber);
    files.selectClosingDate("01/18/2022");
    files.selectLoanProcessor(" MANASA KALYANI    LINGALA");
    files.enterLoanAmount("77");
    files.enterPurchasePrice("98");
    files.clickContinueButton();

    //Verify error text
    files.verifyMessage("Address required");
})


it("verify listing files by no of rows",()=>{
    //Navigate to File
    files.navigateToFiles();

    //Select No of rows
    files.selectNoOfRows('25');

    //Verify No of Rows
    files.verifyNoOfFilesInTheList(25);

    //Select No of rows
    files.selectNoOfRows('5');

    //Verify No of Rows
    files.verifyNoOfFilesInTheList(5);

    //Select No of rows
    files.selectNoOfRows('10');

    //Verify No of rows
    files.verifyNoOfFilesInTheList(10);
})


it("Verify navigating to In Progress files",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to In progress files
    files.navigateToInProgressFilesPage();

    //Verify In Progress page
    files.verifyPageTitle("In Progress");
    files.verifyStatusTextOfFileInTheList("In progress");
})
it("Verify navigating to My favourites files",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to My favorites files
    files.navigateToMyFavoritesFilesPage();

    //Verify My favorites page
    files.verifyPageTitle("My Favorites");
})


it("verify navigating to Cancelled files",()=>{

    //Navigate to files
    files.navigateToFiles();

    //Navigate to Cancelled files
    files.navigateToCancelledFilesPage();

    //Verify Cancelled file page
    files.verifyPageTitle("Cancelled");
})


it("Verify navigating to Completed files",()=>{

    //Navigate to Files
    files.navigateToFiles();

    //Navigate to Completed files
    files.navigateToCompletedFilesPage();

    //Verify Completed files page
    files.verifyPageTitle("Completed");
    files.verifyStatusTextOfFileInTheList("Completed");
})


it("Verify adding document",()=>{

    //Navigate to Files
    files.navigateToFiles();

    //Add document
    files.clickOnFile("SN-975");
    files.uploadDocument("title_exam (4).pdf","Purchase Contract");
    files.clickUploadButton();

    //Verify added document
    files.verifyMessage("Documents uploaded!");
})


it("verify updating Loan Number",()=>{

    //Navigate to Files
    files.navigateToFiles();

    //Update loan number
    files.clickOnFile("file88");
    files.updateLoanNumber("file880");

    //Verify updated loan number
    files.verifyLoanNumber("file880");
})


it("Assign closer to file",()=>{
    var closer=" MANASA KALYANI    LINGALA";

    //Navigate to Files
    files.navigateToFiles();

    //Assign closer
    files.clickOnFile("SN-977");
    files.assignCloser(closer);

    //Verify assigned closer
    files.verifyAssignedCloserName(closer);
})


it("Reassign closer to file",()=>{
    var closer=" manasa m L";

    //Navigate to Files
    files.navigateToFiles();

    //Reassign closer
    files.clickOnFile("SN-975");
    files.reassignCloser(closer);

    //Verify reassigned closer
    files.verifyAssignedCloserName(closer);
})


it("assign Loan Processor",()=>{
    var loanProcessor=" manasa m L";

    //Navigate to Files
    files.navigateToFiles();

    //Assign Loan processor
    files.clickOnFile("SN-975")
    files.assignLoanProcessor(loanProcessor);

    //Verify assigned loan procesor
    files.verifyAssignedLoanProcessor(loanProcessor);
})
})