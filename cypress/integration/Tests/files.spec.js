/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Files } from "../Pages/files_page";
import { Meetings } from "../Pages/meetings_page";
import { Orders } from "../Pages/orders_page";
import { ESign } from "../Pages/eSign_page";


const { faker } = require('@faker-js/faker');

const login =new Login();
const files= new Files();
const orders=new Orders();
const eSign=new ESign();

describe("Files test cases" , ()=>{

    beforeEach("Login as valid user",()=>{

        //Login to application
         login.navigateToUrl();
         login.loginToApplication();
        })
    
it("Create Purchase type File", ()=> {

     var loanType="Purchase";
     var rateType="Fixed";

    //Navigate to Files page
     files.navigateToFiles();
 
    //Create file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyMessage("Creating file...");
     files.verifyCreatedFile(loanType,rateType);
     })


it("Create a Refinance type file",()=>{

    var loanType="Refinance";
    var rateType="Fixed";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyMessage("Creating file...");
     files.verifyCreatedFile(loanType,rateType);
     })


it("Create a equity type file",()=>{

     var loanType="Equity";
     var rateType="Fixed";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyMessage("Creating file...");
     files.verifyCreatedFile(loanType,rateType);
     })


it("Verify creating Floating Rate type Purchase file",()=>{

     var loanType="Purchase";
     var rateType="Floating";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyMessage("Creating file...");
     files.verifyCreatedFile(loanType,rateType);
      })


it("Verify creating Floating rate type Refinance file",()=>{

     var loanType="Refinance";
     var rateType="Floating";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyMessage("Creating file...");
     files.verifyCreatedFile(loanType,rateType);
      })


it("Verify creating Floating rate type Equity file",()=>{

     var loanType="Equity";
     var rateType="Floating";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyMessage("Creating file...");
     files.verifyCreatedFile(loanType,rateType);
    })


it("Verify creating file without assigning loan processor",()=>{
    
    var loanType="Purchase";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.selectLoanType(loanType);
     files.enterBasicInfo();
     files.enterPurchasePrice();

    //Verify creting file
     files.verifyContinueButtonDisabled();
     files.verifyErrorText('Select assigned user for file');
    })


it("Verify creating a file without property address",()=>{
   
     var loanType="Purchase";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.selectLoanType(loanType);
     files.enterLoanNumber();
     files.selectClosingDate();
     files.selectLoanProcessor();
     files.enterLoanAmount();
     files.enterPurchasePrice();

    //Verify Continue button is disabled and error text
     files.verifyContinueButtonDisabled();
     files.verifyErrorText("Valid address required");
     })


it("Verify creating file without filling Borrower details",()=>{

     var loanType="Purchase";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.selectLoanType(loanType);
     files.enterBasicInfo();
     files.selectLoanProcessor();
     files.enterPurchasePrice();
     files.clickContinueButton();
     files.clickContinueButton();
    
    //Verify created file
     files.verifyMessage("Each borrower must have a valid first and last name or valid entity name");
    })


it("Verify creating file wihtout adding orders",()=>{

     var loanType="Purchase";

    //Navigate to Files page
     files.navigateToFiles();

    //Create file
     files.clickCreateFileButton();
     files.selectLoanType(loanType);
     files.enterBasicInfo();
     files.selectLoanProcessor();
     files.enterPurchasePrice();
     files.clickContinueButton();
     files.enterBorrowerDetails();
     files.clickContinueButton();

    //Verify created file
     files.verifyMessage('Please select an order');
    })


it("Navigate to file details page",()=>{
    
    //Navigate to Files page
     files.navigateToFiles();
     files.navigateToActiveFilesTab();

    //Navigate to File details page
     files.navigateToFileDetailsPage();
     files.verifyNavigatedToFileDetailsPage();
 
    //Verify file details
     files.verifyLoanNumberInDetailsPage()
    })


it("Verify listing files by no of rows",()=>{
    
    //Navigate to Files
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

     var loanType="Purchase";
     var rateType="Fixed";
     var document="title_exam (4).pdf"

    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);
     files.verifyNavigatedToFileDetailsPage();

    //Add document
     files.uploadDocument(document);
     files.clickUploadButton();

    //Verify added document
     files.verifyMessage("Documents uploaded!");
     files.verifyAddedDocumentInTheList(document);
    })


it("Verify updating Loan Number",()=>{

     var loanType="Purchase";
     var rateType="Fixed";
     var fileName=faker.name.findName();

    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Update loan number
     files.updateLoanNumber(fileName);

    //Verify updated loan number
     files.verifyLoanNumber(fileName);
    })


it("Assign closer to file",()=>{

     var loanType="Purchase";
     var rateType="Fixed";

    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);
 
    //Assign closer
     files.assignCloser();
    })


