/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
import { Meetings } from '../Pages/meetings_page'

const meetings = new Meetings()


describe('api test cases',()=>{    

    it("Verify scheduled meetings",()=>{

        var status="upcoming";

        meetings.getMeetings(status);
        meetings.verifyMeetingsList();

    })

    it("Verify completed meetings",()=>{

        var status="completed";

        meetings.getMeetings(status);
        meetings.verifyMeetingsList();
    })

    it("Verify cancelled meetings",()=>{

        var status="cancelled";

        meetings.getMeetings(status);
        meetings.verifyMeetingsList();
        
    })

    it("Verify creating refinance meeting",()=>{

        var customIdentifier = "file"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerMail=faker.internet.email();
        var attendeeRole="signer";
        var transactionSide="buy_side";
        var loanType="refinance";
        var streetNumber=""+Math.floor(Math.random()*10);
        var streetName=faker.address.streetName()
        var addressUnit=""+Math.floor(Math.random()*1);
        var city=faker.address.city();
        var county=faker.address.county();
        var state="NY";
        var postalCode=faker.address.zipCode();
        var country="US";
        


        meetings.createMeeting(customIdentifier,signerFirstName,signerMiddleName,signerLastName,signerPhone,signerMail,attendeeRole,
                               transactionSide,loanType,streetNumber,streetName,addressUnit,city,county,state,postalCode,country)
        
        meetings.verifyCreatedMeeting(customIdentifier,loanType,signerMail,streetNumber,streetName,city,postalCode)
    })

    it("Verify creating Equity",()=>{


        var customIdentifier = "file"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerMail=faker.internet.email();
        var attendeeRole="signer";
        var transactionSide="buy_side";
        var loanType="equity";
        var streetNumber=""+Math.floor(Math.random()*10);
        var streetName=faker.address.streetName()
        var addressUnit=""+Math.floor(Math.random()*1);
        var city=faker.address.city()
        var county="US"
        var state="NY"
        var postalCode=faker.address.zipCode()
        var country="US"
        


        meetings.createMeeting(customIdentifier,signerFirstName,signerMiddleName,signerLastName,signerPhone,signerMail,attendeeRole,
                               transactionSide,loanType,streetNumber,streetName,addressUnit,city,county,state,postalCode,country)
        
        meetings.verifyCreatedMeeting(customIdentifier,loanType,signerMail,streetNumber,streetName,city,postalCode)
    })

    it("Verify creating purchase type meeting",()=>{


        var customIdentifier = "file"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerMail=faker.internet.email();
        var attendeeRole="signer";
        var transactionSide="buy_side";
        var loanType="purchase";
        var streetNumber=""+Math.floor(Math.random()*10);
        var streetName=faker.address.streetName();
        var addressUnit=""+Math.floor(Math.random()*1);
        var city=faker.address.city();
        var county="US"
        var state="NY";
        var postalCode=faker.address.zipCode()
        var country="US"
        


        meetings.createMeeting(customIdentifier,signerFirstName,signerMiddleName,signerLastName,signerPhone,signerMail,attendeeRole,
                               transactionSide,loanType,streetNumber,streetName,addressUnit,city,county,state,postalCode,country)
        
        meetings.verifyCreatedMeeting(customIdentifier,loanType,signerMail,streetNumber,streetName,city,postalCode)
    })


    it("Verify creating modification type meeting",()=>{


        var customIdentifier = "file"+Math.floor(Math.random()*1000);
        var signerFirstName=faker.name.firstName();
        var signerMiddleName=faker.name.middleName();
        var signerLastName=faker.name.lastName();
        var signerPhone=faker.phone.phoneNumber();
        var signerMail=faker.internet.email();
        var attendeeRole="signer";
        var transactionSide="buy_side";
        var loanType="modification";
        var streetNumber=""+Math.floor(Math.random()*10);
        var streetName=faker.address.streetName();
        var addressUnit=""+Math.floor(Math.random()*1);
        var city=faker.address.city();
        var county="US"
        var state="NY";
        var postalCode=faker.address.zipCode();
        var country="US"
        


        meetings.createMeeting(customIdentifier,signerFirstName,signerMiddleName,signerLastName,signerPhone,signerMail,attendeeRole,
                               transactionSide,loanType,streetNumber,streetName,addressUnit,city,county,state,postalCode,country)
        
        meetings.verifyCreatedMeeting(customIdentifier,loanType,signerMail,streetNumber,streetName,city,postalCode)
    })

    
})