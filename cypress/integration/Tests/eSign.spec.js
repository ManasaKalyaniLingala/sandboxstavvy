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



      it("create new eSign with just Me", () =>{

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

        var packetTitle="packet3553";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Search packet
        eSign.searcPacket(packetTitle);

        //Verify searched packet
        eSign.verifyPacketInTheList(packetTitle);
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketNameInDetailsPage(packetTitle);
       }) 



      it.only("upload document to  an eSign", ()=>{

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



      it("add signer to an eSign", ()=>{

        var email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
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

        var signer1Email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
        var signer2Email = "testuser+"+Math.floor(Math.random()*10000)+"@gmail.com";
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var value="Ready To Sign";

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add signers
        eSign.clickPacketStatusDropDownAndSelectValue(value);
        eSign.selectPacketFromTheList();
        eSign.clickOnAddSignerButton();
        eSign.addSignerInfo(firstName,middleName,lastName,signer1Email);
        eSign.clickOnaddSignerBttn();
        eSign.addSignerInfo(firstName,middleName,lastName,signer2Email);
        eSign.clickOnSaveButton();

        //Verify added signers
        eSign.verifyAddedSignerInTheList(signer1Email);
        eSign.verifyAddedSignerInTheList(signer2Email);
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



      it("verify Cancelling a packet", ()=>{

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
    
})