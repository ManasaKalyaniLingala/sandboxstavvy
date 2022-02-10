/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Files } from "../Pages/files_page";
import { should } from "chai";
const login =new Login();
const files= new Files();
describe("Files test cases" , ()=>{

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
    files.enterBasicInfo(loanNumber,"02/19/2022","MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)","100","23700 West Bluff Road, Channahon, IL, USA");

    files.enterPurchasePrice("150");
    files.clickContinueButton();
    files.enterBorrowerDetails("Borrower", "1", "manasa.lingala+123@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("02/10/2022","MANASA VENDOR");
    files.addForeclosureOrder("02/10/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,"Purchase","23700 West Bluff Road, Channahon");
    files.verifyAddedOrderInTheFileDetailsPage("Title","Pending","Today","MANASA VENDOR");
    files.verifyAddedOrderInTheFileDetailsPage("Foreclosure","Pending","Today","MANASA VENDOR");
    files.navigateToFiles();
    files.selectNoOfRowsPerPage("25");
    files.clickOnCloseDateSorting();
    files.verifyAddedFileInTheList(loanNumber,"23700 West Bluff Road, Channahon","Borrower","Title","02/18/2022");
})


it("create a refinance type file",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to File page
    files.navigateToFiles();

    // creating file
    files.clickCreateFileButton();
    files.clickRefinanceType();
    files.enterBasicInfo(loanNumber,"02/23/2022","MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)","100","23700 West Bluff Road, Channahon, IL, USA");
    files.clickContinueButton();
    files.enterBorrowerDetails("jaya", "prakash", "manasa.lingala+123@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("02/10/2022","MANASA VENDOR")
    files.addForeclosureOrder("02/10/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();
    files.verifyMessage("Creating file...");
    
    //verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,"Refinance","23700 West Bluff Road, Channahon");
    files.verifyAddedOrderInTheFileDetailsPage("Title","Pending","Today","MANASA VENDOR");
    files.verifyAddedOrderInTheFileDetailsPage("Foreclosure","Pending","Today","MANASA VENDOR");
    files.navigateToFiles();
    files.selectNoOfRowsPerPage("25");
    files.clickOnCloseDateSorting();
    files.verifyAddedFileInTheList(loanNumber,"23700 West Bluff Road, Channahon","jaya prakash","Foreclosure, Title","02/20/2022");
})


it("create a equity type file",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickEquityType();
    files.enterBasicInfo(loanNumber,"02/23/2022","MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)","100","23700 West Bluff Road, Channahon, IL, USA");
    files.clickContinueButton();
    files.enterBorrowerDetails("manasa", "kalyani", "manasa.lingala@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("02/10/2022","MANASA VENDOR")
    files.addForeclosureOrder("02/10/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify Created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,"Equity","23700 West Bluff Road, Channahon");
    files.verifyAddedOrderInTheFileDetailsPage("Title","Pending","Today","MANASA VENDOR");
    files.verifyAddedOrderInTheFileDetailsPage("Foreclosure","Pending","Today","MANASA VENDOR");
    files.navigateToFiles();
    files.selectNoOfRowsPerPage("25");
    files.clickOnCloseDateSorting();
    files.verifyAddedFileInTheList(loanNumber,"23700 West Bluff Road, Channahon","manasa kalyani","Foreclosure, Title","02/22/2022");
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


it.only("verify creating a file without property address",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to Files page
    files.navigateToFiles();

    //Create File
    files.clickCreateFileButton();
    files.enterLoanNumber(loanNumber);
    files.selectClosingDate("02/28/2022");
    files.selectLoanProcessor("MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)");
    files.enterLoanAmount("77");
    files.enterPurchasePrice("98");

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

    //Navigate to Files
    files.navigateToFiles();

    //Add document
    files.clickOnFile("SN-976");
    files.uploadDocument("title_exam (4).pdf","Purchase Contract");
    files.clickUploadButton();

    //Verify added document
    files.verifyMessage("Documents uploaded!");
})


it("verify updating Loan Number",()=>{

    //Navigate to Files
    files.navigateToFiles();

    //Update loan number
    files.clickOnFile("SN-976");
    files.updateLoanNumber("fileEdited");

    //Verify updated loan number
    files.verifyLoanNumber("fileEdited");
})


it("Assign closer to file",()=>{
    var closer="MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)";

    //Navigate to Files
    files.navigateToFiles();

    //Assign closer
    files.clickOnFile("SN-945");
    files.assignCloser(closer);

    //Verify assigned closer
    files.verifyAssignedCloserName("MANASA KALYANI LINGALA");
})

it("assign Loan Processor",()=>{
    var loanProcessor="MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)";

    //Navigate to Files
    files.navigateToFiles();

    //Assign Loan processor
    files.clickOnFile("SN-945")
    files.assignLoanProcessor(loanProcessor);

    //Verify assigned loan procesor
    files.verifyAssignedLoanProcessor("MANASA KALYANI LINGALA");
})
})