/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { Settings } from "../Pages/settings_page";
import { Meetings } from "../Pages/meetings_page";

const login = new Login();
const settings=new Settings();
const meetings=new Meetings();

describe("Settings test cases" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })

     it("Updating first name",()=>{
         
         var firstName="First name";
         
        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();

         //Update first name
         settings.updateFirstName(firstName);

         //Verify updated first name
         settings.verifyUpdatedFirstName(firstName);
         settings.verifyUpdatedNameInProfile(firstName);
     })

     it("Updating middle name",()=>{

         var middleName="middle name";

        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();

         //Update middle name
         settings.updateMiddleName(middleName);

         //Verify updated middle name
         settings.verifyUpdatedMiddleName(middleName);
         settings.verifyUpdatedNameInProfile(middleName);
     })

     it("Updating last name",()=>{

         var lastName="last name";

        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();

         //Update last name
         settings.updateLastName(lastName);

         //Verify updated last name
         settings.verifyUpdatedLastName(lastName);
         settings.verifyUpdatedNameInProfile(lastName);
     })

     it("Update organization name",()=>{

         var organization="QUALITLABS";

        //Navigate to settings
         settings.clickOnProfileIcon();
         settings.navigateToSettingsPage();

         //Update organization name
         settings.updateOrganizationName(organization);

         //Verify updated organization
         settings.verifyUpdatedOrganizationName(organization);
     })

     it.only("Update preferred timezone",()=>{

        var timezone="Honolulu (GMT-10:00)";

        //Navigate to settings
        settings.clickOnProfileIcon();
        settings.navigateToSettingsPage();

        //Update timeZone
        settings.updateTimeZone(timezone);

        //Verify updated timezone
        settings.verifyUpdatedTimezone(timezone);
        meetings.navigateToMeetingsPage();
        meetings.clickOnCreateMeeting();
        meetings.verifyDefaultTimezone(timezone);
     })

     it.only("Verify disabling and enabling files",()=>{

        var transaction="Files"

        //Navigate to settings
        settings.clickOnProfileIcon();
        settings.navigateToSettingsPage();

        //Disable files
        settings.navigateToOrganizationTab();
        settings.disableFiles();
        
        //Verify disabled files
        settings.verifyMessage('Settings updated!');
        settings.verifyDisabledTransactionNotInTheList(transaction);

        //Enable files
        settings.enableFiles();
        
        //verify enabled files
        settings.verifyMessage('Settings updated!');
        settings.verifyEnabledTransactionInTheList(transaction);
     })


     it.only("Verify disabling and enabling Orders",()=>{

        var transaction="Acknowledgement";

        //Navigate to settings page
        settings.clickOnProfileIcon();
        settings.navigateToSettingsPage();

        //Disable acknowltedgement meetings
        settings.navigateToOrganizationTab();
        settings.disableAcknowldementMeetings();

        //Verify disabled acknowledgement meetings
        settings.verifyMessage('Settings updated!');
        settings.verifyDisabledTransactionNotInTheList(transaction);

        //Enable acknowledgement meetings
        settings.enableAcknowledgementMeetings();
        
        //Verify enable acknowledgement meetings
        settings.verifyMessage('Settings updated!');
        settings.verifyEnabledTransactionInTheList(transaction);
     })


     it.only("Verify disabling Quality control",()=>{

        var length='2';
        var EligibleDocumentsTransaction ="Eligible Documents";
        var meetingsTransaction="Meetings";
        var inboxTransaction="Inbox";
        var archivedTransaction="Archived";

        //Navigate to settings page
        settings.clickOnProfileIcon();
        settings.navigateToSettingsPage();

        //Disable acknowltedgement quality control
        settings.navigateToOrganizationTab();
        settings.disableQualityControl();

        //Verify disabled quality control
        settings.verifyMessage('Settings updated!');
        settings.navigateToAcknowledgementPage();
        settings.verifyAcknowledgementTransactionListLength(length);
        settings.verifyQualityControlTransactionInTheList(EligibleDocumentsTransaction);
        settings.verifyQualityControlTransactionInTheList(meetingsTransaction)
        settings.verifyQualityControlTransactionNotInTheList(inboxTransaction);
        settings.verifyQualityControlTransactionNotInTheList(archivedTransaction);
     })

     it.only("Verify enabling quality control",()=>{

        var length='3';
        var EligibleDocumentsTransaction ="Eligible Documents";
        var meetingsTransaction="Meetings";
        var inboxTransaction="Inbox";
        var archivedTransaction="Archived";

        //Navigate to settings page
        settings.clickOnProfileIcon();
        settings.navigateToSettingsPage();

        //Enable acknowledgement Quality control
        settings.navigateToOrganizationTab();
        settings.enableQualityControl();

        //Verify enabled quality control
        settings.verifyMessage('Settings updated!');
        settings.navigateToAcknowledgementPage();
        settings.verifyAcknowledgementTransactionListLength(length);
        settings.verifyQualityControlTransactionInTheList(inboxTransaction);
        settings.verifyQualityControlTransactionInTheList(meetingsTransaction);
        settings.verifyQualityControlTransactionInTheList(archivedTransaction);
        settings.verifyQualityControlTransactionNotInTheList(EligibleDocumentsTransaction);
     })
    })