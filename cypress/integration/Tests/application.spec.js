/// <reference types="cypress" />

import { Login } from "../Pages/loginPage";
import { Meetings } from "../Pages/meetingsPage";

const login = new Login();
const meetings = new Meetings();

describe("stavvy application" , ()=>{

   before("Login as valid user",()=>{
       login.navigateToUrl();
       login.loginToApplication();
    });

    it.only("Create New purchase Meeting ",()=>{
        const fileId="file Id 1.1";
        meetings.clickOnCreateMeeting();
        meetings.clickOnPurchaseType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress("Cape Coral, FL, USA","tree","121","91213");
        meetings.enterMeetingInfo("08/01/2022","2:00 AM","Adak (GMT-10:00)"," MANASA           LINGALA (manasa.lingala@qualitlabs.com)");
        meetings.enterSignerInfo("manasa","kalyani","0000000000","manasa.lingala+123@qualitlabs.com");
        meetings.clickOnCreateClosing();
        meetings.verifyCreatedMeetingMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
    } )


    it("Create New Refinance Meeting ",()=>{
        meetings.clickOnCreateMeeting();
        meetings.clickOnRefinanceType();
        meetings.selectPropertyAddress();
        meetings.enterMeetingInfo();
        meetings.enterSignerInfo();
        meetings.clickOnCreateClosing();
        meetings.verifyCreatedMeetingMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
    } )

    it("Create New Equity Meeting ",()=>{
        meetings.clickOnCreateMeeting();
        meetings.clickOnPurchaseType();
        meetings.selectPropertyAddress();
        meetings.enterMeetingInfo();
        meetings.enterSignerInfo();
       // meetings.clickOnCreateClosing();
    } )

    it("Create New modification Meeting ",()=>{
        meetings.clickOnCreateMeeting();
        meetings.clickOnModificationType();
        meetings.selectPropertyAddress();
        meetings.enterMeetingInfo();
        meetings.enterSignerInfo();
        //meetings.clickOnCreateClosing();
    } )

    it("navigated to closing details page", () =>{
        meetings.verifyNavigatingToClosingDetailsPage("ID 1");
        meetings.verifyNavigatedToClosingDetailsPage();
    })
})
