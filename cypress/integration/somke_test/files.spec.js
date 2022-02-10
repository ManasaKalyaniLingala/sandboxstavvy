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
    files.selectTwentyFiveRowsPerPage();

    //Create file
    files.clickCreateFileButton();
    files.clickPurchaseType();
    files.enterBasicInfo(loanNumber,"02/19/2022","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
    files.enterPurchasePrice("150");
    files.clickContinueButton();
    files.enterBorrowerDetails("Borrower", "1", "manasa.lingala+123@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("02/09/2022","MANASA VENDOR");
   // files.addForeclosureOrder("01/29/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,"Purchase","23700 West Bluff Road, Channahon");
    files.verifyAddedOrderInTheFileDetailsPage("Title","Pending","Today","MANASA VENDOR");
    files.navigateToFiles();
    files.selectTwentyFiveRowsPerPage();
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
    files.enterBasicInfo(loanNumber,"02/21/2022","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
    files.clickContinueButton();
    files.enterBorrowerDetails("jaya", "prakash", "manasa.lingala+123@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("02/09/2022","MANASA VENDOR")
   // files.addForeclosureOrder("01/28/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();
    files.verifyMessage("Creating file...");
    
    //verify created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,"Refinance","23700 West Bluff Road, Channahon");
    files.verifyAddedOrderInTheFileDetailsPage("Title","Pending","Today","MANASA VENDOR");
    files.navigateToFiles();
    files.selectTwentyFiveRowsPerPage();
    files.clickOnCloseDateSorting();
    files.verifyAddedFileInTheList(loanNumber,"23700 West Bluff Road, Channahon","jaya prakash","Title","02/20/2022");
})

it("create a equity type file",()=>{
    var loanNumber="Loan"+Math.floor(Math.random()*1000);

    //Navigate to Files page
    files.navigateToFiles();

    //Create file
    files.clickCreateFileButton();
    files.clickEquityType();
    files.enterBasicInfo(loanNumber,"02/21/2022","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
    files.clickContinueButton();
    files.enterBorrowerDetails("manasa", "kalyani", "manasa.lingala@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
    files.addTitleOrder("02/09/2022","MANASA VENDOR")
   // files.addForeclosureOrder("01/30/2022","MANASA VENDOR");
    files.clickContinueButton();
    files.clickCreateFileButtonOnReviewOfAFile();

    //Verify Created file
    files.verifyMessage("Creating file...");
    files.verifyFileDetailsInTheFileDetailsPage(loanNumber,"Equity","23700 West Bluff Road, Channahon");
    files.verifyAddedOrderInTheFileDetailsPage("Title","Pending","Today","MANASA VENDOR");
    files.navigateToFiles();
    files.selectTwentyFiveRowsPerPage();
    files.clickOnCloseDateSorting();
    files.verifyAddedFileInTheList(loanNumber,"23700 West Bluff Road, Channahon","manasa kalyani","Title","02/20/2022");
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

it("Verify navigating to Files page and its view",()=>{

    //Navigate to Files page
    files.navigateToFiles();

    //Verify Files page view
    files.verifyFilesPageView();
})

})