/// <reference types="cypress" />

import { Login } from"../Pages/login_page";
import { Acknowledgement } from "../Pages/acknowledgement_page";

const login=new Login();
const acknowledgment=new Acknowledgement();

describe("Acknowledgment test cases" , ()=>{

    beforeEach("Login as valid user",()=>{

        login.navigateToUrl();
        login.loginToApplication("manasa.lingala@qualitlabs.com","16c31a0_486");
     })

     it("Verify approving without acknowledgment",()=>{

         var document="certified_test doc4.pdf";
         var loanNumber="Remote signing2";
         var text="Approved";
         var status="Complete";

         //Navigate to Acknowledgement page
         acknowledgment.navigateToAcknowledgementPage();

         //Approving without aknowledgement
         acknowledgment.clickStartQCOfDocument(document,loanNumber);
         acknowledgment.selectApproveNoAcknowledgement();
         acknowledgment.clickSubmitButton();

         //verify approved document
         acknowledgment.verifyQualityControlStatusText(text);
         acknowledgment.verifyApprovedWithNoAcknowledgememtQAText();
         acknowledgment.clickBackToInboxButton();
         acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
         acknowledgment.verifyDocumentAndItsStatusInTheCompleteTabList(document,loanNumber,status);
     })

     it("Verify rejecting document",()=>{

         var document="certified_test doc1.pdf";
         var loanNumber="Remote signing2";
         var status="Rejected";

         //Navigate to Acknowledgement page
         acknowledgment.navigateToAcknowledgementPage();

         //Rejecting
         acknowledgment.clickStartQCOfDocument(document,loanNumber);
         acknowledgment.selectReject();
         acknowledgment.clickSubmitButton();

         //Verify rejected document
         acknowledgment.verifyQualityControlStatusText(status);
         acknowledgment.clickBackToInboxButton();
         acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
         acknowledgment.verifyDocumentAndItsStatusInTheCompleteTabList(document,loanNumber,status)
     })


     it("Verify moving document from Initial Review to Acknowledge tab by selecting Approve - Acknowledgement Required in Quality control",()=>{
            
        var document="certified_document2.pdf";
        var loanNumber="Remote signing2";

        //Navigating to Acknowledgement page
        acknowledgment.navigateToAcknowledgementPage();
        
        //Selecting "Approve – Acknowledgement Required"
        acknowledgment.clickStartQCOfDocument(document,loanNumber);
        acknowledgment.selectApproveAcknowledgmentRequired();
        acknowledgment.clickSubmitButton();

        //Verify document
        acknowledgment.verifyApprovedWithAcknowledgmentQAText();
        acknowledgment.clickBackToInboxButton();
        acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
        acknowledgment.clickOnAcknowledgeTab();
        acknowledgment.verifyDocumentInTheList(document,loanNumber);
        acknowledgment.verifyDocumentLastReviewedInTheList(document,loanNumber);
     })


     it("Verify Viewing completed document",()=>{

         var document="certified_test doc4.pdf";
         var loanNumber="Remote signing2";
         var status="Complete";
         var text="Approved by MANASA KALYANI LINGALA";

         //Navigate to Acknowledgment page
         acknowledgment.navigateToAcknowledgementPage();

         //Viewing completed document
         acknowledgment.clickOnCompleteTab();
         acknowledgment.verifyDocumentInTheList(document,loanNumber);
         acknowledgment.verifyDocumentStatusInTheList(document,loanNumber,status);
         acknowledgment.clickViewOfDocument(document,loanNumber);
         acknowledgment.verifyQualityControlStatusText(text);
         acknowledgment.verifyApprovedWithNoAcknowledgememtQAText();
     })

     it("Verify viewing rejected document",()=>{

         var document="certified_test doc1.pdf";
         var loanNumber="Meeting 123";
         var status="Rejected";
         var text ="Rejected by MANASA KALYANI LINGALA";

         //Navigate to Acknowledgment page
         acknowledgment.navigateToAcknowledgementPage();

         //Viewing rejected document
         acknowledgment.clickOnCompleteTab();
         acknowledgment.verifyDocumentInTheList(document,loanNumber);
         acknowledgment.verifyDocumentStatusInTheList(document,loanNumber,status);
         acknowledgment.clickViewOfDocument(document,loanNumber);
         acknowledgment.verifyQualityControlStatusText(text);
     })

     it("Verify navigating to Acknowledgement Inbox page and its view",()=>{

        var heading="Acknowledgement";

        //Navigate to acknowledgement page
        acknowledgment.navigateToAcknowledgementPage();

        //Verify acknowledgment page view
        acknowledgment.verifyPageHeading(heading);
        acknowledgment.verifyInitialReviewTab();
        acknowledgment.verifyAcknowledgeTab();
        acknowledgment.verifyFinalReviewTab();
        acknowledgment.verifyCompleteTab();
        acknowledgment.verifyDocumentListExists();
        acknowledgment.verifySearchDocuments();
        acknowledgment.verifyNoOfRowsPerPageDropDown();
     })

     it("Verify Navigating to Acknowledgement Mettings page and its view",()=>{
        
        var heading="Acknowledgement Meetings";

        //Navigate to acknowledgement meetings page
        acknowledgment.navigateToAcknowledgementPage();

        //Navigate to acknowledgement meetings page
        acknowledgment.navigateToMeetingsPage();

        //Verify Inbox page view
        acknowledgment.verifyPageHeading(heading);
        acknowledgment.verifyDocumentListExists();
     })

     it("Verify navigating to Archived acknowledgements page and its view",()=>{
         
        var heading="Acknowledgement";
        var tabHeading="Archived";

        //Navigate to acknowledgement meetings page
        acknowledgment.navigateToAcknowledgementPage();

        //Navigate to Archived page
        acknowledgment.navigateToArchivedPage();

        //Verify Archived page view
        acknowledgment.verifyPageHeading(heading);
        acknowledgment.verifyTabHeadingText(tabHeading);
        acknowledgment.verifyDocumentListExists();
        acknowledgment.verifySearchDocuments();
        acknowledgment.verifyNoOfRowsPerPageDropDown();
     })

     it("verify archiving document of Initial Review",()=>{

        var document="certified_test doc5.pdf";
        var loanNumber="Remote signing2";
        var location="Initial Review";
        var tabHeading1="Initial Review";
        var tabHeading2="Archived"

        //Navigating to Aknowledgement page
        acknowledgment.navigateToAcknowledgementPage();
        acknowledgment.verifyTabHeadingText(tabHeading1)
 
        //Archive document in Initial Review
        acknowledgment.selectTheDocumentInTheList(document,loanNumber);
        acknowledgment.clickArchiveButton();

        //Verify archived doucment
        acknowledgment.verifyMessage('Entry archived!');
        acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
        acknowledgment.navigateToArchivedPage();
        acknowledgment.verifyTabHeadingText(tabHeading2);
        acknowledgment.verifyDocumentInTheList(document,loanNumber);
        acknowledgment.verifyDocumentLastLocation(document,loanNumber,location)
     })

     it("Verify moving archived Inital Review document to inbox",()=>{

        var document="certified_test doc5.pdf";
        var loanNumber="Remote signing2";
        var tabHeading1="Archived";
        var tabHeading2="Initial Review";
        
        
        //Navigating to Acknowledgement page
        acknowledgment.navigateToAcknowledgementPage();

        // Navigating to Archived page
        acknowledgment.navigateToArchivedPage();
        acknowledgment.verifyTabHeadingText(tabHeading1);
        acknowledgment.selectTheDocumentInTheList(document,loanNumber);
        acknowledgment.clickMoveToInboxButton();

        //Verify document moved to initial Review
        acknowledgment.verifyMessage('Entry moved to inbox!');
        acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
        acknowledgment.navigateToInboxPage();
        acknowledgment.verifyTabHeadingText(tabHeading2);
        acknowledgment.verifyDocumentInTheList(document,loanNumber);
     })

     it("verify archiving document of Acknowledge",()=>{

        var document="certified_document2.pdf";
        var loanNumber="Remote signing2";
        var location="Acknowledge";
        var tabHeading1="Acknowledge";
        var tabHeading2="Archived";

        //Navigating to Aknowledgement page
        acknowledgment.navigateToAcknowledgementPage();

        //Navigate to Acknowledge tab
        acknowledgment.clickOnAcknowledgeTab();
        acknowledgment.verifyTabHeadingText(tabHeading1)

        //Archive document in Initial Review
        acknowledgment.selectTheDocumentInTheList(document,loanNumber);
        acknowledgment.clickArchiveButton();

        //Verify archived doucment
        acknowledgment.verifyMessage('Entry archived!');
        acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
        acknowledgment.navigateToArchivedPage();
        acknowledgment.verifyTabHeadingText(tabHeading2);
        acknowledgment.verifyDocumentInTheList(document,loanNumber);
        acknowledgment.verifyDocumentLastLocation(document,loanNumber,location);
     })

     it("verify archiving completed document in Complete tab",()=>{

        var document="certified_test doc4.pdf";
        var loanNumber="Remote signing2";
        var location="Complete";
        var tabHeading1="Completed";
        var tabHeading2="Archived";

        //Navigating to Aknowledgement page
        acknowledgment.navigateToAcknowledgementPage();

        //Navigate to Acknowledge tab
        acknowledgment.clickOnCompleteTab();
        acknowledgment.verifyTabHeadingText(tabHeading1)

        //Archive document in Initial Review
        acknowledgment.selectTheDocumentInTheList(document,loanNumber);
        acknowledgment.clickArchiveButton();

        //Verify archived doucment
        acknowledgment.verifyMessage('Entry archived!');
        acknowledgment.verifyDocumentNotInTheList(document,loanNumber);
        acknowledgment.navigateToArchivedPage();
        acknowledgment.verifyTabHeadingText(tabHeading2);
        acknowledgment.verifyDocumentInTheList(document,loanNumber);
        acknowledgment.verifyDocumentLastLocation(document,loanNumber,location);
     })

     
    })
