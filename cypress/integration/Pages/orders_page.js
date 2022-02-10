import selectors from '../Selectors/orders';
export class Orders{

    navigateToOrders()
    {
      cy.get(selectors.ordersBttnInSidebar).should('exist').click();
      cy.get(selectors.ordersBttnInSidebar).should('contain.class',"font-medium opacity-100")
    }

    navigateToOriginationOrdersPage()
    {
        cy.get(selectors.originationOrdersBttnInSidebar).should('exist').click();
    }

    navigateToServicingOrdersPage()
    {
        cy.get(selectors.servicingOrdersBtnnInSidebar).should('exist').click();
    }
    navigateToPendingOrdersTab()
    {
        cy.wait(2000);
        cy.get(selectors.pendingOrdersTab).should('exist').click();
    }

    navigateToInProgressOrdersTab()
    {
        cy.wait(2000);
        cy.get(selectors.inProgressOrdersTab).should('exist').click();
    }

    navigateToMyFavoritesOrdersTab()
    {
        cy.wait(2000);
        cy.get(selectors.favoritesOrdersTab).should('exist').click()
    }

    clickOnArchivedButton()
    {
        cy.get(selectors.archivedOrdersBttn).click();
    }

    navigateToCompletedOrdersTab()
    {
        cy.get(selectors.completedOrdersTab).should('exist').click();
    }

    navigateToReadyOrdersTab()
    {
        cy.get(selectors.readyOrdersTab).should('exist').click();
    }

    verifyTabSubtitle(subtitle)
    {
        cy.xpath(selectors.OrdersTabSubtitle).should('contain.text',subtitle)
    }
    

    verifyOriginationOrdersPageView(heading,page,subtitle)
    {
        this.verifyPageHeading(heading,page)
        cy.xpath(selectors.createOrderBttn).should('exist');
        cy.get(selectors.noOfRowsDropDown).should('exist');
        cy.get(selectors.pendingOrdersTab).should('exist');
        cy.get(selectors.inProgressOrdersTab).should('exist');
        cy.get(selectors.completedOrdersTab).should('exist');
        cy.get(selectors.favoritesOrdersTab).should('exist');
        this.verifyTabSubtitle(subtitle);
        cy.get(selectors.ordersSearchBar).should('exist');
        cy.xpath(selectors.ordersList).should('exist');
    }
     verifyServicingOrdersPageView(heading,page,subtitle)
     {
        this.verifyPageHeading(heading,page)
        cy.xpath(selectors.createOrderBttn).should('exist');
        cy.get(selectors.noOfRowsDropDown).should('exist');
        cy.get(selectors.pendingOrdersTab).should('exist');
        cy.get(selectors.inProgressOrdersTab).should('exist');
        cy.get(selectors.completeServingTab).should('exist');
        cy.get(selectors.favoritesOrdersTab).should('exist');
        cy.get(selectors.readyOrdersTab).should('exist');
        this.verifyTabSubtitle(subtitle);
        cy.get(selectors.ordersSearchBar).should('exist');
        cy.xpath(selectors.ordersList).should('exist');
     }

     acceptOrRejectOrderByNameAndType(fileName,orderType,action)
     {
        cy.xpath('//tbody/tr/td[1][text()="'+fileName+'"]/../td[4][text()="'+orderType+'"]/../td[7]/div/div/button[text()="'+action+'"]').should('exist').click();
     }

     acceptOrRejectServicingOrderByName(fileName,action)
     {
        cy.xpath('//tbody/tr/td[1][text()="'+fileName+'"]/../td[5]/div/div/button[text()="'+action+'"]').should('exist').click();
     }
     
     verifyServicingOrderPresentInTheList(file)
     {
         cy.xpath('//tbody/tr/td[1][text()="'+file+'"]').should('exist');
     }

     verifyServicingOrderNotPresentInTheList(file)
     {
         cy.xpath('//tbody/tr/td[1][text()="'+file+'"]').should('not.exist');
     }

     navigateToServicingOrderDetailsPage(file)
     {
        cy.xpath('//tbody/tr/td[1][text()="'+file+'"]').should('exist').click();
     }

     verifyOrderNotPresentInTheList(file,orderType)
     {
         cy.xpath('//tbody/tr/td[1][text()="'+file+'"]/../td[4][text()="'+orderType+'"]').should('not.exist');
     }
     verifyOrderDetailsInTheList(file,orderType)
     {
         cy.xpath('//tbody/tr/td[1][text()="'+file+'"]/../td[4][text()="'+orderType+'"]').should('exist');
     }
     verifyPageHeading(heading,page)
     {
         cy.xpath(selectors.pageHeading).should('have.text',heading);
         cy.xpath('//a[text()="'+page+'"]').should('contain.class','font-medium opacity-100');
     }
     navigateToOrderDetailsPage(file,orderType)
     {
         cy.xpath('//tbody/tr/td[1][text()="'+file+'"]/../td[4][text()="'+orderType+'"]').click();
     }
     verifyFileNameInTheDetailsPage(loanNumber)
     {
         cy.xpath(selectors.loanNumberInTheDetailsPage).should('contain.text',loanNumber)
     }
     verifyOrderStatusInOrderDetails(orderType,status)
     {
         cy.xpath('//div[text()="'+orderType+'"]/../following-sibling::div/div/div/div/div').should('have.text',status)
     }
     verifyNavigatedToOrderDetailsPage()
    {
        cy.xpath(selectors.orderDetailspage).should('have.text',"Order Details");
    }
    navigateToOrdersListThroughAssignedOrdersLink()
    {
        cy.xpath(selectors.assignedOrdersLinkInOrderDetails).click();
    }
    verifyOrderDetailsInTheDetailsPage(file,orderType,status)
    {
       this.verifyFileNameInTheDetailsPage(file);
       this.verifyOrderStatusInOrderDetails(orderType,status);
    }
    acceptOrRejectOrderInDetailsPage(orderType,action)
    {
        cy.xpath('//div[text()="'+orderType+'"]/../following-sibling::div/div[5]/button[text()="'+action+'"]').click();
    }
    clickCancelItButton()
    {
        cy.xpath(selectors.cancelItBttn).should('exist').click();
    }
    verifystatusOfOrdersInTheList(status)
    {
        cy.xpath(selectors.orderStatusInTheList).should('contain.text',status);
    }

    selectNoOfRowsPerPage(number)
    {
        cy.get(selectors.noOfRowsDropDown).should('exist').click();
        cy.xpath("//ul/li/span[text()='"+number+" per page']").click();
    }

    verifyNoOfOrdersInTheList(number)
    {
        cy.xpath('//tbody').children().should('have.length', number);
    }
    
    }
