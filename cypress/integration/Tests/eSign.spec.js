/// <reference types="cypress" />

import { Login } from "../Pages/login_page";
import { ESign } from "../Pages/eSign_page";

const login = new Login();
const eSign = new ESign();
describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })
    
     it("Create new eSign with Just Others", ()=>{

         var packetTitle="packet351";

         //Creating packet
         eSign.creatingNewESignWithJustOtherOption(packetTitle,'title_exam (4).pdf',"manasa","kalyani","k","manasa.lingala+123@qualitlabs.com");

         //Verify created packet
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList("Ready To Sign");
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.verifyPacketStatusInDetailsPage("Ready To Sign");
         eSign.verifyPacketNameInDetailsPage(packetTitle);
        })

        it("Create new eSign with Just Me & Others", ()=>{

         var packetTitle="packet352";

         //Creating packet
         eSign.createNewEsignWithMeAndOthers(packetTitle,'title_exam (4).pdf',"manasa","kalyani","lingala","manasa.lingala+123@qualitlabs.com");

         //Verify creared packet
         eSign.verifyPacketNameInDetailsPage(packetTitle);
         eSign.verifyPacketStatusInDetailsPage("Ready To Sign");
         eSign.clickOneSignLink();
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList("Ready To Sign");
         })

      it("create new eSign with just Me", () =>{

         var packetTitle="packet353";

         //Creating packet
         eSign.creatingNewESignWithJustMeOption(packetTitle,'title_exam (4).pdf');

         //Verify created packet
         eSign.verifyPacketInTheList(packetTitle);
         eSign.verifyPacketStatusInTheList("Ready To Sign");
         eSign.clickOnPacketFromTheList(packetTitle);
         eSign.verifyPacketNameInDetailsPage(packetTitle);
         eSign.verifyPacketStatusInDetailsPage("Ready To Sign");
      })


     it("verify searching a packet by title and navigating to details page",()=>{

        var packetTitle="packet353"

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Search packet
        eSign.searcPacket(packetTitle);

        //Verify searched packet
        eSign.verifyPacketInTheList(packetTitle)
        eSign.clickOnPacketFromTheList(packetTitle);
        eSign.verifyPacketNameInDetailsPage(packetTitle);
     }) 


     it("upload document to  an eSign", ()=>{

         //Navigate to eSign page
         eSign.clickOneSignButton();

         //Upload document
         eSign.clickOnPacketFromTheList("packet353");
         eSign.clickOnAddDocument();
         eSign.clickOnUploadDocuments('title_exam (4).pdf');

         //Verify added document
         eSign.clickUploadButton();
         eSign.verifyAddedDocumentInTheList('title_exam (4).pdf');
     })


     it("add signer to an eSign", ()=>{

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add Signer
        eSign.clickOnPacketFromTheList("packet353");
        eSign.clickOnAddSignerButton();
        eSign.addSigner1Info("manasa","kalyani","l","manasa.lingala+133@qualitlabs.com");
        eSign.clickOnSaveButton();

        //Verify added signer
        eSign.verifyAddedSignerInTheList("manasa.lingala+133@qualitlabs.com");
     })


     it("Adding multiple signer to eSign", ()=>{

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Add signers
        eSign.clickOnPacketFromTheList("packet353");
        eSign.clickOnAddSignerButton();
        eSign.addSigner1Info("manasa","kalyani","L","manasa.lingala+122@qualitlabs.com");
        eSign.clickOnaddSignerBttn();
        eSign.addSigner2Info("manasa","kalyani","L","manasa.lingala+1@qualitlabs.com");
        eSign.clickOnSaveButton();

        //Verify added signers
        eSign.verifyAddedSignerInTheList("manasa.lingala+122@qualitlabs.com");
        eSign.verifyAddedSignerInTheList("manasa.lingala+1@qualitlabs.com");
     })
     it("Verify deleting Signer",()=>{

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Delete signer
        eSign.clickOnPacketFromTheList("packet353");
        eSign.clickOnEditButtonOfSigner("manasa.lingala+122@qualitlabs.com");
        eSign.clickOnDelete();
        eSign.clickOnRemoveSignerButton();

        //Verify deleted user
        eSign.verifyDeletedSigner("manasa.lingala+122@qualitlabs.com");       
     })
   
     it("Edit Signer details", ()=>{

      //Navigate to eSign page
      eSign.clickOneSignButton();

      //Edit Signer details
      eSign.clickOnPacketFromTheList("packet353");
      eSign.clickOnEditButtonOfSigner("manasa.lingala+133@qualitlabs.com");
      eSign.clickOnEdit();
      eSign.editSignerDetails("kalyani","l","manasa","manasa.lingala+132@qualitlabs.com");
      eSign.clickOnSaveButton();

      //Verify edited signer
      eSign.verifyAddedSignerInTheList("manasa.lingala+132@qualitlabs.com");
     })

     it.only("verify Cancelling a pcket", ()=>{

        //Navigate to eSign page
        eSign.clickOneSignButton();

        //Cancel packet
        eSign.clickOnPacketFromTheList("packet351");
        eSign.clickOnCancelPacket();
        eSign.clickOnCancelPacketButtonInPopupPage();

        //Verify cancelled packet
        eSign.verifyPacketStatusInDetailsPage("Cancelled");
        eSign.clickOneSignLink();
        eSign.searcPacket("packet351");
        eSign.verifyPacketStatusInTheList("Cancelled");
     })
})