/// <reference types="cypress" />
import { Login } from "../Pages/login_page";
import { Meetings } from "../Pages/meetings_page";

const login = new Login();
const meetings = new Meetings();

describe("Meetings/Closings test cases" , ()=>{

   beforeEach("Login as valid user",()=>{
       login.navigateToUrl();
       login.loginToApplication("manasa.lingala@qualitlabs.com","16c31a0_486");
    });

    it.only("Create New purchase Meeting ",()=>{
        var fileId = "file"+Math.floor(Math.random()*1000);

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickOnPurchaseType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress("Cape Coral, FL, USA","tree","121","91213","55");
        meetings.enterMeetingInfo("02/22/2022","2:00 AM","Adak (GMT-10:00)");
        meetings.selectHost()
        meetings.enterSignerInfo("manasa","l","kalyani","0000000000","manasa.lingala+123@qualitlabs.com"); 
        meetings.clickOnCreateClosing();

        //verification
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyTransactionType("Purchase")
        meetings.navigatingToClosingsPage();
        meetings.verifyFileIdInTheList(fileId);
    } )
    it("Create New Refinance Meeting ",()=>{
        var fileId = "file"+Math.floor(Math.random()*1000);

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickOnRefinanceType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress("Cape Coral, FL, USA","tree","121","91213","55");
        meetings.enterMeetingInfo("02/10/2022","2:00 AM","Adak (GMT-10:00)");
        meetings.enterSignerInfo("manasa","kalyani","lingala","0000000000","manasa.lingala+123@qualitlabs.com");
        meetings.selectNotary("MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)");
        meetings.clickOnCreateClosing();

        //verify created meeting
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyTransactionType("Refinance")
        meetings.navigatingToClosingsPage();
        meetings.verifyFileIdInTheList(fileId); 
    } )

    it("Create New Equity Meeting ",()=>{
        var fileId = "file"+Math.floor(Math.random()*1000);

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickOnEquityType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress("Cape Coral, FL, USA","tree","121","91213","55");
        meetings.enterMeetingInfo("02/10/2022","4:00 AM","Adak (GMT-10:00)");
        meetings.enterSignerInfo("manasa","kalyani","kalyani","0000000000","manasa.lingala+123@qualitlabs.com");
        meetings.selectNotary("MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)");
        meetings.clickOnCreateClosing();

        //verify created meeting
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyTransactionType("Equity")
        meetings.navigatingToClosingsPage();
        meetings.verifyFileIdInTheList(fileId); 
    } )

    it("Create New modification Meeting ",()=>{
        var fileId = "file"+Math.floor(Math.random()*1000);

        //creating meeting
        meetings.clickOnCreateMeeting();
        meetings.clickOnModificationType();
        meetings.enterFileNumber(fileId);
        meetings.selectPropertyAddress("Cape Coral, FL, USA","tree","121","91213","55");
        meetings.enterMeetingInfo("02/10/2022","12:00 PM","Adak (GMT-10:00)");
        meetings.enterSignerInfo("lingala","manasa","kalyani","0000000000","manasa.lingala+123@qualitlabs.com");
        meetings.selectNotary("MANASA KALYANI LINGALA (manasa.lingala@qualitlabs.com)");
        meetings.clickOnCreateClosing();

        //verify created meeting
        meetings.verifyPopupMessage('Created meeting!');
        meetings.verifyNavigatedToClosingDetailsPage();
        meetings.verifyFileId(fileId);
        meetings.verifyTransactionType("Modification");
        meetings.clickOnClosingsLink();
        meetings.verifyFileIdInTheList(fileId); 
    } )

    it("Navigated to closing details page", () =>{
        const fileId="file Id 111"

        //navigating to closing details page
        meetings.navigatingToClosingDetailsPage(fileId)
        meetings.verifyNavigatedToClosingDetailsPage();

        //verify fileId
        meetings.verifyFileId(fileId);
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

    it("Upload document to a meeting",()=>{

        //Uploading document.
        meetings.navigateToScheduledMeetings();
        meetings.navigatingToClosingDetailsPage("file Id 111");
        meetings.uploadDocument('title_exam (4).pdf');

        //Verify added document.
        meetings.verifyPopupMessage("Documents uploaded!")
        meetings.verifyAddedDocumentName('title_exam (4).pdf');
    })

    it("Add attendee to the Meeting",()=>{

        //Adding attendee
        meetings.navigateToScheduledMeetings();
        meetings.navigatingToClosingDetailsPage("file Id 111");
        meetings.clickAddAttendeeButton();
        meetings.enterSignerInfo("manasa","kalyani","lingala","9999999999","manasa.lingala+12@qualitlabs.com");
        meetings.clickAddAttendeeButtonInTheMeetingInfoPage();

        //verify added signer.
        meetings.verifyPopupMessage("Successfully invited manasa lingala as an attendee");
        meetings.verifyAddedSigner("manasa.lingala+12@qualitlabs.com");
    })
    
    
    })

