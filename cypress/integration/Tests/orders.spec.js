/// <reference types="cypress" />

import { Login } from '../Pages/login_page';
import { Orders } from '../Pages/orders_page';

const login = new Login();
const orders = new Orders();

describe("Assigned Order test cases" , ()=>{

    beforeEach("Login as valid user",()=>{

        login.navigateToUrl();
        login.loginToApplication();
     })


     it("Verify navigating to Origination orders page and its view",()=>{
         
         //Navigate to Orders page
         orders.navigateToOrders();

         //Navigate to Origination orders page
         orders.navigateToOriginationOrdersPage();

         //Verify Orders page view
         orders.verifyOriginationOrdersPageView("Origination Orders","Origination","Origination: Pending");
     })


     it("verify navigating to Servicing orders page and its view",()=>{
        
        //Navigate to Orders page
        orders.navigateToOrders();

        //Navigate to Servicing orders page
        orders.navigateToServicingOrdersPage();

        //Verify Servicing Orders page view
        orders.verifyServicingOrdersPageView("Servicing Orders","Servicing","Servicing: Submitted");
     })


     it("Verify accepting a pending Origination order in the list",()=>{
         
         var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var action="Accept";
         var status="In Progress";

         //Navigate to Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);

         //Accepting order in the list
         orders.acceptOrRejectOrder(action);

         //verification
         orders.verifyTabSubtitle(PendingSubtitle);
         orders.verifyOrderNotPresentInTheList();
         orders.navigateToInProgressOrdersTab();
         orders.verifyTabSubtitle(progressSubtitle);
         orders.verifyOrderDetailsInTheList();
         orders.navigateToOrderDetailsPage();
         orders.verifyOrderDetailsInTheDetailsPage(status);
     })
   

     it("Verify rejecting a pending Origination order in the list",()=>{

        var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var action="Reject";
        
         //Navigate to Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);

         //Accepting order in the list
         orders.acceptOrRejectOrder(action);

         //verification
         orders.verifyTabSubtitle(PendingSubtitle);
         orders.verifyOrderNotPresentInTheList();
         orders.navigateToInProgressOrdersTab();
         orders.verifyTabSubtitle(progressSubtitle);
         orders.verifyOrderNotPresentInTheList();
     })


     it("verify accepting Origination order in order details page",()=>{

         var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var orderType="Settlement";
         var status="In Progress";
         var action="Accept";

         //Navigate to Orignatio Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);


         //Accepting order in the order details page
         orders.navigateToOrderDetailsPage();
         orders.acceptOrRejectOrderInDetailsPage(action);
        
         //verifying accepted order
         orders.verifyOrderDetailsInTheDetailsPage(status);
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);
         orders.verifyTabSubtitle(PendingSubtitle);
         orders.verifyOrderNotPresentInTheList(orderType);
         orders.navigateToInProgressOrdersTab();
         orders.verifyTabSubtitle(progressSubtitle);
         orders.verifyOrderDetailsInTheList();
     })
     

     it("verify rejecting Origination order in order details page",()=>{

         var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var status="Rejected";
         var action="Reject";

         //Navigate to Orignatio Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);


         //Accepting order in the order details page
         orders.navigateToOrderDetailsPage();
         orders.acceptOrRejectOrderInDetailsPage(action);
         orders.clickCancelItButton();

        //verifying rejected order
        orders.verifyOrderDetailsInTheDetailsPage(status);
        orders.navigateToOriginationOrdersPage();
        orders.verifyPageHeading(heading,page);
        orders.verifyTabSubtitle(PendingSubtitle);
        orders.verifyOrderNotPresentInTheList();
        orders.navigateToInProgressOrdersTab();
        orders.verifyTabSubtitle(progressSubtitle);
        orders.verifyOrderNotPresentInTheList();
     })

     it("Verify Acepting servicing order in the list",()=>{

         var heading="Servicing Orders";
         var page="Servicing";
         var PendingSubtitle="Servicing: Submitted";
         var progressSubtitle="Servicing: In progress";
         var action="Accept";
         var status="In Progress";


        //Navigate to Orignatio Pending orders page
        orders.navigateToOrders();
        orders.navigateToServicingOrdersPage();
        orders.verifyPageHeading(heading,page);

        //Accept order in the list
        orders.acceptOrRejectServicingOrder(action);

        //Verify accepted order
        orders.verifyTabSubtitle(PendingSubtitle);
        orders.verifyServicingOrderNotPresentInTheList();
        orders.navigateToInProgressOrdersTab();
        orders.verifyTabSubtitle(progressSubtitle);
        orders.verifyServicingOrderPresentInTheList();
        orders.navigateToServicingOrderDetailsPage();
        orders.verifyServicingOrderDetailsInTheDetaisPage(status);
     })

     it("Verify Rejecting a Servicing order in the list",()=>{

         var heading="Servicing Orders";
         var page="Servicing";
         var PendingSubtitle="Servicing: Submitted";
         var progressSubtitle="Servicing: In progress";
         var action="Reject";

        //Navigate to Orignatio Pending orders page
        orders.navigateToOrders();
        orders.navigateToServicingOrdersPage();
        orders.verifyPageHeading(heading,page);

        //Accept order in the list
        orders.acceptOrRejectServicingOrder(action);

        //Verify rejected order
        orders.verifyTabSubtitle(PendingSubtitle);
        orders.verifyServicingOrderNotPresentInTheList();
        orders.navigateToInProgressOrdersTab();
        orders.verifyTabSubtitle(progressSubtitle);
        orders.verifyServicingOrderNotPresentInTheList();
     })

     it("Verify Accepting a Servicing order in the order details page",()=>{

        var heading="Servicing Orders";
        var page="Servicing";
        var PendingSubtitle="Servicing: Submitted";
        var progressSubtitle="Servicing: In progress";
        var action="Accept";
        var status="In Progress";

       //Navigate to Orignation Pending orders page
       orders.navigateToOrders();
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       
       //Navigate to order details page
       orders.navigateToServicingOrderDetailsPage();

       //Accept the foreclosure order in the order details page
       orders.acceptOrRejectServicingOrderInDetailsPage(action);

       //Verify accepted order
       orders.verifyServicingOrderDetailsInTheDetaisPage(status)
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       orders.verifyTabSubtitle(PendingSubtitle);
       orders.verifyServicingOrderNotPresentInTheList();
       orders.navigateToInProgressOrdersTab();
       orders.verifyTabSubtitle(progressSubtitle);
       orders.verifyServicingOrderPresentInTheList();
     })

     it("Verify rejecting a Servicing order in the order details page",()=>{

        var heading="Servicing Orders";
        var page="Servicing";
        var action="Reject";
        var PendingSubtitle="Servicing: Submitted";
        var progressSubtitle="Servicing: In progress";
        var status="Rejected";

       //Navigate to Orignation Pending orders page
       orders.navigateToOrders();
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       
       //Navigate to order details page
       orders.navigateToServicingOrderDetailsPage();

       //Accept the foreclosure order in the order details page
       orders.acceptOrRejectServicingOrderInDetailsPage(action);
       orders.clickCancelItButton();

       //Verify accepted order
       orders.verifyServicingOrderDetailsInTheDetaisPage(status)
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       orders.verifyTabSubtitle(PendingSubtitle);
       orders.verifyServicingOrderNotPresentInTheList();
       orders.navigateToInProgressOrdersTab();
       orders.verifyTabSubtitle(progressSubtitle);
       orders.verifyServicingOrderNotPresentInTheList();
     })

    })