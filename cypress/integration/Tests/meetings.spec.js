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
        meetings.clickOnPurchaseType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyAddressInMeetingDetailsPage(address);
        meetings.verifyTransactionType(transactionType);
    } )


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
        meetings.clickOnRefinanceType()
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyPopupMessage('Created meeting!');
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
        meetings.clickOnEquityType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyAddressInMeetingDetailsPage(address);
        meetings.verifyTransactionType(transactionType);
    } )

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
        meetings.clickOnModificationType()
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress(propertyAddress,streetNumber,streetName,city,postalCode);
        meetings.enterMeetingInfo();
        meetings.selectHost();
        meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,email); 
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyAddressInMeetingDetailsPage(address);
        meetings.verifyTransactionType(transactionType);
    } )


    it("Navigated to closing details page", () =>{
        

        //navigating to closing details page
        meetings.copyTheLoanNumber();
        meetings.navigatingToClosingDetailsPage();

        //verify fileId
        meetings.verifyFileIdInMeetingDetailsPage();
    })
    

    it("Navigating to scheduled meetings page", ()=>{

        //Navigate to scheduled meeitngs
        meetings.navigateToScheduledMeetings();

        //Verify Scheduled meeitngs page
        meetings.verifyNavigatedToScheduledMeetings();
        meetings.verifyMeetingCardStatus(" Upcoming");
    })


    it("Navigating to completed meetings page", ()=>{

        //Navigate to completed meetings
        meetings.navigateToCompletedMeetings();

        //Verify completed meetings page
        meetings.verifyNavigatedToCompletedMeetings();
        meetings.verifyMeetingCardStatus(" Completed");
    })


    it("Navigating to Cancelled meetings page", ()=>{

        //Navigate to cancelled meetings
        meetings.navigateToCancelledMeetings();

        //Verify cancelled meetings page
        meetings.verifyNavigatedToCancelledMeetings();
        meetings.verifyMeetingCardStatus(" Cancelled");
    })


    it.only("Upload document to a meeting",()=>{

        var document="title_exam (4).pdf"

        //Uploading document.
        meetings.navigateToScheduledMeetings();
        meetings.navigatingToClosingDetailsPage();
        meetings.uploadDocument(document);

        //Verify added document.
        meetings.verifyPopupMessage("Documents uploaded!")
        meetings.verifyAddedDocumentName(document);
    })

    it("Add attendee to the Meeting",()=>{

        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerEmail="testuser"+Math.floor(Math.random()*1000)+"@gamil.com";
        var signer=signerFirstName+" "+signerLastName;


        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.navigatingToClosingDetailsPage();
        meetings.clickAddAttendeeButton();
        meetings.enterSignerInfo(signerFirstName,signerMiddleName,signerLastName,signerPhone,signerEmail);
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited "+signer+" as an attendee");
        meetings.verifyAddedSigner(signerEmail);
    })
    
    })

