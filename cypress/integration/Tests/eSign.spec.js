/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { ESign } from "../Pages/eSign_page";

const { faker } = require('@faker-js/faker');
const login = new Login();
const eSign = new ESign();
describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })

      it("Verify eSign page View",()=>{

         //Navigate to eSign page
        eSign.clickOneSignButton();

        //Verify eSign Page view
        eSign.verifyEsignPageView();
        })


      it("Create new eSign with Just Others", ()=>{

         var packetTitle=faker.name.findName();
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var email=faker.internet.email();
         var document="title_exam (4).pdf";
         var status="Ready To Sign";

         //Creating packet
         eSign.creatingNewESignWithJustOtherOption(packetTitle,document,firstName,middleName,lastName,email);

         //Verify created packet
         eSign.refreshESignListPage();
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList(packetTitle,status);
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.verifyPacketStatusInDetailsPage(status);
         eSign.verifyPacketNameInDetailsPage(packetTitle);
        })



      it("Create new eSign with Just Me & Others", ()=>{

         var packetTitle=faker.name.findName();
         var firstName=faker.name.firstName();
         var middleName=faker.name.middleName();
         var lastName=faker.name.lastName();
         var email=faker.internet.email();
         var document="title_exam (4).pdf";
         var status="Ready To Sign";

         //Creating packet
         eSign.createNewEsignWithMeAndOthers(packetTitle,document,firstName,middleName,lastName,email);

         //Verify creared packet
         eSign.verifyPacketNameInDetailsPage(packetTitle);
         eSign.verifyPacketStatusInDetailsPage(status);
         eSign.clickOneSignLink();
         eSign.refreshESignListPage();
         eSign.verifyPacketStatusInTheList(packetTitle,status);
         })



      it("Create new eSign with just Me", () =>{

         var packetTitle=faker.name.findName();
         var document="title_exam (4).pdf";
         var status="Ready To Sign";

         //Creating packet
         eSign.creatingNewESignWithJustMeOption(packetTitle,document);

         //Verify created packet
         eSign.refreshESignListPage()
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList(packetTitle,status);
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.verifyPacketNameInDetailsPage(packetTitle);
         eSign.verifyPacketStatusInDetailsPage(status);
       })


      it("verify searching a packet by title and navigating to details page",()=>{
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Search packet
        eSign.searchedPacketAndVerify();
       }) 


      it("upload document to  an eSign", ()=>{

         var document="title_exam (4).pdf";
         var value="Ready To Sign";

         //Navigate to eSign page
         eSign.clickOneSignButton();

         //Upload document
         eSign.clickPacketStatusDropDownAndSelectValue(value);
         eSign.selectPacketFromTheList();
         eSign.clickOnAddDocument();
         eSign.clickOnUploadDocuments(document)

         //Verify added document
         eSign.verifyAddedDocumentInTheList(document);
       })


       it("Verify deleting added document",()=>{

         var document="test doc6.pdf";
         var value="Ready To Sign";

         //Navigate to eSign page
         eSign.clickOneSignButton();

         //Upload document
         eSign.clickPacketStatusDropDownAndSelectValue(value);
         eSign.selectPacketFromTheList();
         eSign.clickOnAddDocument();
         eSign.clickOnUploadDocuments(document);
         eSign.clickUploadButton();

         //Verify added document
         eSign.verifyAddedDocumentInTheList(document);

         //Remove document
         eSign.clickEditButtonOfDocument(document);
         eSign.clickRemoveDocument();

         //Verify removed document
         eSign.verifyDeletedDocument(document);
       })


      it("Add signer to an eSign", ()=>{

        var email = faker.internet.email().toLowerCase();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add Signer
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList()
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickOnSaveButton();

        //Verify added signer
        eSign.verifyAddedSignerInTheList(email);
       })


      it("Adding multiple signer to eSign", ()=>{

        var signer1Email = faker.internet.email().toLowerCase();
        var signer2Email = faker.internet.email().toLowerCase();
        var firstName1=faker.name.firstName();
        var middleName1=faker.name.middleName();
        var lastName1=faker.name.lastName();
        var firstName2=faker.name.firstName();
        var middleName2=faker.name.middleName();
        var lastName2=faker.name.lastName();
        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add signers
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName1,middleName1,lastName1,signer1Email);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName2,middleName2,lastName2,signer2Email);
        eSign.clickOnSaveButton();

        //Verify added signers
        eSign.verifyAddedSignerInTheList(signer1Email);
        eSign.verifyAddedSignerInTheList(signer2Email);
       })


      it("verify adding similar signers to an eSign",()=>{

        var signerEmail = faker.internet.email().toLowerCase();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var value="Draft";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add signers
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName,middleName,lastName,signerEmail);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,signerEmail);

        //Verify error text
        eSign.verifyErrorText("Signer already exists with email address "+signerEmail);
        eSign.verifyEmailValidationError("Signer with this email address has already been added");
        eSign.verifySaveBttnIsDisabled();
       })


      it("Verify adding signer with same email",()=>{

        var signerEmail = faker.internet.email().toLowerCase();
        var firstName1=faker.name.firstName();
        var middleName1=faker.name.middleName();
        var lastName1=faker.name.lastName();
        var firstName2=faker.name.firstName();
        var middleName2=faker.name.middleName();
        var lastName2=faker.name.lastName();
        var value="Draft";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add signers
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName1,middleName1,lastName1,signerEmail);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName2,middleName2,lastName2,signerEmail);

        //Verify error text
        eSign.verifyErrorText("Signer already exists with email address "+signerEmail);
        eSign.verifyEmailValidationError("Signer with this email address has already been added");
        eSign.verifySaveBttnIsDisabled();
       })


      it("Verify adding signer with same name credentials",()=>{

        var signerEmail1 = faker.internet.email().toLowerCase();
        var signerEmail2 = faker.internet.email().toLowerCase();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var value="Draft";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add signers
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName,middleName,lastName,signerEmail1);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,signerEmail2);
        eSign.clickOnSaveButton();

        //Verify added signers
        eSign.verifyAddedSignerInTheList(signerEmail1);
        eSign.verifyAddedSignerInTheList(signerEmail2);
       })


      it("Verify deleting Signer",()=>{

        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Navigate to packet details page
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();

        //Delete and verify deleted signer
        eSign.deleteAndVerifyDeletedSigner();
       })
    

      it("Edit Signer details", ()=>{

        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
        var value="Ready To Sign";


        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Edit Signer details
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickEditSignerBttn();
        eSign.clickOnEdit();
        eSign.editSignerDetails(firstName,middleName,lastName,email);
        eSign.clickOnSaveButton();

        //Verify edited signer
        eSign.verifyAddedSignerInTheList(email);
       })


      it("Verify Cancelling a packet", ()=>{

        var value="Ready To Sign";
        var status="Cancelled";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Cancel packet
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickOnCancelPacket();
        eSign.clickOnCancelPacketButtonInPopupPage();

        //Verify cancelled packet
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.verifyCancelledPacketInTheList(status);
       })

     
      it("Verify resending invite to signer",()=>{
     
        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Edit Signer details
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickEditSignerBttn();
        eSign.clickResendInviteButton();
        eSign.clickSendButton();

        //Verify popup message
        eSign.verifyMessage("Invite sent!");
        })


      it("Verify inviting all signers",()=>{

       var value="Ready To Sign";

       //Navigate to eSign page
       eSign.clickOneSignButton();

       //Edit Signer details
       eSign.clickPacketStatusDropDownAndSelectValue(value);
       eSign.selectPacketFromTheList();
       eSign.clickInviteAllSigners();
       eSign.clickSendButton();
      
       //Verify inviting all signers
       eSign.verifyMessage("Invite sent!"); 
       })


      it("Verify editing packet name",()=>{
    
       var value="Draft";
       var packetTitle=faker.name.findName();

       //Navigate to eSign page
       eSign.clickOneSignButton();

       //Add signers
       eSign.clickPacketStatusDropDownAndSelectValue(value);
       eSign.selectPacketFromTheList();
       eSign.editPacketTitle(packetTitle);
       eSign.verifyPacketNameInDetailsPage(packetTitle);
      })


      it("Verify sending invite for an added signer",()=>{

        var email = faker.internet.email().toLowerCase();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add Signer
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList()
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickOnSaveButton();

        //Verify added signer
        eSign.verifyAddedSignerInTheList(email);

        //Send invite for added signer
        eSign.clickOnEditButtonOfSigner(email);
        eSign.clickOnSendInvite();
        eSign.clickSendButton();

        //Verify popup message
        eSign.verifyMessage("Invite sent!");
       })


      it("Verify sending invite to signer which doesn't have documents",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";

        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.refreshESignListPage();
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document)
        eSign.clickRemoveDocument();

        //Invite signer
        eSign.clickEditSignerBttn();
        eSign.clickOnSendInvite();

        //Verify popup message
        eSign.verifyMessage("At least 1 document is required.")
       })
    

      it("Verify making status of packet from 'Ready to sign' to 'Annotating'",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var status="Annotating";
      

        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.refreshESignListPage();
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document)
        eSign.clickOnEditAnnotations();
        eSign.clickMakeChangesButton();
        eSign.clickBackToPacketDetailsLink();

        //Verify packet status
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.clickOneSignLink();
        eSign.verifyPacketStatusInTheList(packetTitle,status);
       })
     

      it("Verify performing signing",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var status="Download";
      

        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.refreshESignListPage();
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickSignNowButton();
        eSign.clickStartSigning();
        eSign.clickFinishSigning();

        //Verify signing completed
        eSign.verifyDocumentStatusUnderDocumentName(document,status);
        eSign.verifySigningCompletePopupPage();
        eSign.verifyDocumentSignedText();
       })


      it("Editing annotations and performing signing",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var documentStatus="Download";
        var status="Completed";
      

        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.refreshESignListPage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnEditAnnotations();
        eSign.clickMakeChangesButton();
        eSign.aaplyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickBackToPacketDetailsLink();
        eSign.clickSignNowButton();
        eSign.clickStartSigning();
        eSign.clickOnAnnotations();
        eSign.clickFinishSigning();

        //Verify signed document
        eSign.verifyDocumentStatusUnderDocumentName(document,documentStatus);
        eSign.verifySigningCompletePopupPage();
        eSign.verifyDocumentSignedText();
        eSign.redirectPacketDetailsPageFromSignerPorta();
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.clickOneSignLink();
        eSign.refreshESignListPage();
        eSign.verifyPacketStatusInTheList(packetTitle,status)
       })

       
      it("Verify Performing signing without clicking 'Finish signing'",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var documentStatus="In progress";
        var status="Signing In Progress";
      

        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.refreshESignListPage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnEditAnnotations();
        eSign.clickMakeChangesButton();
        eSign.aaplyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickBackToPacketDetailsLink();
        eSign.clickSignNowButton();
        eSign.clickStartSigning();
        eSign.clickOnAnnotations();

        //Verify signed document
        eSign.verifyDocumentStatusUnderDocumentName(document,documentStatus);
        eSign.redirectPacketDetailsPageFromSignerPorta();
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.clickOneSignLink();
        eSign.refreshESignListPage();
        eSign.verifyPacketStatusInTheList(packetTitle,status)
       })

})