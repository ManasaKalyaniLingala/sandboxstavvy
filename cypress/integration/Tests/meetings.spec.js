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
        var email=faker.internet.email();
        var transactionType="Purchase";
        var address=streetNumber+" "+streetName+", "+city


        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickTheClosingMeetingButton();
        meetings.clickOnPurchaseType();
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
        var email=faker.internet.email();
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
     } )


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
        var email=faker.internet.email();
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
        var email=faker.internet.email();
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


    it("Verify navigated to closing details page", () =>{
        

        //navigating to closing details page
        meetings.navigatingToClosingDetailsPage();

        //verify fileId
        meetings.verifyNavigatedToClosingDetailsPage();
     })
    

    it("Verify navigating to scheduled meetings page", ()=>{

        //Navigate to scheduled meeitngs
        meetings.navigateToScheduledMeetings();

        //Verify Scheduled meeitngs page
        meetings.verifyNavigatedToScheduledMeetings();
        meetings.verifyMeetingCardStatus(" Upcoming");
     })


    it("Verify navigating to completed meetings page", ()=>{

        //Navigate to completed meetings
        meetings.navigateToCompletedMeetings();

        //Verify completed meetings page
        meetings.verifyNavigatedToCompletedMeetings();
        meetings.verifyMeetingCardStatus(" Completed");
     })


    it("Verify navigating to Cancelled meetings page", ()=>{

        //Navigate to cancelled meetings
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
        var signerEmail="testuser"+Math.floor(Math.random()*1000)+"@gamil.com";
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
        var signerEmail="testuser"+Math.floor(Math.random()*1000)+"@gamil.com";
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
        var signerEmail="testuser"+Math.floor(Math.random()*1000)+"@gamil.com";
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


    it.only("Verify editing signer details with an existing signer details",()=>{

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
        var signerEmail="testuser"+Math.floor(Math.random()*1000)+"@gamil.com";


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

        var fileId = "file"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var email=faker.internet.email();


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
    })

