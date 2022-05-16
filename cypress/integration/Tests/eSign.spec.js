/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { ESign } from "../Pages/eSign_page";

const { faker } = require('@faker-js/faker');
const login = new Login();
const eSign = new ESign();
describe("stavvy application" , ()=>{

  beforeEach("Login as valid user",()=>{

     login.navigateToUrl();

    //Login to the application
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
     eSign.reloadThePage();
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
     eSign.reloadThePage();
     eSign.verifyPacketStatusInTheList(packetTitle,status);
    })



  it("Create new eSign with just Me", () =>{

     var packetTitle=faker.name.findName();
      var document="title_exam (4).pdf";
     var status="Ready To Sign";

    //Creating packet
     eSign.creatingNewESignWithJustMeOption(packetTitle,document);

    //Verify created packet
     eSign.reloadThePage()
     eSign.verifyPacketInTheList(packetTitle);
     eSign.clickOnPacketFromTheList(packetTitle);
     eSign.verifyPacketNameInDetailsPage(packetTitle);
     eSign.verifyPacketStatusInDetailsPage(status);
     eSign.clickOneSignLink();
     eSign.verifyPacketStatusInTheList(packetTitle,status);
    })


  it("verify searching a packet by title and navigating to details page",()=>{
        
   //Navigate to eSign page
     eSign.clickOneSignButton();

   //Search packet
     eSign.searchedPacketAndVerify();
    }) 


  it("upload document to  an eSign", ()=>{

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
       })


       it("Verify deleting added document",()=>{

         var packetTitle=faker.name.findName();
         var document1="document2.pdf";
         var document2="test doc6.pdf";


         //Navigate to eSign page
         eSign.clickOneSignButton();

         //Upload document
         eSign.creatingNewESignWithJustMeOption(packetTitle,document1)
         eSign.reloadThePage();
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.clickOnAddDocument();
         eSign.clickOnUploadDocuments(document2);
         eSign.clickUploadButton();

         //Verify added document
         eSign.verifyAddedDocumentInTheList(document2);

         //Remove document
         eSign.clickEditButtonOfDocument(document2);
         eSign.clickRemoveDocument();

         //Verify removed document
         eSign.verifyDeletedDocument(document2);
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
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
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
        eSign.verifyAddedSignerInTheList(signer1Email,firstName1,middleName1,lastName1);
        eSign.verifyAddedSignerInTheList(signer2Email,firstName1,middleName1,lastName1);
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
        eSign.verifyAddedSignerInTheList(signerEmail1,firstName,middleName,lastName);
        eSign.verifyAddedSignerInTheList(signerEmail2,firstName,middleName,lastName);
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
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
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

        var packetTitle=faker.name.findName();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email();
        var document="document2.pdf";

        //Navigate to eSign page
        eSign.creatingNewESignWithJustOtherOption(packetTitle,document,firstName,middleName,lastName,email)
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle)

        //Edit Signer details
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
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);

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

        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.clickEditButtonOfDocument(document);
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
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document)
        eSign.clickOnEditAnnotations();

        //Make changes
        eSign.clickMakeChangesButton();
        eSign.clickBackToPacketDetailsLink();

        //Verify packet status
        eSign.reloadThePage();
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.clickOneSignLink();
        eSign.verifyPacketStatusInTheList(packetTitle,status);
       })
     

      it("Verify performing signing",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var status="Download";
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickSignNowButton();

        //Perforn signging
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
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnEditAnnotations();
        eSign.clickMakeChangesButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickBackToPacketDetailsLink();

        //Perform signing
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
        eSign.reloadThePage();
        eSign.verifyPacketStatusInTheList(packetTitle,status)
       })

       
      it("Verify Performing signing without clicking 'Finish signing'",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var documentStatus="In progress";
        var status="Signing In Progress";
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnEditAnnotations();
        eSign.clickMakeChangesButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickBackToPacketDetailsLink();
        eSign.clickSignNowButton();

        //Perform signing
        eSign.clickStartSigning();
        eSign.clickOnAnnotations();

        //Verify signed document
        eSign.verifyDocumentStatusUnderDocumentName(document,documentStatus);
        eSign.redirectPacketDetailsPageFromSignerPorta();
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.clickOneSignLink();
        eSign.reloadThePage();
        eSign.verifyPacketStatusInTheList(packetTitle,status)
       })


      it("Verify viewing document",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var link="view";

        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);

        //View document
        eSign.clickOnViewDocument();

        //Verify viewing document
        eSign.verifyNavigatedToUrl(link);
        eSign.verifyPacketTitleInViewDocumentPage(packetTitle);
        eSign.verifyDocumentNameInViewDocumentPage(document);
       })


      it("Verify viewing document and redirecting to packet details page",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var link="view";

        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);

        //View document
        eSign.clickOnViewDocument();

        //Verify viewing document
        eSign.verifyNavigatedToUrl(link);
        eSign.verifyPacketTitleInViewDocumentPage(packetTitle);
        eSign.verifyDocumentNameInViewDocumentPage(document);

        //Redirect to packet details
        eSign.clickBackToPacketDetailsLink();
        eSign.verifyNavigatedToPacketDetailsPage();
        eSign.verifyPacketNameInDetailsPage(packetTitle);
       })


      it("Verify performing signing through start signing link under document",()=>{
        
        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var status="Download";
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);

        //Perform signing
        eSign.clickSignNowButton();
        eSign.clickStartSigningLink();
        eSign.clickFinishSigning();

        //Verify signing completed
        eSign.verifyDocumentStatusUnderDocumentName(document,status);
        eSign.verifySigningCompletePopupPage();
        eSign.verifyDocumentSignedText();
       })


      it("Verify editing annotations by 'Edit Annotations' button in view document page",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnViewDocument();

        //Edit annotations in view document page
        eSign.clickEditAnnotationsInViewDocumentPage();
        eSign.clickMakeChangesButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();

        //Verify edited annotations
        eSign.verifyAnnotationsExist();
       })


      it("Verify adding signer through view document page",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email = faker.internet.email().toLowerCase();

      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnViewDocument();
        eSign.clickAddSignersButtonInViewDocumentPage();

        //Add signer through view document
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickOnSaveButton();
        eSign.clickBackToPacketDetailsLink();

        //Verify added signer in details page
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName)
       })


      it("Verify sending invite to signer in View document page",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
      
        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage()
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickEditButtonOfDocument(document);
        eSign.clickOnViewDocument();

        //Send invite.
        eSign.clickEditButtonOfSignerInViewDocumentPage();
        eSign.clickOnSendInvite();
        eSign.clickSendButton();

        //Verify popup message
        eSign.verifyMessage("Invite sent!");
       })


      it("Verify switching between Signer Portal, Packet Overiview, and Signing document pages",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var status="In progress"
      
        eSign.creatingNewESignWithJustMeOption(packetTitle,document);
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle)
        eSign.clickSignNowButton();
        
        //Verify navigated to Packet Overview
        eSign.verifyNavigateToPacketOverviewPage();

        eSign.clickStartSigning();

        //Verify navigated to signing page of document
        eSign.verifyNavigatedToSigningDocumentPage(document,status);

        eSign.clickBackToPacketOverviewLink();
        eSign.clickBackToSignerPortal();

        //Verify navigate to signer Portal
        eSign.verifyNavigateToSignerPortal();
       });


      it("Verify creating eSign packet with multiple signers and just me option",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        
        //Navigate to eSign
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustMe();
        eSign.clickNextButton();
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickNextButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickOnReviewPacketDetails();
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);

        //Verify added signer
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
       })


      it("Verify creating eSign packet with Just me& others and multiple signers",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustMeAndOthers();
        eSign.clickNextButton();
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickNextButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickOnReviewPacketDetails();
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);

        //Verify added signer
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
       })


      it("Verify creating eSign packet with just others and mutliple signers",()=>{
       
        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName1=faker.name.firstName();
        var middleName1=faker.name.middleName();
        var lastName1=faker.name.lastName();
        var email1=faker.internet.email().toLowerCase();
        var firstName2=faker.name.firstName();
        var middleName2=faker.name.middleName();
        var lastName2=faker.name.lastName();
        var email2=faker.internet.email().toLowerCase();
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustOthers();
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName1,middleName1,lastName1,email1);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName2,middleName2,lastName2,email2);
        eSign.clickNextButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickOnReviewPacketDetails();
        eSign.clickOnSaveAndSendNow();
        eSign.clickDone();
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);

        //Verify added signer in the list
        eSign.verifyAddedSignerInTheList(email1,firstName1,middleName1,lastName1);
        eSign.verifyAddedSignerInTheList(email2,firstName2,middleName2,lastName2);
       })

     
      it("Verify creating new eSign packet following upto 'enter packet title' page",()=>{

        var packetTitle=faker.name.findName();
        var status="Draft";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create eSign packet following upto "enter packet title" page
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();

        //Verify created packet
        eSign.verifyPacketStatusInTheList(packetTitle,status);
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketStatusInDetailsPage(status);
       })


      it("Verify creating new eSign packet upto step1",()=>{

        var packetTitle=faker.name.findName();
        var status="Draft";
        var document="document2.pdf";
        var documentStatus="Uploaded"

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create eSign packet following upto step 1
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();
        eSign.verifyPacketStatusInTheList(packetTitle,status);
        eSign.clickOnPacketFromTheList(packetTitle);

        //Verify creared packet
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.verifyAddedDocumentInTheList(document);
        eSign.verifyDocumentStatusInList(document,documentStatus)
       })

       
      it("Verify creating eSign packet following upto step 2",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        var status="Draft";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create eSign packet following upto step 2
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustOthers();
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();

        //Verify created packet
        eSign.verifyPacketStatusInTheList(packetTitle,status);
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.verifyAddedDocumentInTheList(document);
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
       })

      
      it("Verify creating packet without adding annotations to the document",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        var status="Draft";
        var documentStatus="Uploaded"

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create eSign packet following upto step 2
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustOthers();
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickNextButton();
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();

        //Verify created packet
        eSign.verifyPacketStatusInTheList(packetTitle,status);
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketStatusInDetailsPage(status);
        eSign.verifyAddedDocumentInTheList(document);
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
        eSign.verifyDocumentStatusInList(document,documentStatus)
        })


      it("Verify editing signer details with empty fields in packet details page",()=>{

        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Edit Signer details
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickEditSignerBttn();
        eSign.clickOnEdit();
        eSign.clearSignerData();

        //Verify save button is disabled
        eSign.verifySaveBttnIsDisabled();
        eSign.verifyInputValidationError("Must enter at least 1 character");
       })

      
      it("Verify editing signer details with an invalid email",()=>{

        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email =faker.name.findName().toLowerCase();
        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Edit Signer details
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickEditSignerBttn();
        eSign.clickOnEdit();
        eSign.editSignerDetails(firstName,middleName,lastName,email);
        eSign.verifySaveBttnIsDisabled();

        //Verify edited signer
        eSign.verifyInputValidationError("Invalid email format");
        eSign.verifySaveBttnIsDisabled();
       })

      
      it("Verify editing signer details with an empty email",()=>{

        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Edit Signer details
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickEditSignerBttn();
        eSign.clickOnEdit();
        eSign.emptyEmailField();

        //Verify send button is disables
        eSign.verifySaveBttnIsDisabled();
       })


      it("Verify editing signer details with empty name fields",()=>{

        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Edit Signer details
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickEditSignerBttn();
        eSign.clickOnEdit();
        eSign.emptyFirstNameField();
        eSign.emptyMiddleNameField();
        eSign.emptyLastNameField();

        //Verify edited signer 
        eSign.verifyInputValidationError("Must enter at least 1 character");
        eSign.verifySaveBttnIsDisabled();
       })


      it("Verify creating new eSign packet with signers that has similar mail",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustOthers();
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        

        //Verify added signers
        
        eSign.verifyEmailValidationError("Signer with this email address has already been added");
        })


      it("Verify creating new eSign packet with multiple documents",()=>{

        var packetTitle=faker.name.findName();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        var document1="document2.pdf";
        var document2="test doc2.pdf";
        var document3="test doc6.pdf";
        var documentStatus="Uploaded";
        
        //Navigate to eSign
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document1);
        eSign.clickOnUploadDocuments(document2);
        eSign.clickOnUploadDocuments(document3);
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickNextButton();
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);

        //Verify added signer
        eSign.verifyDocumentStatusInList(document1,documentStatus);
        eSign.verifyDocumentStatusInList(document2,documentStatus);
        eSign.verifyDocumentStatusInList(document3,documentStatus);
       })


      it("Verify creating new eSign packet with multiple documents and marking documents to Sign",()=>{
        
        var packetTitle=faker.name.findName();
        var document1="document2.pdf";
        var document2="test doc2.pdf";
        var document3="test doc6.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        var documentStatus="Ready for Signing";
        var packetStatus="Ready To Sign";
        
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document1);
        eSign.clickOnUploadDocuments(document2);
        eSign.clickOnUploadDocuments(document3);
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickNextButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickNextDocumentButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickNextDocumentButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();
        eSign.clickOnReviewPacketDetails();
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();

        //Verify added documents
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketStatusInDetailsPage(packetStatus);
        eSign.verifyDocumentStatusInList(document1,documentStatus);
        eSign.verifyDocumentStatusInList(document2,documentStatus);
        eSign.verifyDocumentStatusInList(document3,documentStatus);
        eSign.clickOneSignLink();
        eSign.verifyPacketStatusInTheList(packetTitle,packetStatus);
      })


    it("Verify creating new eSign packet with similar signer emails",()=>{

        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName1=faker.name.firstName();
        var middleName1=faker.name.middleName();
        var lastName1=faker.name.lastName();
        var firstName2=faker.name.firstName();
        var middleName2=faker.name.middleName();
        var lastName2=faker.name.lastName();
        var email=faker.internet.email().toLowerCase();
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustOthers();
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName1,middleName1,lastName1,email);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName2,middleName2,lastName2,email);

        //Verify added signers
        eSign.verifyEmailValidationError("Signer with this email address has already been added");
       })


      it("Verify creating new eSign packet with similar signer name credentials",()=>{
        
        var packetTitle=faker.name.findName();
        var document="document2.pdf";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var email1=faker.internet.email().toLowerCase();
        var email2=faker.internet.email().toLowerCase();
        
        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Create an eSign packet
        eSign.clickOnCreateNeweSignButton();
        eSign.enterPacketTitle(packetTitle);
        eSign.clickOnUploadDocuments(document);
        eSign.selectJustOthers();
        eSign.clickNextButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email1);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,email2);
        eSign.clickOnSaveAndExitButton();
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);

        //Verify added signers
        eSign.verifyAddedSignerInTheList(email1,firstName,middleName,lastName);
        eSign.verifyAddedSignerInTheList(email2,firstName,middleName,lastName);
       })


      it("Verify adding signer and adding annotations of signer",()=>{

        var email = faker.internet.email().toLowerCase();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var packetTitle=faker.name.findName();
        var document="document2.pdf";

        //Create new eSign packet
        eSign.creatingNewESignWithJustMeOption(packetTitle,document)
        eSign.reloadThePage();
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName,middleName,lastName,email);
        eSign.clickSaveAndAddAnnotationsBttn();
        eSign.clickMakeChangesButton();
        eSign.applyTemplateToDocument();
        eSign.clickMarkReadyForSigning();

        //Verify added annotations and added signer
        eSign.verifyAnnotationsExist();
        eSign.clickBackToPacketDetailsLink();
        eSign.verifyAddedSignerInTheList(email,firstName,middleName,lastName);
        })
})