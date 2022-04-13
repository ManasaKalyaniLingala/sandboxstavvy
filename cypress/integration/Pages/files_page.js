
import selectors from "../Selectors/files"

const { faker } = require('@faker-js/faker');

export class Files{
    navigateToFiles() {
        cy.xpath(selectors.filesSection).click()
    }

     getRandomInt(min, max){      
        return Math.floor(Math.random() * (max - min + 1)) + min;    
      } 
    
    clickPurchaseType()
    {
        cy.get(selectors.purachaseLoanType).click();
    }
    clickRefinanceType()
    {
        cy.get(selectors.refinanceLoanType).click();
    }
    clickEquityType()
    {
        cy.get(selectors.equityLoanType).click();
    }
    clickCreateFileButton() {
        cy.get(selectors.CreateFileButton).click()
    }

    selectPurchaseLoanType() 
    {
        cy.get(selectors.purachaseLoanType).click()
    }

    clickFloatingRateType()
    {
        cy.xpath(selectors.floatingRateTyepBttn).should('exist').click();
    }

    enterLoanNumber(loanNumber) {
        cy.xpath(selectors.enterLoanNumber).type(loanNumber);
    }

    enterLoanAmount(loanAmount) {
        cy.get(selectors.enterLoanAmount).type(loanAmount);
    }

    enterPurchasePrice(purchasePrice) {
        cy.get(selectors.enterPurchasePrice).type(purchasePrice);
    }

    enterPropertyAddress(address) {
        cy.get(selectors.propertyAddressInputField).type(address);
        cy.wait(200);
        cy.xpath('//div[@class="stavviz-dropdown relative flex"]/div[2]/ul/li[2]').click();
        cy.wait(5000);
    }

    enterStreetNumber(streetNumber)
    {
        cy.get(selectors.streetNumber).clear().type(streetNumber);
    }

    enterStreetName(streetName)
    {
        cy.get(selectors.streetName).clear().type(streetName);
    }

    enterPostalCode(postalCode){
        cy.get(selectors.postalCode).clear().type(postalCode)
    }

    enterCity(city)
    {
        cy.get(selectors.city).clear().type(city)
    }

    selectClosingDate() {
        cy.xpath('(//input[@placeholder="MM/DD/YYYY"])[1]').should('exist').click();
        this.pickDate()
    }

    pickDate()
   {
       cy.xpath('(//tbody/tr[last()]/td[last()])[last()]').click();
   }

    clickContinueButton() {
        cy.xpath(selectors.continueButtion).click();
    }

    clickContinueInCreateFile()
    {
        cy.xpath(selectors.continueButtion).should('exist').click();
        cy.xpath('//h2').then((res)=>{
            cy.log(res.text())
            if(res.text().includes('Attach Documents'))
            {
                cy.xpath(selectors.continueButtion).should('exist').click();
                cy.log('passed');
            }
        })
    }

    verifyContinueButtonDisabled()
    {
        cy.xpath(selectors.continueButtion).should('be.disabled');
    }

    verifyErrorText(errorText)
    {
        cy.get(selectors.errorText).should('have.text',errorText)
    }

    clickCreateFileButtonOnReviewOfAFile() {
        cy.xpath(selectors.createFileButtonInReviewPageOfFile).click();
    }

    verifyCreatedFile(address) {
        cy.xpath('//div[text()="'+address+'"]').click();
    }

    enterBasicInfo(loanNumber, loanAmount, address,streetNumber,streetName,city,postalCode) {
    
        this.enterLoanNumber(loanNumber);
        this.selectClosingDate();
        this.enterLoanAmount(loanAmount);
        this.enterPropertyAddress(address);
        this.enterStreetNumber(streetNumber);
        this.enterStreetName(streetName);
        this.enterCity(city);
        this.enterPostalCode(postalCode);
    }

