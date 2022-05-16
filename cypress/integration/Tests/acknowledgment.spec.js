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
         acknowledgment.clickOnCompletePage();
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
         acknowledgment.clickOnRejectHandlingTab();
         acknowledgment.verifyDocumentInTheList()
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
         acknowledgment.verifyRejectHandlingTab()
         acknowledgment.verifyDocumentListExists();
         acknowledgment.verifySearchDocuments();
         acknowledgment.verifyNoOfRowsPerPageDropDown();
        })


    it("Verify Navigating to Completed page and its view",()=>{
        
         var heading="Complete";

        //Navigate to acknowledgement meetings page
         acknowledgment.navigateToAcknowledgementPage();

        //Navigate to acknowledgement meetings page
         acknowledgment.clickOnCompletePage();

        //Verify Inbox page view
         acknowledgment.verifyPageHeading(heading);
         acknowledgment.verifyTabHeadingText(heading)
         acknowledgment.verifyDocumentListExists();
        })


    it("Verify navigating to Archived acknowledgements page and its view",()=>{
         
         var heading="Archived";

        //Navigate to acknowledgement meetings page
         acknowledgment.navigateToAcknowledgementPage();
 
        //Navigate to Archived page
         acknowledgment.navigateToArchivedPage();

        //Verify Archived page view
         acknowledgment.verifyPageHeading(heading);
         acknowledgment.verifyTabHeadingText(heading);
         acknowledgment.verifyDocumentListExists();
         acknowledgment.verifySearchDocuments();
         acknowledgment.verifyNoOfRowsPerPageDropDown();
       })

     
    })
