/// <reference types="cypress" />

import { Login } from "../Pages/loginPage";
import { eSign } from "../Pages/eSignPage";

const login = new Login();
const ESign = new eSign();
describe("stavvy application" , ()=>{

    before("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication();
     })
    
     it("Create new eSign with Just Others", ()=>{
         ESign.creatingNewESignWithJustOtherOption("eSignWithJustOther",'title_exam (4).pdf',"manasa","kalyani","k","manasa.lingala+123@qualitlabs.com");
         ESign.verifyPacketInTheList("eSignWithJustOther");
         ESign.clickOnPacketFromTheList("eSignWithJustOther");
        ESign.verifyPacketStatus("draft");
        })

     it("verify packet Name in the list",()=>{
        ESign.clickOneSignButton();
         ESign.verifyPacketInTheList("eSignWithJustOther")
         ESign.clickOnPacketFromTheList("eSignWithJustOther");
        ESign.verifyPacketStatus("Draft");
     })
     it("verify status", ()=>{
        ESign.clickOneSignButton();
        ESign.clickOnPacketFromTheList("eSign121");
        ESign.verifyPacketStatus("draft");
     })

     it("upload document to  an eSign", ()=>{
         ESign.clickOneSignButton();
         ESign.clickOnPacketFromTheList("eSign121");
         ESign.clickOnAddDocument();
         ESign.clickOnUploadDocuments('title_exam (4).pdf');
         ESign.clickUploadButton();
         ESign.clickOnDocEditButton();
         ESign.clickOnViewDocument();
     })
    it.only("adding document", ()=>{
        ESign.clickOneSignButton();
        ESign.clickOnPacketFromTheList("eSign@A1");
        ESign.clickOnDocEditButton();
        ESign.clickOnEditAnnotations();
        cy.xpath('//*[text()="Full Name"]').drag('#annotation-drag-drop-overlay');
        cy.xpath('//*[text()="Signature"]').drag('#annotation-drag-drop-overlay', {
         source: { x: 100, y: 100 }, // applies to the element being dragged
         target: { position: 'left' }, // applies to the drop target
         force: true, // applied to both the source and target element
       })
        //cy.get('.sourceitem').drag('.targetitem')
        //ESign.clickOnRemoveDocument();
        //ESign.clickOnRemoveDocumentButton();
     })
     it("add signer to an eSign", ()=>{
        ESign.clickOneSignButton();
        ESign.clickOnPacketFromTheList();
        ESign.clickOnAddSignerButton("eSign121");
        ESign.addFirstSignerInfo("manasa","kalyani","l","manasa.lingala+123@qualitlabs.com");
        cy.contains('span',"manasa.lingala+123@qualitlabs.com");
        ESign.clickOnSaveButton();
        
     })
     it("Adding multiple signer to eSign", ()=>{
        ESign.clickOneSignButton();
        ESign.clickOnPacketFromTheList("eSign121");
        ESign.clickOnaddSignerButton();
        ESign.addSigner1Info("manasa","kalyani","L","manasa.lingala+123@qualitlabs.com");
        ESign.clickOnAddSignerButton();
        ESign.addSigner2Info("manasa","kalyani","L","manasa.lingala+1@qualitlabs.com");
        ESign.clickOnSaveButton();
        cy.contains('span',"manasa.lingala+123@qualitlabs.com");
        cy.contains('span',"manasa.lingala+1@qualitlabs.com");
     })
     it("Verify deleting Signer",()=>{
        ESign.clickOneSignButton();
        ESign.clickOnPacketFromTheList("eSign121");
        ESign.clickOnEditButtonOfSigner("manasa.lingala@qualitlabs.com");
        ESign.clickOnDelete();
        ESign.clickOnRemoveSignerButton();
        ESign.verifyDeletedSigner("manasa.lingala@qualitlabs.com");       
     })
     it("add annotation", ()=>{
        ESign
     })
     
     it("Edit Signer details", ()=>{
      ESign.clickOneSignButton();
      ESign.clickOnPacketFromTheList("eSign@A1");
      ESign.clickOnEditButtonOfSigner("manasa.lingala@qualitlabs.com");
      ESign.clickOnEdit();
      ESign.editSignerDetails("kalyani","l","manasa","manasa.lingala@qualitlabs.com");
      ESign.clickOnSaveButton();
      cy.wait(1000);
      cy.contains('span',"manasa.lingala@qualitlabs.com");
     })

     it("verify status", ()=>{
      ESign.clickOneSignButton();
      ESign.clickOnPacketFromTheList("eSign121");
      ESign.verifyPacketStatus("Cancelled");

     })
})