    enterBorrowerDetails(firstName, lastName, email, phoneNumber, SSN)
     {
        cy.get(selectors.enterBorrowerFirstName).type(firstName);
        cy.get(selectors.enterBorrowerLastName).type(lastName);
        cy.get(selectors.enterBorrowerEmail).type(email);
        cy.xpath(selectors.enterPhoneNumberOfBorrower).clear();
        cy.xpath(selectors.enterPhoneNumberOfBorrower).type(phoneNumber);
        cy.xpath(selectors.enterSSNOfBorrower).clear();
        cy.xpath(selectors.enterSSNOfBorrower).type(SSN);
        this.clickContinueButton();
    }
    addSettlementOrder()
    {
      this.selectSettlementOrder();
      this.enterSettlementDate();
      this.selectSettlementVendorFromTheList()
    }

    addSettlementOrderInFileDetailsPage()
    {
        this.enterSettlementDate();
        this.selectSettlementVendorFromTheList();
    }
    selectSettlementOrder()
    {
        cy.xpath(selectors.settlementOrderBttn).click();
    }
    enterSettlementDate()
    {
        cy.xpath(selectors.settlementDateBttn).click();
        this.pickDate()
    }
    selectSettlementVendorFromTheList()
    {
       cy.xpath(selectors.settlementVendorDropdown).click();
       this.selectVendor()
    }
    addTitleOrder()
    {
        this.selectTitleOrder();
        this.enterTitleDueDate();
        this.selectTitleVendorFromTheList();
    }

    addTitleOrderInFileDetailsPage()
    {
        this.enterTitleDueDate();
        this.selectTitleVendorFromTheList();
    }

    selectTitleOrder()
    {
        cy.xpath(selectors.titleOrderBttn).should('exist').click();
    }
    enterTitleDueDate()
    {
        cy.xpath(selectors.titleDateBttm).should('exist').click();
        this.pickDate();
    }
    selectTitleVendorFromTheList()
    {
        cy.xpath(selectors.titleVendorDropdown).should('exist').click();
        this.selectVendor();
    }

    selectVendor()
    {
        cy.xpath('//div/ul/li/span')
    .then(listing => {        
      const randomNumber = this.getRandomInt(4, listing.length-1);
      cy.log(randomNumber);
       cy.xpath('(//div/ul/li[last()]/span)[1]').click();   
         
  })
    }
 
    selectLoanProcessor()
    {
        cy.xpath(selectors.clickLoanProcessorDropDown).click()
     cy.xpath('//div/ul/li/span')
     .then(listing => {        
     const randomNumber = this.getRandomInt(2, listing.length-2); 
       cy.xpath('(//div/ul/li['+randomNumber+']/span)').click();  
  })
}

    addForeclosureOrder()
    {
        this.selectForeclosurOrder();
        this.enterForeclosureDueDate();
        this.selectForeclosureServicerFromTheList();
    }
    addForeclosureOrderInFileDetailsPage()
    {
        this.enterForeclosureDueDate();
        this.selectForeclosureServicerFromTheList();
    }
    selectForeclosurOrder()
    {
        cy.xpath(selectors.foreclosureOrderBttn).should('exist').click();
    }
    enterForeclosureDueDate()
    {
        cy.xpath(selectors.foreclosureDateBttn).should('exist').click();
        this.pickDate();
    }
    selectForeclosureServicerFromTheList()
    {
        cy.xpath(selectors.servicerDropdown).should('exist').click();
        this.selectVendor();
    }
    selectAppraisalOrder()
    {
        cy.xpath(selectors.appraisalOrderBttn).click();
    }
    selectCustomerFacingOrder(vendorName)
    {
        cy.xpath(selectors.bankruptcyOrderBttn).click();
        cy.xpath('//ul/li[@title="'+vendorName+'"]').click();
    }
    verifyNavigatedToFileDetailsPage()
    {
        cy.xpath(selectors.fileDeatilsPage).should('have.text',"File Details");
    }
    veifyLoanType(loanType)
    {
      cy.xpath(selectors.loanTypeTxt).should('have.text',loanType)
    }

    verifyLoanNumber(loanNumber)
    {
        cy.xpath(selectors.loanNumberText).should('have.text',loanNumber);
    }

    verifyLoanNumberInDetailsPage()
    {
        cy.get('@file name').then((res)=>{
            cy.log(res.text())
           var loanNumber=res.text();
            cy.xpath(selectors.loanNumberText).should('have.text',loanNumber)
        })
    }
    
