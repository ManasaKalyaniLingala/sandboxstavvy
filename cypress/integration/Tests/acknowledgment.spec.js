/// <reference types="cypress" />

import { Login } from"../Pages/login_page";
import { Acknowledgement } from "../Pages/acknowledgement_page";

const login=new Login();
const acknowledgment=new Acknowledgement();

describe("Acknowledgment test cases" , ()=>{

    beforeEach("Login as valid user",()=>{

        login.navigateToUrl();
        login.loginToApplication();
    })


    it("Verify approving without acknowledgment",()=>{

         var text="Approved";
         var status="Complete";

         //Navigate to Acknowledgement page
         acknowledgment.navigateToAcknowledgementPage();

         //Approving without aknowledgement
         acknowledgment.clickStartQCOfDocument();
         acknowledgment.selectApproveNoAcknowledgement();
         acknowledgment.clickSubmitButton();

         //verify approved document
         acknowledgment.verifyQualityControlStatusText(text);
         acknowledgment.verifyApprovedWithNoAcknowledgememtQAText();
         acknowledgment.clickBackToInboxButton();
         acknowledgment.clickOnCompleteTab();
         acknowledgment.verifyDocumentAndItsStatusInTheCompleteTabList(status);
        })


    it("Verify rejecting document",()=>{

         var status="Rejected";

         //Navigate to Acknowledgement page
         acknowledgment.navigateToAcknowledgementPage();
         acknowledgment.navigateToInboxPage();

         //Rejecting
         acknowledgment.clickStartQCOfDocument();
         acknowledgment.selectReject();
         acknowledgment.clickSubmitButton();

         //Verify rejected document
         acknowledgment.verifyQualityControlStatusText(status);
         acknowledgment.clickBackToInboxButton();
         acknowledgment.clickOnCompleteTab();
         acknowledgment.verifyDocumentAndItsStatusInTheCompleteTabList(status)
     })


    it("Verify moving document from Initial Review to Acknowledge tab by selecting Approve - Acknowledgement Required in Quality control",()=>{
            
        //Navigating to Acknowledgement page
        acknowledgment.navigateToAcknowledgementPage();
        acknowledgment.navigateToInboxPage()
        
        //Selecting "Approve – Acknowledgement Required"
        acknowledgment.clickStartQCOfDocument();
        acknowledgment.selectApproveAcknowledgmentRequired();
        acknowledgment.clickSubmitButton();

        //Verify document
        acknowledgment.verifyApprovedWithAcknowledgmentQAText();
        acknowledgment.clickBackToInboxButton();
        acknowledgment.clickOnAcknowledgeTab();
        acknowledgment.verifyDocumentInTheList();
        acknowledgment.verifyDocumentLastReviewedInTheList(5);
     })


    it("Verify Viewing completed document",()=>{

         var status="Completed";
         var text="Approved";

         //Navigate to Acknowledgment page
         acknowledgment.navigateToAcknowledgementPage();

         //Viewing completed document
         acknowledgment.clickOnCompleteTab();
         acknowledgment.listDocumentsByStatus(status)
         acknowledgment.clickViewOfDocument();
         acknowledgment.verifyQualityControlStatusText(text);
         acknowledgment.verifyApprovedWithNoAcknowledgememtQAText();
     })


    it("Verify viewing rejected document",()=>{

         var status="Rejected";
         var text ="Rejected";

         //Navigate to Acknowledgment page
         acknowledgment.navigateToAcknowledgementPage();

         //Viewing rejected document
         acknowledgment.clickOnCompleteTab();
         acknowledgment.listDocumentsByStatus(status);
         acknowledgment.clickViewOfDocument();
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


    it("Verify archiving 'initial review' document",()=>{

        
    })
     
    })
