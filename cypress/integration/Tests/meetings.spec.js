/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Meetings } from "../Pages/meetings_page";

const { faker } = require('@faker-js/faker');

const login = new Login();
const meetings = new Meetings();

describe("Meetings/Closings test cases" , ()=>{

   beforeEach("Login as valid user",()=>{
         login.navigateToUrl();
         login.loginToApplication();
        });


    it("Create New purchase Meeting ",()=>{
        
         var fileId = "file"+Math.floor(Math.random()*1000);
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.internet.email().toLowerCase()
         var transactionType="Purchase";
         var address=streetNumber+" "+streetName+", "+city


        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
         meetings.selectHost();
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
         meetings.clickOnCreateClosing();

        //verification
         meetings.verifyNavigatedToClosingDetailsPage();
         meetings.verifyFileId(fileId);
         meetings.verifyAddressInMeetingDetailsPage(address);
         meetings.verifyTransactionType(transactionType);
        })


    it("Create New Refinance Meeting ",()=>{
        
         var fileId = "file"+Math.floor(Math.random()*1000);``
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.internet.email().toLowerCase()
         var transactionType="Refinance";
         var address=streetNumber+" "+streetName+", "+city

        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.clickOnRefinanceType()
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
         meetings.selectHost();
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
         meetings.clickOnCreateClosing();

        //verification
         meetings.verifyNavigatedToClosingDetailsPage();
         meetings.verifyFileId(fileId);
         meetings.verifyAddressInMeetingDetailsPage(address);
         meetings.verifyTransactionType(transactionType);
        })


    it("Create New Equity Meeting ",()=>{

         var fileId = "file"+Math.floor(Math.random()*1000);
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.internet.email().toLowerCase()
         var transactionType="Equity";
         var address=streetNumber+" "+streetName+", "+city

        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.clickOnEquityType();
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
         meetings.selectHost();
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
         meetings.clickOnCreateClosing();

        //verification
         meetings.verifyNavigatedToClosingDetailsPage();
         meetings.verifyFileId(fileId);
         meetings.verifyAddressInMeetingDetailsPage(address);
         meetings.verifyTransactionType(transactionType);
        })


    it("Create New modification Meeting ",()=>{

         var fileId = "file"+Math.floor(Math.random()*1000);
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.internet.email().toLowerCase()
         var transactionType="Modification";
         var address=streetNumber+" "+streetName+", "+city

        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.clickOnModificationType()
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
         meetings.selectHost();
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
         meetings.clickOnCreateClosing();

        //verification
         meetings.verifyNavigatedToClosingDetailsPage();
         meetings.verifyFileId(fileId);
         meetings.verifyAddressInMeetingDetailsPage(address);
         meetings.verifyTransactionType(transactionType);
        })


    it("Verify creating a new closing meeting with an external notary",()=>{

         var fileId = "file"+Math.floor(Math.random()*1000);
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.internet.email().toLowerCase()
         var notaryFirstName=faker.name.firstName();
         var notaryMiddleName=faker.name.middleName();
         var notaryLastName=faker.name.lastName();
         var notaryEmail=faker.internet.email().toLowerCase();
         var transactionType="Purchase";
         var address=streetNumber+" "+streetName+", "+city;
         var externalNotaryName=notaryFirstName+" "+notaryMiddleName+" "+notaryLastName;
         var attendeeType="Notary";


        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.clickOnPurchaseType();
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
         meetings.addExternalNotary(notaryEmail,notaryFirstName,notaryMiddleName,notaryLastName);

        //Verify added external notary in Create meeting page
         meetings.verifyExternalNotaryNameInCreateMeetingPage(externalNotaryName);

        //Creating meeting
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
         meetings.clickOnCreateClosing();

        //verification
         meetings.verifyNavigatedToClosingDetailsPage();
         meetings.verifyFileId(fileId);
         meetings.verifyAddressInMeetingDetailsPage(address);
         meetings.verifyAddedAttendeeName(externalNotaryName);
         meetings.verifyAttendeeType(notaryEmail,attendeeType)
         meetings.verifyTransactionType(transactionType);
        })


    it("Verify creating closing meeting with an invalid signer email",()=>{

         var fileId = "file"+Math.floor(Math.random()*1000);
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var signerFirstName=faker.name.firstName();
         var signerMiddleName=faker.name.middleName();
         var signerLastName=faker.name.lastName();
         var signerPhone=faker.phone.phoneNumber();
         var email=faker.name.title();
    
        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.clickOnPurchaseType();
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
         meetings.selectHost();
         meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
        
        //Verification
         meetings.verifyCreateClosingButtonIsDisabled();
        })


    it("Verify creating a new closing meeting with an invalid external notary email",()=>{

         var fileId = "file"+Math.floor(Math.random()*1000);
         var propertyAddress=1+Math.floor(Math.random())*100;
         var streetName=faker.address.streetName();
         var streetNumber=propertyAddress;
         var city=faker.address.cityName();
         var postalCode=faker.address.zipCode();
         var notaryEmail=faker.name.title();


        //creating meeting
         meetings.clickOnCreateMeeting();
         meetings.clickTheClosingMeetingButton();
         meetings.clickOnPurchaseType();
         meetings.enterFileNumber(fileId);
         meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
         meetings.enterMeetingInfo();
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
    

    it("Verify navigating to scheduled meetings page", ()=>{

        //Navigate to scheduled meeitngs
         meetings.clickTheMyMeetingsDropdown();
         meetings.clickTheSelectAllButton();
         meetings.navigateToScheduledMeetings();

        //Verify Scheduled meeitngs page
         meetings.verifyNavigatedToScheduledMeetings();
         meetings.verifyMeetingCardStatus(" Upcoming");
        })


    it("Verify navigating to completed meetings page", ()=>{

        //Navigate to completed meetings
         meetings.clickTheMyMeetingsDropdown();
         meetings.clickTheSelectAllButton();
         meetings.navigateToCompletedMeetings();

        //Verify completed meetings page
         meetings.verifyNavigatedToCompletedMeetings();
         meetings.verifyMeetingCardStatus(" Completed");
        })


    it("Verify navigating to Cancelled meetings page", ()=>{

        //Navigate to cancelled meetings
        meetings.clickTheMyMeetingsDropdown();
        meetings.clickTheSelectAllButton();
        meetings.navigateToCancelledMeetings();

        //Verify cancelled meetings page
        meetings.verifyNavigatedToCancelledMeetings();
        meetings.verifyMeetingCardStatus(" Cancelled");
     })


    it("Verify upload document to a meeting",()=>{

        var document="title_exam (4).pdf"

        //Uploading document.
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
        meetings.uploadDocument(document);

        //Verify added document.
        meetings.verifyPopupMessage("Documents uploaded!")
        meetings.verifyAddedDocumentName(document);
     })


    it("Verify add attendee to the Meeting",()=>{

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.internet.email().toLowerCase();
        var signer=signerFirstName+" "+signerLastName;


        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited "+signer+" as an attendee");
        meetings.verifyAddedSigner(signerEmail);
     })


    it("Verify adding observer to the meeting",()=>{

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.internet.email().toLowerCase();
        var signer=signerFirstName+" "+signerLastName;
        var attendeeType="Observer";


        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
        meetings.clickAddAttendeeButton();
        meetings.selectObserverAttendeeType();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited "+signer+" as an attendee");
        meetings.verifyAddedSigner(signerEmail);
        meetings.verifyAttendeeType(signerEmail,attendeeType);
      })


    it("Verify adding attendee with an existing attendee details",()=>{

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.internet.email().toLowerCase();
        var signer=signerFirstName+" "+signerLastName;
        var attendeeType="Signer";


        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited "+signer+" as an attendee");
        meetings.verifyAddedSigner(signerEmail);
        meetings.verifyAttendeeType(signerEmail,attendeeType);

        //Adding existing attendee
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //Verify error message
        meetings.verifyErrorText(signerEmail+" has already been invited to this meeting.")
    })


    it("Verify editing signer details",()=>{

        var signerFirstName1=faker.name.firstName();
        var signerMiddleName1=faker.name.middleName();
        var signerLastName1=faker.name.lastName();
        var signerPhone1=faker.phone.phoneNumber();
        var signerEmail1=faker.internet.email().toLowerCase();
        var signerFirstName2=faker.name.firstName();
        var signerMiddleName2=faker.name.middleName();
        var signerLastName2=faker.name.lastName();
        var signerEmail2=faker.internet.email().toLowerCase();


        //Adding attendee
        meetings.createMeeting();

        //Adding attendee
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName1,signerMiddleName1,signerLastName1,signerEmail1,signerPhone1)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();
        meetings.verifyAddedSigner(signerEmail1);
        meetings.clickEditButtonOfSigner(signerEmail1);
        meetings.clickOnEdit();
        meetings.editSignerDetails(signerFirstName2,signerMiddleName2,signerLastName2,signerEmail2);
        meetings.clickTheSaveButton();

        //verify edited signer.
        meetings.verifyEditedSigner(signerEmail2,signerEmail1);
        meetings.verifyEditedAttendeeName(signerFirstName2+" "+signerMiddleName2+" "+signerLastName2,signerFirstName1+" "+signerMiddleName1+" "+signerLastName1);
       })


    it("Verify editing signer details with an existing signer details",()=>{

        var signerFirstName1=faker.name.firstName();
        var signerMiddleName1=faker.name.middleName();
        var signerLastName1=faker.name.lastName();
        var signerPhone1=faker.phone.phoneNumber();
        var signerEmail1=faker.internet.email().toLowerCase();
        var signerFirstName2=faker.name.firstName();
        var signerMiddleName2=faker.name.middleName();
        var signerLastName2=faker.name.lastName();
        var signerEmail2=faker.internet.email().toLowerCase();
        var signerPhone2=faker.phone.phoneNumber();


        //Create a new Closing meeting
        meetings.createMeeting();

        //Adding attendee
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName1,signerMiddleName1,signerLastName1,signerEmail1,signerPhone1)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //Verify added signer
        meetings.verifyAddedSigner(signerEmail1);

        //Adding attendee
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName2,signerMiddleName2,signerLastName2,signerEmail2,signerPhone2)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //Verify added signer
        meetings.verifyAddedSigner(signerEmail2);

        //Edit the signer details with existing signer details
        meetings.clickEditButtonOfSigner(signerEmail1);
        meetings.clickOnEdit();
        meetings.editSignerDetails(signerFirstName2,signerMiddleName2,signerLastName2,signerEmail2);

        //verify edited signer.
        meetings.verifyErrorText("Signer cannot have the same email as another signer or an observer.")
    })


    it("Verify resending invite to signer",()=>{

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.internet.email().toLowerCase();


        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();
        meetings.clickEditButtonOfSigner(signerEmail);
        meetings.clickTheResendInviteButton();

        //Verify invitation message
        meetings.verifyPopupMessage("Meeting invitation successfully resent to "+signerEmail);
     })


    it("Verify cancelling the meeting",()=>{

        var status="Cancelled"

        //Create meeting
        meetings.createMeeting();

        //cancel the meeting
        meetings.clickTheMoreActionsDropdown();
        meetings.clicktheCancelButton();

        //Verify cancelled meeting
        meetings.verifyMeetingCardStatusInMeetingDetailsPage(status);
        meetings.verifyJoinButtonIsRemoved();
     })


    it("Verify creating meeting without giving signer details",()=>{

        var fileId = "file"+Math.floor(Math.random()*1000);
        var propertyAddress=1+Math.floor(Math.random())*100;
        var streetName=faker.address.streetName();
        var streetNumber=propertyAddress;
        var city=faker.address.cityName();
        var postalCode=faker.address.zipCode();

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.clickOnPurchaseType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.clickTheNextBttn()

        //Verify create closing button is disabled
        meetings.verifyCreateClosingButtonIsDisabled();
     })

    
    it("Verify creating meeting without selecting Notary/Host",()=>{

        var fileId = "file"+Math.floor(Math.random()*1000);
        var propertyAddress=1+Math.floor(Math.random())*100;
        var streetName=faker.address.streetName();
        var streetNumber=propertyAddress;
        var city=faker.address.cityName();
        var postalCode=faker.address.zipCode();
    

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.clickOnPurchaseType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.enterMeetingInfo();
        meetings.verifyNextButtonIsDisabled();
     })


    it("Verify creating meeting by not giving meeting info",()=>{

        var fileId = "file"+Math.floor(Math.random()*1000);
        var propertyAddress=1+Math.floor(Math.random())*100;
        var streetName=faker.address.streetName();
        var streetNumber=propertyAddress;
        var city=faker.address.cityName();
        var postalCode=faker.address.zipCode();
       
        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.clickOnPurchaseType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.selectHost();

        //Verify create closing button is disabled
        meetings.verifyNextButtonIsDisabled();
      })
     

    it("Verify creating signing meeting",()=>{

        var fileId = "signing meeting"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var email=faker.internet.email().toLowerCase();


        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileNumber(fileId);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,email,signerPhone); 
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyMeetingNameInSignigngMeetingDetailsPage(fileId)
       })


    it("Verify creating new signing meeting with multiple attendees(signer and observer)",()=>{

        var fileId = "file"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.internet.email().toLowerCase()
        var observerFirstName=faker.name.firstName();
        var observerMiddleName=faker.name.middleName();
        var observerLastName=faker.name.lastName();
        var observerPhone=faker.phone.phoneNumber();
        var observerEmail=faker.internet.email().toLowerCase()
        var attendeeType1="Signer";
        var attendeeType2="Observer";



        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileNumber(fileId);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone); 
        meetings.clickTheAddObserverButton();
        meetings.addAttendeeToTheMeeting(observerFirstName,observerMiddleName,observerLastName,observerEmail,observerPhone);
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyMeetingNameInSignigngMeetingDetailsPage(fileId);
        meetings.verifyAddedAttendeeName(signerFirstName);
        meetings.verifyAddedSigner(signerEmail);
        meetings.verifyAttendeeType(signerEmail,attendeeType1);
        meetings.verifyAttendeeType(observerEmail,attendeeType2);
        })


    it("Verify creating signing meeting with an invalid signer email",()=>{

        var fileId = "signing meeting"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var email=faker.name.title();


        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileNumber(fileId);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,email,signerPhone); 

        //Verification
        meetings.verifyCreateClosingButtonIsDisabled();
        meetings.verifyEmailValidationErrorMessage("Please enter a valid email");
      })


    it("Verify creating a new signing meeting with an external notary",()=>{

        var fileId = "signing meeting"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var email=faker.internet.email().toLowerCase();
        var notaryFirstName=faker.name.firstName();
        var notaryMiddleName=faker.name.middleName();
        var notaryLastName=faker.name.lastName();
        var notaryEmail=faker.internet.email().toLowerCase();
        var externalNotaryName=notaryFirstName+" "+notaryMiddleName+" "+notaryLastName;
        var attendeeType="Notary";


        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileNumber(fileId);
        meetings.enterMeetingInfo();
        meetings.addExternalNotary(notaryEmail,notaryFirstName,notaryMiddleName,notaryLastName);
        
        //Verify added external notary in Create meeting page
        meetings.verifyExternalNotaryNameInCreateMeetingPage(externalNotaryName);

        //Creating meeting
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,email,signerPhone);
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyMeetingNameInSignigngMeetingDetailsPage(fileId);
        meetings.verifyAddedAttendeeName(externalNotaryName);
        meetings.verifyAttendeeType(notaryEmail,attendeeType)
     })


    it("Verify creating new signing meeting with an invalid external notary email",()=>{

        var fileId = "signing meeting"+Math.floor(Math.random()*1000);
        var notaryEmail=faker.name.title();

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheSigningMeetingButton();
        meetings.enterFileNumber(fileId);
        meetings.enterMeetingInfo();
        meetings.clickAddExternalNotary();
        meetings.enterNotaryEmail(notaryEmail);
        meetings.clickAddNotaryButton();
        
        //verification
        meetings.verifyErrorText("Please enter a valid email");
     })

    it("Verify preparing a document for esigning",()=>{

        var document="title_exam (4).pdf";
        var status="Ready for Signing"

        //Uploading document.
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
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

        var document="title_exam (4).pdf";
        var status="Tagging in Progress"

        //Uploading document.
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
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

        var document="title_exam (4).pdf";
        var status="Ready for Signing"

        //Uploading document.
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
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

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail=faker.internet.email().toLowerCase();
        var signer=signerFirstName+" "+signerMiddleName+" "+signerLastName;

        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.createMeeting();
        meetings.clickAddAttendeeButton();
        meetings.addAttendeeToTheMeeting(signerFirstName,signerMiddleName,signerLastName,signerEmail,signerPhone)
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();
        meetings.reloadThePage();
        meetings.clickEditButtonOfSigner(signerEmail);
        meetings.clickViewVerificationResultsButton();

        //Verify viewing secutity details
        meetings.verifyViewingVerificationResults(signer)    
        })

    it("Verify archiving a completed meeting",()=>{

        meetings.navigateToCompletedMeetings();
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

        //Creating a meeting
        meetings.createMeeting();

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

    it.only("Verify editing file id number",()=>{

        var fileId = "file"+Math.floor(Math.random()*1000);

        //Creating a meeting
        meetings.navigatingToClosingDetailsPage();
        
        //Edit the File Id Number
        meetings.clickTheEditButtonOfFileId();
        meetings.editTheFileIdNumber(fileId);
        meetings.clickTheSaveIconButton();

        //Verify edited File Id Number
        meetings.verifyFileId(fileId);
    })

    })