    verifyAddressInFileDetailsPage(address)
    {
        cy.xpath(selectors.addressTextInFileDetailsPage).should('contain.text',address);
    }
    clickOnCloseDateSorting()
    {
        cy.xpath(selectors.closeDateSorting).click();
        cy.wait(3000);
    }
    verifyFileDetailsInTheList(loanNumber,address)
    {
        cy.xpath(selectors.loanNumberInTheList).should('contain.text',loanNumber);
        cy.xpath('//tbody/tr/td[2][text()="'+loanNumber+'"]/preceding-sibling::td/text()').should('contain.text',address);
    }
    verifyMessage(message)
    {
        cy.get(".react-toast-notifications__toast__content").should('have.text', message)
    }
    verifyNoOfRowsDropDown()
    {
        cy.get(selectors.noOfRowsDropDown).should('exist');
    }
    selectNoOfRowsPerPage(number)
    {
        cy.get(selectors.noOfRowsDropDown).should('exist').click();
        cy.xpath("//ul/li/span[text()='"+number+" per page']").click();
    }
    verifyNoOfFilesInTheList(number)
    {
        cy.xpath('//tbody').children().should('have.length', number);
    }
    verifyPageTitle(title)
    {
        cy.xpath(selectors.filesPageTitle).should('have.text',title)
    }


    navigateToInProgressFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.inProgressTab).should('exist').click();
    }

    navigateToMyFavoritesFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.favoritesTab).should('exist').click();
        cy.wait(4000)
    }

    navigateToCancelledFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.cancelledTab).should('exist').click();
    }

    navigateToCompletedFilesTab()
    {
        cy.wait(2000);
        cy.get(selectors.completedTab).should('exist').click();
        cy.wait(4000);
    }

    verifyNavigatedToTab(tab)
    {
        cy.xpath('//div[text()="'+tab+'"]').should('contain.class',"stavviz-tab-is-active");
        this.verifyFilesTabSubtitle("Files: "+tab+"");
    }

    verifyStatusTextOfFileInTheList(status)
    {
        cy.xpath(selectors.statusTxt).should('contain.text',status)
    }

    clickOnFile(file)
    {
        cy.contains(file).click();
    }
    copyFileName()
     {
         cy.xpath('//tbody/tr[1]/td[2]/text()').as('file name');
     }

    navigateToFileDetailsPage()
    {
        cy.xpath('//tbody/tr[2]/td[2]/text()').as('file name');
        cy.get('@file name').then((res)=>{
            cy.log(res.text())
        })
        cy.xpath(selectors.firstFileInTheList).click();
        cy.wait(5000);
        
    }
    uploadDocument(document)
    {
        var description=faker.name.findName();
        this.clickDocumentsButton();
        this.clickAddDocumentButton();
        this.attachDocument(document);
        this.selectDocumentType();
        cy.get(selectors.documentDescription).should('exist').type(description);
    }
    clickDocumentsButton()
    {
        cy.get(selectors.documentsBttn).click();
    }
    clickAddDocumentButton()
    {
        cy.xpath(selectors.addDocumentBttn).click();
    }
    attachDocument(document)
    {
        cy.get(selectors.uploadDocumentField).attachFile(document);
    }
    clickUploadButton()
    {
        cy.xpath(selectors.uploadButton).click();
    }
    selectDocumentType()
    {
        cy.get(selectors.selectDocumentTypeDropDown).click();
        this.selectVendor();
    }
    
    verifyAddedDocumentInTheList(documentName)
    {
        cy.xpath(selectors.addedDocumentName).should('have.text',documentName);
    }
    updateLoanNumber(loanNumber)
    {  
        this.clickSetLoanNumberButton();
        this.editLoanNumber(loanNumber);
        this.saveEditedLoanNumber();
    }
    clickSetLoanNumberButton()
    {
        cy.xpath(selectors.setLoanNumberBttn).click();
    }
    editLoanNumber(loanNumber)
    {
        cy.get(selectors.setLoanNumberInputTxBx).clear().type(loanNumber)
    }
    saveEditedLoanNumber()
    {
        cy.get(selectors.setLoanNumberSaveBttn).click();
    }
    clickOnAssignCloserButton()
    {
        cy.xpath(selectors.assignCloserBtnn).click();
    }
    selectCloserFromTheDropdown()
    {
        cy.get(selectors.assignACloserDropDown).should('exist').click();
        cy.xpath('//div/ul/li/span')
    .then(listing => {        
      const randomNumber = this.getRandomInt(4, listing.length-1);
      cy.log(randomNumber);
       cy.xpath('(//div/ul/li['+randomNumber+']/span)[1]').click();   
      })
    }
    clickSaveButton()
    {
        cy.xpath(selectors.saveBttn).click();
    }
    assignCloser()
    {
        this.clickOnAssignCloserButton();
        this.selectCloserFromTheDropdown();
        this.clickSaveButton();
    }
    verifyAssignedCloserName(closer)
    {
        cy.xpath(selectors.closerName).should('have.text',closer);
    }
    
    clickAssignLoanProcessorLink()
    {
        cy.xpath(selectors.assignLoanProcessorLink).click();
    }
    selectLoanProcessorFromTheDropDown()
    {
        cy.get(selectors.assignLoanProcessorDropDown).click();
        cy.xpath('//div/ul/li/span')
    .then(listing => {        
      const randomNumber = this.getRandomInt(4, listing.length-1);
      cy.log(randomNumber);
       cy.xpath('(//div/ul/li['+randomNumber+']/span)[1]').click();   })
    }
    assignLoanProcessor()
    {
        this.clickAssignLoanProcessorLink();
        this.selectLoanProcessorFromTheDropDown();
        this.clickSaveButton();
    }
    verifyAssignedLoanProcessor(loanProcessor)
    {
        cy.xpath(selectors.loanProcessorName).should('have.text',loanProcessor);
    }

    verifyCreateFileButton()
    {
        cy.get(selectors.CreateFileButton).should('exist');
    }

    verifySearchBar()
    {
        cy.get(selectors.fileSearchBar).should('exist');
    }

    verifyFilesTabSubtitle(subtitle)
    {
        cy.xpath(selectors.filesTabSubtitle).should('contain.text',subtitle)
    }

    verifyTabView()
    {
        this.verifyCreateFileButton();
        this.verifyPageTitle("Files");
        this.verifyNoOfRowsDropDown();
        this.verifySearchBar();
        cy.get(selectors.inProgressTab).should('exist');
        cy.get(selectors.cancelledTab).should('exist');
        cy.get(selectors.favoritesTab).should('exist');
        cy.get(selectors.completedTab).should('exist');
        cy.xpath(selectors.partyOrBorrowerColoumn).should('exist');
        cy.xpath(selectors.fileNameColoumn).should('exist');
        cy.xpath(selectors.closeDateColoumn).should('exist');
        cy.xpath(selectors.ordersColoumn).should('exist');
        cy.xpath(selectors.filesList).should('exist');
    }

    verifyMyFavoritesTabView()
    {
        this.verifyCreateFileButton();
        this.verifyPageTitle("Files");
        this.verifyNoOfRowsDropDown();
        this.verifySearchBar();
        cy.get(selectors.inProgressTab).should('exist');
        cy.get(selectors.cancelledTab).should('exist');
        cy.get(selectors.favoritesTab).should('exist');
        cy.get(selectors.completedTab).should('exist');
        cy.xpath(selectors.partyOrBorrowerColoumn).should('exist');
        cy.xpath(selectors.fileNameColoumn).should('exist');
        cy.xpath(selectors.closeDateColoumn).should('exist');
        cy.xpath(selectors.ordersColoumn).should('exist');
        cy.xpath(selectors.statusColoumn).should('exist');
        cy.xpath(selectors.filesList).should('exist');
    
    }
    

    verifyFilesPageView()
    {
      this.verifyCreateFileButton();
      this.verifyPageTitle("Files");
      this.verifyNoOfRowsDropDown();
      this.verifySearchBar();
      cy.get(selectors.inProgressTab).should('exist');
      cy.get(selectors.cancelledTab).should('exist');
      cy.get(selectors.favoritesTab).should('exist');
      cy.get(selectors.completedTab).should('exist');
      this.verifyFilesTabSubtitle("Files: In Progress");
      cy.xpath(selectors.filesList).should('exist');
    }

    verifyAddedOrderStatus(order,status)
    {
        cy.xpath('//div[@class="subtitle"]/../div[text()="'+order+'"]/../following-sibling::div/div/div[2]/div/div/text()').should('have.text',status)
    }

    verifyAdderOrderDueDate(order,duedate)
    {
        cy.xpath('//div[@class="subtitle"]/../div[text()="'+order+'"]/../following-sibling::div/div[3]/div[2]/text()').should('contain.text',duedate)
    }

    verifyAddedOrderVendor(order,vendor)
    {
        cy.xpath('//div[@class="subtitle"]/../div[text()="'+order+'"]/../following-sibling::div/div[5]/div[2]/text()').should('have.text',vendor)
    }

    verifyAddedOrder(order)
    {
        cy.xpath(selectors.addedOrderInFileDetailsPage).should('contain.text',order);
    }
    verifyAddedOrderInTheFileDetailsPage(order,status)
    {
        this.verifyAddedOrder(order);
        this.verifyAddedOrderStatus(order,status);
    }

    verifyFileDetailsInTheFileDetailsPage(loanNumber,loanType,address)
    {
    this.verifyNavigatedToFileDetailsPage();
    this.verifyLoanNumber(loanNumber);
    this.veifyLoanType(loanType);
    this.verifyAddressInFileDetailsPage(address);
    }

    verifyFileAddressInTheList(fileId,address)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../preceding-sibling::td/text()').should('contain.text',address)
    }

    verifyBorrowerOfFileInTheList(fileId,borrower)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../preceding-sibling::td/div/text()').should('contain.text',borrower)
    }

    verifyAddedOrdersInTheList(fileId,orders)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../td[4]').should('contain.text',orders)
    }

    verifyClosingDateInTheList(fileId,closeDate)
    {
        cy.xpath('//tbody/tr[@class]/td[2][text()="'+fileId+'"]//../td[3]').should('have.text',closeDate);
    }

    verifyAddedFileInTheList(fileId,address,borrower,orders,closeDate)
    {
        this.verifyFileAddressInTheList(fileId,address);
        this.verifyBorrowerOfFileInTheList(fileId,borrower);
        this.verifyAddedOrdersInTheList(fileId,orders);
        this.verifyClosingDateInTheList(fileId,closeDate);
    }

    clickActionsDropdwon()
    {
        cy.xpath(selectors.actionsDropdown).should('exist').click();
    }

    archiveThefile()
    {
        this.clickActionsDropdwon();
        cy.get(selectors.archiveFileBttn).should('exist').click();
    }

    verifyFileStatusInFileDetailsPage(status)
    {
        cy.xpath(selectors.fileStatusInDetailsPage).should('have.text',status)
    }

    verifyNotPresentInTheList()
    {
        cy.get('@file name').then((res)=>{
            var file=res.text()
            cy.xpath('//tbody/tr/td[2][text()="'+file+'"]').should('not.exist');
        })
    }

    reopenTheArchivedFile()
    {
        this.clickActionsDropdwon();
        cy.get(selectors.reopenFileBttn).should('exist').click();
    }

    clickAddOrderButton()
    {
        cy.xpath(selectors.addOrderBttn).should('exist').click();
    }

    clickSubmitOrderButton()
    {
        cy.xpath(selectors.submitOrderBttn).should('be.enabled').click()
    }

    verifyRateTypeOfFile(rateType)
    {
        cy.xpath(selectors.rateTypeText).should('have.text',rateType);
    }

    verifyTabSubtitleInFileDetailsPage(subtitle)
    {
      cy.xpath(selectors.tabSubtitleInFileDetailsPage).should('contain.text',subtitle)
    }

    verifyAddOrderButton()
    {
        cy.xpath(selectors.addOrderBttn).should('exist');
    }

    verifyStartDiscuttionButton()
    {
        cy.xpath(selectors.startDiscussionBttn).should('exist');
    }

    verifyCertifiedDocuments()
    {
        cy.get(selectors.certifiedDocuments).should('exist');
    }

    verifyDocuments()
    {
        cy.xpath(selectors.documents).should('exist');
    }

    verifyAddDocumentsButton()
    {
        cy.xpath(selectors.addDocumentBttn).should('exist');
    }

    clickMessagesTab()
    {
        cy.get(selectors.messagesTabInFileDetails).should('exist').click();
    }

    clickDetailsTab()
    {
        cy.get(selectors.detailsTabFileDetail).should('exist').click();
    }

    verifyNavigatedToTabInDetailsPage(tab)
    {
        cy.xpath('//div[text()="'+tab+'"]').should('contain.class',"stavviz-tab-is-active");
    }

    clickStartDiscussionButton()
    {
        cy.xpath(selectors.startDiscussionBttn).should('exist').click();
    }

    enterSubjectLine(subject)
    {
        cy.get(selectors.subjectLine).should('exist').type(subject);
    }

    selectVendorForDiscussion()
    {
        cy.get(selectors.sharedWithDropDown).should('exist').click();
        this.selectVendor();
        cy.xpath('//input[@placeholder="Select Vendor"]').invoke('val').as('value');
    }

    enterMessageBody(body)
    {
        cy.get(selectors.messageBody).should('exist').type(body);
    }

    clickSendButton()
    {
       cy.xpath(selectors.sendButtonInBeginDiscussion).should('be.enabled').click();
    }

    verifyVendorInMessageThread()
    {
        cy.get('@value').then((res)=>{
            cy.xpath(selectors.vendorNameInMessageThread).should('contain.text',res);
        })
        
    }

    verifySubjectInMessageThread(subject)
    {
        cy.xpath(selectors.subjectInMessageThread).should('contain.text',subject)
    }

    verifyLastMessageInMessageThread(message)
    {
        cy.xpath(selectors.lastMessage).should('contain.text',message);
    }

    copyTheUserName()
    {
        cy.xpath(selectors.userNameInProfile).as('userName');
    }

    verifyMessageAuthor()
    {
        this.copyTheUserName()
        cy.get('@userName').then((res)=>{
          var  author=res.text();
            cy.xpath(selectors.messageAuthor).should('contain.text',author)
        })
        
    }

    verifyLastMessageInMessageList(message)
    {
        cy.xpath(selectors.lastMessage).should('contain.text',message)
    }
    
    clickNameSorting()
    {
        cy.xpath(selectors.nameSorting).should('exist').click();
    }

    verifyMakingFileAsFovoriteOrNonFavorite()
    {
        cy.xpath(selectors.favoriteText).then((res)=>{

        if(res.text().includes('Favorite')){
            cy.get(selectors.favouriteIcon).should('exist').click();
            this.navigateToFiles();
            this.navigateToMyFavoritesFilesTab();
            cy.get('@file name').then((res)=>{
            this.verifyFileInTheList(res.text())
            })
        }
        else{
            cy.get(selectors.removeFromFavoritesIcon).should('exist').click();
            this.navigateToFiles();
            this.navigateToMyFavoritesFilesTab();
            cy.get('@file name').then((res)=>{
                this.verifyFileIsNotPresentInTheList(res.text());
                })
        }
    })    
    }

    verifyFileInTheList(file)
    {
        cy.xpath('//tbody/tr/td[2][text()="'+file+'"]').should('exist');
    }

    verifyFileIsNotPresentInTheList(file)
    {
        cy.xpath('//tbody/tr/td[2][text()="'+file+'"]').should('not.exist');
    }

    followingAndUnfollowingFile()
    {
       cy.xpath('//button/text()').then((res)=>{
       if(res.text().includes('ing')){
        cy.xpath(selectors.followButton).should('exist').click();
        this.verifyMessage("You are no longer following this file.");
       }

       else{
        cy.xpath(selectors.followButton).should('exist').click();
        this.verifyMessage("You are now following this file! You will receive email alerts when this file is updated");
       }

       })
    }

    follow()
    {
        cy.xpath(selectors.followButton).should('exist').click();
        this.verifyMessage("You are now following this file! You will receive email alerts when this file is updated");

    }

    clickEditButtinOfAnOrder()
    {
        cy.xpath(selectors.editButtonOfAnOrderl).should('exist').click();
    }

    clickReassignButton()
    {
        cy.xpath(selectors.reassignButtonOfOrder).should('exist').click();
    }

    selectVendorForReassigning()
    {
        cy.get(selectors.selectVendorForReassignVendor).should('exist').click();
        this.selectVendor();
        cy.get(selectors.selectVendorForReassignVendor).invoke('val').as('reassignedVendor')
    }

    clickReassignOrderButton()
    {
        cy.xpath(selectors.reassignOrderButton).should('exist').click();
    }

    verifyReassignedVendor()
    {
        cy.get('@reassignedVendor').then((res)=>{

            cy.xpath(selectors.vendorNameInOrder).should('contain.text',res)
        })
    }

    cancelTheOrder()
    {
        cy.xpath(selectors.cancelButtonOfOrder).should('exist').click();
        cy.xpath(selectors.cancelItButton).should('exist').click();
    }

    verifyStatusOfOrder(status)
    {
        cy.xpath(selectors.statusOfOrder).should('have.text',status)
    }

    createAFile()
    {
    var loanNumber="loan"+Math.floor(Math.random()*1000);
    var loanAmount=Math.floor(Math.random()*1000);
    var address=100+Math.floor(Math.random())*100;
    var addressUnit=1+Math.floor(Math.random())*100;
    var purchaseAmount=Math.floor(Math.random()*1000);
    var streetName=faker.address.streetName();
    var streetNumber=address;
    var city=faker.address.cityName();
    var postalCode=faker.address.zipCode();
    var borrowerFirstName=faker.name.firstName();
    var borrowerLastName=faker.name.lastName();
    var borrowerEmail=faker.internet.email();
    var borrowerPhone=faker.phone.phoneNumber();
    var borrowerSSN=faker.phone.phoneNumber();

    //Navigate to Files page
    this.navigateToFiles();

    //Create file
    this.clickCreateFileButton();
    this.clickPurchaseType();
    this.enterBasicInfo(loanNumber,loanAmount,address,streetNumber,streetName,city,postalCode);
    cy.get('[name="Unit/Apt"]').clear().type(addressUnit)
    this.selectLoanProcessor();
    this.enterPurchasePrice(purchaseAmount);
    this.clickContinueButton();
    this.enterBorrowerDetails(borrowerFirstName,borrowerLastName,borrowerEmail,borrowerPhone,borrowerSSN);
    this.addTitleOrder();
    this.clickContinueInCreateFile();
    this.clickCreateFileButtonOnReviewOfAFile();
    }

    clickReopenButton()
    {
        cy.xpath(selectors.reopenBttnOfOrder).should('exist').click();
    }

    clickAddClosingMeetingButton()
    {
        cy.xpath(selectors.addClosingBttn).should('exist').click();
    }

    copyAddressInFileDetailsPage()
    {
        cy.xpath('//h3/div/text()').as('meetingAdress');
    }

    verifyAddressInMeetingDetailsPage()
    {
        cy.get('@meetingAdress').then((res)=>{
            cy.xpath('//h3/div/text()').should('contain.text',res.text())
            
        })
    }

    copyTheLoanNumberInFileDetailsPage()
    {
        cy.xpath(selectors.loanNumberText).as('loanNumberInDetailsPage');
    }

    searchTheFileandNavigateToFileDetailsPage()
    {
        cy.get('@loanNumberInDetailsPage').then((res)=>{

         cy.get(selectors.fileSearchBar).should('exist').type(res.text());
         cy.xpath('(//div[text()="'+res.text()+'"])[1]').should('exist').click();
         cy.wait(3000)
        })
    }

    verifyMeetingCardDetailsInFileDetailsPage()
    {
        cy.get('@loanNumberInDetailsPage').then((loanNumber)=>{
            
        cy.xpath(selectors.meetingCardInDetailsPage).should('exist');
        cy.xpath(selectors.loanNumberInMeetingCard).should('contain.text',loanNumber.text())
        })
    }
}

