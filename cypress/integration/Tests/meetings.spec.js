/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Meetings } from "../Pages/meetings_page";

const { faker } = require('@faker-js/faker');

const login = new Login();
const meetings = new Meetings();

describe("Meetings/Closings test cases" , ()=>{

   beforeEach("Login as valid user",()=>{

        //Login to application as valid user
         login.navigateToUrl();
         login.loginToApplication();
        });


    it("Create New purchase Meeting ",()=>{
        
         var meetingType="Purchase";
         var role="Signer";

         meetings.createRonClosingMeeting(meetingType);

        //verification
         meetings.verifyCreatedMeeting(meetingType,role);
        })


    it("Create New Refinance Meeting ",()=>{
        
         var meetingType="Refinance";
         var role="Signer";

         meetings.createRonClosingMeeting(meetingType);

        //verification
         meetings.verifyCreatedMeeting(meetingType,role);  
        })


    it("Create New Equity Meeting ",()=>{
        
         var meetingType="Equity";
         var role="Signer";

         meetings.createRonClosingMeeting(meetingType);

        //verification
         meetings.verifyCreatedMeeting(meetingType,role);    
        })


    it("Create New modification Meeting ",()=>{

         var meetingType="Modification";
         var role="Signer";

         meetings.createRonClosingMeeting(meetingType);

        //verification
         meetings.verifyCreatedMeeting(meetingType,role);  
        })


    it("Verify creating a new closing meeting with an external notary",()=>{

         var meetingType="Modification";
         var role="Signer";
         var notaryRole="Notary";

        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.selectMeetingType(meetingType)
         meetings.enterFileId();
         meetings.selectPropertyAddress();
         meetings.enterMeetingInfo();
         meetings.clickTheNextBttn();
         meetings.addExternalNotary();

        //Verify added external Notary
         meetings.verifyExternalNotaryNameInCreateMeetingPage();

        //Creating meeting
         meetings.enterSignerInfo(); 
         meetings.clickOnCreateClosing();

        //verification
         meetings.verifyCreatedMeeting(meetingType,role);
         meetings.verifyAddedExternalNotary(notaryRole);
        })


    it("Verify creating closing meeting with an invalid signer email",()=>{

         var meetingType="Modification";
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.name.title();
    
        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.selectMeetingType(meetingType);
         meetings.enterFileId();
         meetings.selectPropertyAddress();
         meetings.enterMeetingInfo();
         meetings.clickTheNextBttn();
         meetings.selectHost();
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email);
        
        //Verification
         meetings.verifyCreateClosingButtonIsDisabled();
        })


    it("Verify creating a new closing meeting with an invalid external notary email",()=>{

         var notaryEmail=faker.name.title();
         var meetingType="Purchase";

        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.selectMeetingType(meetingType)
         meetings.enterFileId();
         meetings.selectPropertyAddress();
         meetings.enterMeetingInfo();
         meetings.clickTheNextBttn();
         meetings.clickAddExternalNotary();
         meetings.enterNotaryEmail(notaryEmail);
         meetings.clickAddNotaryButton();

        //Verify external notary
         meetings.verifyNextButtonIsDisabled();
         meetings.verifyErrorText("Please enter a valid email");
        })


    it("Verify navigated to closing details page", () =>{
        
        //navigating to closing details page
         meetings.clickTheMyMeetingsDropdown();
         meetings.clickTheSelectAllButton();
         meetings.navigatingToClosingDetailsPage();

        //verify fileId
         meetings.verifyNavigatedToClosingDetailsPage();
        })
    

    it("Verify switching between meeting list tabs", ()=>{

        //Switch to Past meetings tab
         meetings.navigateToPastMeetingsTab();

        //Verify navigates to Past meetings tab
         meetings.verifyNavigatedToMeetingsTab("completed");

         //Switch to Cancelled meetings tab
         meetings.navigateToCancelledMeetingsTab()

        //Verify navigates to Past meetings tab
         meetings.verifyNavigatedToMeetingsTab("cancelled");

         //Switch to Upcoming meetings tab
         meetings.navigateToUpcomingMeetingsTab();

        //Verify navigates to Past meetings tab
         meetings.verifyNavigatedToMeetingsTab("upcoming");   
        })


    it("Verify upload document to a meeting",()=>{

         var meetingType="Purchase";
         var document="title_exam (4).pdf"

        //Uploading document.
         meetings.navigateToUpcomingMeetingsTab();
         meetings.createRonClosingMeeting(meetingType);
         meetings.uploadDocument(document);

        //Verify added document.
         meetings.verifyPopupMessage("Documents uploaded!");
         meetings.verifyAddedDocumentName(document);
         })


    it("Verify adding attendee to the Meeting",()=>{

        var meetingType="Purchase"
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"
        var signer=signerFirstName+" "+signerMiddleName+" "+signerLastName; 
        var role="Signer";

        //Adding attendee
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType);
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited "+signerFirstName+" "+signerLastName+" as an attendee");
        meetings.verifyAddedAttendee(role,signerEmail,signer);
     })


    it("Verify adding observer to the meeting",()=>{

        var meetingType="Purchase"
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"
        var signer=signerFirstName+" "+signerMiddleName+" "+signerLastName;
        var attendeeType="Observer";


        //Adding attendee
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType)
        meetings.clickAddAttendeeButton();
        meetings.selectObserverAttendeeType();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone);
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited "+signerFirstName+" "+signerLastName+" as an attendee");
        meetings.verifyAddedAttendee(attendeeType,signerEmail,signer,);
      })


    it("Verify adding attendee with an existing attendee details",()=>{

        var meetingType="Purchase";

        //Adding attendee
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType);

        //Add attendee to the meeting with existing  signer details
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting();
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();
        //Verify error message
        meetings.verifyEmailErrorText("has already been invited to this meeting.")
        })


    it("Verify editing signer details",()=>{

        var meetingType="Purchase";
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"
        var signerName=signerFirstName+" "+signerMiddleName+" "+signerLastName;

        //Creating meeting
        meetings.createRonClosingMeeting(meetingType);

        //Editing signer details
        meetings.clickEditButtonOfSigner();
        meetings.clickOnEdit();
        meetings.editSignerDetails(signerFirstName,signerMiddleName,signerLastName,signerEmail);
        meetings.clickTheSaveButton();

        //verify edited signer.
        meetings.verifyEditedSigner(signerEmail);
        meetings.verifyEditedAttendeeName(signerName);
        })


    it("Verify editing signer details with an existing signer details",()=>{

        var meetingType="Purchase";
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signer=signerFirstName+" "+signerMiddleName+" "+signerLastName;
        var signerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
        var role="Signer";

        //Create a new Closing meeting
        meetings.createRonClosingMeeting(meetingType);

        //Adding attendee
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //Verify added signer
        meetings.verifyAddedAttendee(role,signerEmail,signer);

        //Edit the signer details with existing signer details
        meetings.clickEditButtonOfSigner(signerEmail);
        meetings.clickOnEdit();
        meetings.editSignerDetails();

        //verify edited signer.
        meetings.verifyErrorText("Signer cannot have the same email as another signer or an observer.")
        })


    it("Verify resending invite to signer",()=>{

        var meetingType="Purchase"
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"


        //Adding attendee
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType);
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();
        meetings.clickEditButtonOfSigner(signerEmail);
        meetings.clickTheResendInviteButton();

        //Verify invitation message
        meetings.verifyPopupMessage("Meeting invitation successfully resent to "+signerEmail);
        })


    it("Verify cancelling the meeting",()=>{

        var meetingType="Purchase";
        var status="Cancelled"

        //Create meeting
        meetings.createRonClosingMeeting(meetingType);

        //cancel the meeting
        meetings.clickTheMoreActionsDropdown();
        meetings.clicktheCancelButton();

        //Verify cancelled meeting
        meetings.verifyMeetingCardStatusInMeetingDetailsPage(status);
        meetings.verifyJoinButtonIsRemoved();
       })


    it("Verify creating meeting without giving signer details",()=>{

        var meetingType="Purchase"

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.selectMeetingType(meetingType);
        meetings.enterFileId();
        meetings.selectPropertyAddress();
        meetings.enterMeetingInfo();
        meetings.selectHost();

        //Moving to next page
        meetings.clickTheNextBttn();

        //Verify create closing button is disabled
        meetings.verifyCreateClosingButtonIsDisabled();
        })

    
    it("Verify creating meeting without selecting Notary/Host",()=>{

        var meetingType="Purchase"

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.selectMeetingType(meetingType);
        meetings.enterFileId();
        meetings.selectPropertyAddress();
        meetings.enterMeetingInfo();
        meetings.verifyNextButtonIsDisabled();
        })


    it("Verify creating meeting by not giving meeting info",()=>{

        var meetingType="Purchase"

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.selectMeetingType(meetingType);
        meetings.enterFileId();
        meetings.selectPropertyAddress();
        meetings.selectHost();

        //Verify create closing button is disabled
        meetings.verifyNextButtonIsDisabled();
        })
     

    it("Verify creating signing meeting",()=>{

        var role="Signer";

        //Creating a Signing meeting
        meetings.createASigningMeeting();

        //Verify created signing meeting
        meetings.verifyCreatedSigningMeeting(role);
        })


    it("Verify creating new signing meeting with multiple attendees(signer and observer)",()=>{

        var observerFirstName=faker.name.firstName();
        var observerMiddleName=faker.name.middleName();
        var observerLastName=faker.name.lastName();
        var observerPhone=faker.phone.phoneNumber();
        var observerEmail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com".toLowerCase()
        var attendeeType1="Signer";
        var attendeeType2="Observer";

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileId();
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.addAttendeeToTheMeeting(); 
        meetings.clickTheAddObserverButton();
        meetings.addAttendeeToTheMeeting(observerFirstName,observerMiddleName,observerLastName,observerEmail,observerPhone);
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyCreatedSigningMeeting(attendeeType1);
        meetings.verifyAttendeeType(attendeeType1);
        meetings.verifyAttendeeType(attendeeType2,observerEmail);
        })


    it("Verify creating signing meeting with an invalid signer email",()=>{

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.name.title();

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileId();
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone);

        //Verification
        meetings.verifyCreateClosingButtonIsDisabled();
        meetings.verifyEmailValidationErrorMessage("Please enter a valid email");
        })


    it("Verify creating a new signing meeting with an external notary",()=>{

        var role="Notary";

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileId();
        meetings.enterMeetingInfo();
        meetings.addExternalNotary();
        
        //Verify added external notary in Create meeting page
        meetings.verifyExternalNotaryNameInCreateMeetingPage();

        //Creating meeting
        meetings.addAttendeeToTheMeeting();
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyNavigatedToMeetingDetailsPage();
        meetings.verifyMeetingNameInSignigngMeetingDetailsPage();
        meetings.verifyAddedExternalNotary(role);
        })


    it("Verify creating new signing meeting with an invalid external notary email",()=>{

        var notaryEmail=faker.name.title();

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileId();
        meetings.enterMeetingInfo();
        meetings.clickAddExternalNotary();
        meetings.enterNotaryEmail(notaryEmail);
        meetings.clickAddNotaryButton();
        
        //verification
        meetings.verifyErrorText("Please enter a valid email");
        })


    it("Verify preparing a document for esigning",()=>{

        var meetingType="Purchase";
        var document="title_exam (4).pdf";
        var status="Ready for Signing";

        //Uploading document.
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType);
        meetings.uploadDocument(document);

        //Verify added document.
        meetings.verifyPopupMessage("Documents uploaded!");
        meetings.verifyAddedDocumentName(document);

        //Prepare the document for eSigning
        meetings.clickPrepareForEsigningLink();
        meetings.addAnnotation();
        meetings.clickMarkReadyForSigning();

        //Verify document status
        meetings.verifyDocumentStatusInEditDocumentPage(status)
        meetings.clickBackToMeetingDetailsLink();
        meetings.verifyDocumentStatusInMeetingDetailsPage(document,status)
        })


    it("Verify adding annotations to the document and not marking document ready for signing",()=>{

        var meetingType="Purchase";
        var document="title_exam (4).pdf";
        var status="Tagging in Progress"

        //Uploading document.
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType);
        meetings.uploadDocument(document);

        //Verify added document.
        meetings.verifyPopupMessage("Documents uploaded!");
        meetings.verifyAddedDocumentName(document);

        //Prepare the document for eSigning
        meetings.clickPrepareForEsigningLink();
        meetings.addAnnotation();

        //Verify document status
        meetings.verifyDocumentStatusInEditDocumentPage(status)
        meetings.clickBackToMeetingDetailsLink();
        meetings.verifyDocumentStatusInMeetingDetailsPage(document,status)   
        })


    it("Verify editing document",()=>{

        var meetingType="Purchase";
        var document="title_exam (4).pdf";
        var status="Ready for Signing"

        //Uploading document.
        meetings.navigateToUpcomingMeetingsTab();
        meetings.createRonClosingMeeting(meetingType);
        meetings.uploadDocument(document);

        //Verify added document.
        meetings.verifyPopupMessage("Documents uploaded!");
        meetings.verifyAddedDocumentName(document);

        //Prepare the document for eSigning
        meetings.clickPrepareForEsigningLink();
        meetings.addAnnotation();
        meetings.clickMarkReadyForSigning();

        //Verify document status
        meetings.verifyDocumentStatusInEditDocumentPage(status)
        
        //Edit document
        meetings.clickMakeChangesButton();
        meetings.addSignatureAnnotation();
        })


    it("Verify viewing verification details of signer",()=>{

        var meetingType="Purchase";

        // Create a meeting
        meetings.createRonClosingMeeting(meetingType);

        //Viewing verification details
        meetings.clickEditButtonOfSigner();
        meetings.clickViewVerificationResultsButton();

        //Verify viewing secutity details
        meetings.verifyViewingVerificationResults();
         })


    it("Verify archiving a completed meeting",()=>{

        //Navigate to meeting details page.
        meetings.navigateToPastMeetingsTab();
        meetings.navigatingToClosingDetailsPage();

        //Archive the meeting
        meetings.clickArchiveButton();

        //Verify meeting is archived
        meetings.verifyJoinButtonIsRemoved();

        //Unarchive the meeting
        meetings.clickUnarchiveButton();

        //Verify meeting is unarchived
        meetings.verifyJoinButtonExists()
        })


    it("Verify reassignin Notary/Host to the meeting",()=>{

        var meetingType="Purchase";

        //Creating a meeting
        meetings.createRonClosingMeeting(meetingType);

        //Reassign Notary/Host
        meetings.copyNotaryName();
        meetings.copyNotaryEmail();
        meetings.clickEditButtonOfNotary();
        meetings.clickReassignButton();
        meetings.selectHost();
        meetings.clickReassignButtonInReassignNotaryPage();

        //Verify reassigned notary
        meetings.verifyPopupMessage("Notary successfully reassigned");
        })


    it("Verify editing file id number",()=>{

        var meetingType="Purchase";
        var fileId = "file"+Math.floor(Math.random()*1000);

        //Creating a meeting
        meetings.createRonClosingMeeting(meetingType);
        
        //Edit the File Id Number
        meetings.clickTheEditButtonOfFileId();
        meetings.editTheFileIdNumber(fileId);
        meetings.clickTheSaveIconButton();

        //Verify edited File Id Number
        meetings.verifyFileId(fileId);
        })

    })

