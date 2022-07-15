import Selectors from "../Selectors/organizations"
import faker from "@faker-js/faker";

        var vendorDomain=faker.name.firstName()+".com";
        var vendorEmail ="testuser+"+Math.floor(Math.random()*100000)+"@qualitlabs.com"
        var vendorName=faker.name.findName();
        var vendorFirstName=faker.name.firstName();
        var vendorMiddleName=faker.name.middleName();
        var vendorLastName=faker.name.lastName();
        var vendorPhoneNumber=faker.phone.phoneNumberFormat();
        
export class Vendors{

    clickOnOrganizations()
    {
        cy.get(Selectors.organizationsLink).click();
    }
    clickOnInviteNewVendor()
    {
        cy.xpath(Selectors.inviteNewVendorBttn).click();
    }
    enterVendorDomain(domain=vendorDomain)
    {
        cy.get(Selectors.vendorDomainTxBx).type(domain).click();
    
    }
    enterVendorName(vendor=vendorName)
    {
        cy.get(Selectors.vendorNameTxBx).type(vendor);
    }
    enterFirstName(firstName=vendorFirstName)
    {
        cy.get(Selectors.firstNameTxBx).type(firstName);
    }
    enterMiddleName(middleName=vendorMiddleName)
    {
        cy.get(Selectors.middleNameTxBx).type(middleName);
    }
    enterLastName(lastName=vendorLastName)
    {
        cy.get(Selectors.lastNameTxBx).type(lastName);
    }
    enterVendoMail(mail=vendorEmail)
    {
        cy.get(Selectors.emailTxBx).type(mail);
    }
    clickOnInviteVendor()
    {
        cy.xpath(Selectors.inviteVendorBttn).click();
    }
    clickOnNextButton()
    {
        cy.xpath(Selectors.nextBttn).click();
    }
    verifyNextButtonIsDisabled()
    {
        cy.xpath(Selectors.nextBttn).should('be.disabled');
    }
    verifyInviteVendorIsDisabled()
    {
        cy.xpath(Selectors.inviteVendorBttn).should('be.disabled')
    }
    clickOnBackButton()
    {
        cy.xpath(Selectors.backBttn).click();
    }
    clickOnCloseIcon()
    {
        cy.get(Selectors.closeIcon).click()
    }
    enterVendorInfo(mail=vendorEmail,name=vendorName,firstName=vendorFirstName,middleName=vendorMiddleName,lastName=vendorLastName)
    { 
        this.clickOnNextButton();
        this.enterVendorName(name);
        this.enterFirstName(firstName);
        this.enterMiddleName(middleName);
        this.enterLastName(lastName);
        this.enterVendoMail(mail);
    }
    verifyInvitedVendorMessage(vendor=vendorName)
   {
    cy.get(".react-toast-notifications__toast__content").should('have.text', vendor+" has been invited. No further action is required.");
    cy.wait(5000);
    cy.reload();
   }
   verifyStatusOfVendor(status,domain=vendorDomain)
   {
    cy.wait(2000);
    cy.xpath('(//tr/td/span[text()="'+domain+'"]/..)/following-sibling::td/div/text()').should('have.text',status);
   }
   verifyAddedOnDateOfVendor(vendorDomain,date)
   {
       cy.xpath('(//tr/td/span[text()="'+vendorDomain+'"]/..)/following-sibling::td/text()').should('have.text',date);
   }
   clickOnDetailsOfVendorAndVerifyVendorName()
   {
       cy.xpath('(//tr/td[4]/span[text()="DETAILS"]/../../td[1]/span/text())[1]').then((text)=>{
           var vendorName=text.text()
           cy.xpath(Selectors.details).should('exist').click();
           this.verifyVendorNameInDetailsPage(vendorName);
       })
   }
   CopyDomainAndEnterInVendorDoamin()
   {
    cy.xpath('//tr[3]/td/span[2]/text()').then(($temp)=>{
        const txt = $temp.text()
        this.clickOnInviteNewVendor();
        this.enterVendorDomain(`${txt}`);
    })
   }
   verifyErrorText(errorText)
   {
       cy.xpath(Selectors.errorText).should('have.text',errorText)
   }
   verifyDomainNotExistInTheList(domain)
   {
       cy.xpath(Selectors.domainTxt).should('not.have.text',domain);
   }
   verifyVendorNameInDetailsPage(vendor)
   {
       cy.xpath('//h2/text()').should('have.text',vendor);
   }
   verifyRejectConnectionButtonPresentAndDisbaled()
   {
    cy.get('div>div>button').should('have.text',"Reject connection").should('be.disabled');
   }
   clickTheWebsiteNotAvailableButton()
   {
       cy.xpath(Selectors.websiteNotAvailableBttn).should('exist').click();
   }
   enterVendorPhoneNumber(phoneNumber=vendorPhoneNumber)
   {
       cy.get(Selectors.vendorPhoneNumberTxBx).should('exist').type(phoneNumber)
   }
   
}