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
        var signerMail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
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
        var signerMail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
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
        var signerMail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
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
        var signerMail="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com";
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


it("Loggin in",()=>{

    cy.request({
        url:'https://connect.dev.stavvy.com/',
        method:'GET',
        headers:{"Sec-Fetch-Mode":"navigate",
        "Sec-Fetch-Site":"none",
        "Accept-Language":"en-US,en;q=0.5",
        "Sec-Fetch-User":"?1",
        "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Upgrade-Insecure-Requests":"1",
        "Accept-Encoding":"gzip, deflate, br",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0",
        "Sec-Fetch-Dest":"document",
         },
    }).as('getMeetings')

    cy.get('@getMeetings').then((res)=>{
        expect(res.status).to.eq(200);
        cy.log(res)
    })
})

    
})