it("Assign Loan Processor",()=>{

     var loanType="Purchase";
     var rateType="Fixed";
    
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Assign Loan processor
     files.assignLoanProcessor();
    })


it("Verify archiving file",()=>{

     var status="Archived"
     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    // Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);
    
    //Archive File
     files.archiveThefile();
     files.reloadThePage();

    //Verify archived file
     files.verifyFileStatusInFileDetailsPage(status);
    })
 

it("Verify reopening archived file",()=>{

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


it("Verify adding orders in file details page",()=>{
    
     var status="Pending";
     var foreclosureOrder="Foreclosure";
     var settlementOrder="Settlement";
     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    //Create a file
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Add order in File details page
     files.clickAddOrderButton();
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
     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

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
     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);
    
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

     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);
    
     files.copyTheLoanNumberInFileDetailsPage();

    //Make a file as Favorite or non-Favorite and then verify it
     files.verifyMakingFileAsFovoriteOrNonFavorite();
    })

    
it("Verify reassigning vendor for an order",()=>{

     var loanType="Purchase";
     var rateType="Fixed";
    
    //Navigate to Files
     files.navigateToFiles();

    //Creata a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Reassign the vendor for an order
     files.clickEditButtonOfAnOrder();
     files.clickReassignButton();
     files.selectVendorForReassigning();
     files.clickReassignOrderButton();

    //Verify reassigned vendor
     files.verifyReassignedVendor();
    })


it("Verify cancelling the order",()=>{

     var status="Rejected"
     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);
    
    //Reassign the vendor for an order
     files.clickEditButtonOfAnOrder();
     files.cancelTheOrder();

    //Verify the status of order
     files.verifyStatusOfOrder(status)
    })


it("Verify reopening a rejected order",()=>{

     var status1="Rejected";
     var status2="Pending";
     var loanType="Purchase";
     var rateType="Fixed";
     
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Reassign the vendor for an order
     files.clickEditButtonOfAnOrder();
     files.cancelTheOrder();

    //Verify the status of order
     files.verifyStatusOfOrder(status1);

    //Reopen a rejected order
     files.clickEditButtonOfAnOrder();
     files.clickReopenButton();

    //Verify reopened order
     files.verifyStatusOfOrder(status2);
    })


it("Verify creating Origination Order file",()=>{

     var loanType="Purchase";
     var rateType="Fixed";
     var settlementOrder="Settlement";
     var status="Pending";

    //Navigate to Orders page
     orders.navigateToOrders();

   //Create file
     files.clickCreateOrderButton();
     files.selectSettlementOrderInCreateOrderPage();
     files.selectSettlementVendorFromTheList();
     files.clickContinueButton();
     files.createAFile(loanType,rateType);

    //Verify created file
     files.verifyCreatedFile(loanType,rateType);
     files.verifyAddedOrderInTheFileDetailsPage(settlementOrder,status);
    })


it("Verify creating Servicing order file",()=>{

     var foreclosureOrder="Foreclosure";
     var status="Pending";

    //Navigate to Orders page
     orders.navigateToOrders();
     files.createAServicingOrderFile();

    //Verify created file
     files.verifyMessage("Successfully created order");
     files.verifyNavigatedToFileDetailsPage();
     files.verifyLoanNumber();
     files.verifyOrderTypeText(foreclosureOrder);
     files.verifyAddressInFileDetailsPage();
     files.verifyAddedOrderInTheFileDetailsPage(foreclosureOrder,status);
    })


it("Verify adding document for a servicing order files page",()=>{

     var document="title_exam (4).pdf"

     //Navigate to Orders page
     orders.navigateToOrders();

    //Create a servicving order file
     files.createAServicingOrderFile();

    //upload document to the file
     files.clickDocumentsButton();
     files.clickAddDocumentButton();
     files.attachDocumentInForeclosureOrdersPage(document);
     files.clickUploadButton();

    // Verify added document
     files.verifyMessage("Documents uploaded!");
     files.verifyAddedDocumentInTheServicingOrderFileDetailsPage(document)
    })


it("Verify adding eSign packet to the File",()=>{

     var loanType="Purchase";
     var rateType="Fixed";
     var packetTitle=faker.name.findName();
     var document="document2.pdf";
    
    //Navigate to Files
     files.navigateToFiles();

    //Create a File
     files.clickCreateFileButton();
     files.createAFile(loanType,rateType);

    //Add eSign packet to the file
     files.clickAddeSignPacketButton();
     eSign.creatingNewESignWithJustMeOption(packetTitle,document);

    //Verify added eSign packet to the file
     files.verifyAddedeSignInTheFileDetailsPage(packetTitle); 
    })

})