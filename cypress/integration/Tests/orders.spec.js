/// <reference types="cypress" />

import { Login } from '../Pages/login_page';
import { Orders } from '../Pages/orders_page';

const login = new Login();
const orders = new Orders();

describe("Assigned Order test cases" , ()=>{

    beforeEach("Login as valid user",()=>{

        login.navigateToUrl();
        login.loginToApplication("manasa.lingala@qualitlabs.com","16c31a0_486");
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
         var file="2222";
         var orderType="Title";
         var action="Accept";
         var status="In Progress";

         //Navigate to Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);

         //Accepting order in the list
         orders.acceptOrRejectOrderByNameAndType(file,orderType,action);

         //verification
         orders.verifyTabSubtitle(PendingSubtitle);
         orders.verifyOrderNotPresentInTheList(file,orderType);
         orders.navigateToInProgressOrdersTab();
         orders.verifyTabSubtitle(progressSubtitle);
         orders.verifyOrderDetailsInTheList(file,orderType);
         orders.navigateToOrderDetailsPage(file,orderType);
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status);
     })
   

     it("Verify rejecting a pending Origination order in the list",()=>{

        var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var file="2222";
         var orderType="Settlement";
         var action="Reject";
        
         //Navigate to Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);

         //Accepting order in the list
         orders.acceptOrRejectOrderByNameAndType(file,orderType,action);

         //verification
         orders.verifyTabSubtitle(PendingSubtitle);
         orders.verifyOrderNotPresentInTheList(file,orderType);
         orders.navigateToInProgressOrdersTab();
         orders.verifyTabSubtitle(progressSubtitle);
         orders.verifyOrderNotPresentInTheList(file,orderType);
     })


     it("verify accepting Origination order in order details page",()=>{

         var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var file="1file";
         var orderType="Settlement";
         var status="In Progress";
         var action="Accept";

         //Navigate to Orignatio Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);


         //Accepting order in the order details page
         orders.navigateToOrderDetailsPage(file,orderType);
         orders.acceptOrRejectOrderInDetailsPage(orderType,action);
        
         //verifying accepted order
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status);
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);
         orders.verifyTabSubtitle(PendingSubtitle);
         orders.verifyOrderNotPresentInTheList(file,orderType);
         orders.navigateToInProgressOrdersTab();
         orders.verifyTabSubtitle(progressSubtitle);
         orders.verifyOrderDetailsInTheList(file,orderType);
     })
     

     it("verify rejecting Origination order in order details page",()=>{

         var heading="Origination Orders";
         var page="Origination";
         var PendingSubtitle="Origination: Pending";
         var progressSubtitle="Origination: In Progress";
         var file="1file";
         var orderType="Title";
         var status="Rejected";
         var action="Reject";

         //Navigate to Orignatio Pending orders page
         orders.navigateToOrders();
         orders.navigateToOriginationOrdersPage();
         orders.verifyPageHeading(heading,page);


         //Accepting order in the order details page
         orders.navigateToOrderDetailsPage(file,orderType);
         orders.acceptOrRejectOrderInDetailsPage(orderType,action);
         orders.clickCancelItButton();

        //verifying rejected order
        orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status);
        orders.navigateToOriginationOrdersPage();
        orders.verifyPageHeading(heading,page);
        orders.verifyTabSubtitle(PendingSubtitle);
        orders.verifyOrderNotPresentInTheList(file,orderType);
        orders.navigateToInProgressOrdersTab();
        orders.verifyTabSubtitle(progressSubtitle);
        orders.verifyOrderNotPresentInTheList(file,orderType);
     })

     it("Verify Acepting servicing order in the list",()=>{

         var heading="Servicing Orders";
         var page="Servicing";
         var PendingSubtitle="Servicing: Submitted";
         var progressSubtitle="Servicing: In progress";
         var file="Loan11";
         var action="Accept";
         var orderType="Foreclosure";
         var status="In Progress";


        //Navigate to Orignatio Pending orders page
        orders.navigateToOrders();
        orders.navigateToServicingOrdersPage();
        orders.verifyPageHeading(heading,page);

        //Accept order in the list
        orders.acceptOrRejectServicingOrderByName(file,action);

        //Verify accepted order
        orders.verifyTabSubtitle(PendingSubtitle);
        orders.verifyServicingOrderNotPresentInTheList(file);
        orders.navigateToInProgressOrdersTab();
        orders.verifyTabSubtitle(progressSubtitle);
        orders.verifyServicingOrderPresentInTheList(file);
        orders.navigateToServicingOrderDetailsPage(file);
        orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status);
     })

     it("Verify Rejecting a Servicing order in the list",()=>{

         var heading="Servicing Orders";
         var page="Servicing";
         var PendingSubtitle="Servicing: Submitted";
         var progressSubtitle="Servicing: In progress";
         var file="45656";
         var action="Reject";

        //Navigate to Orignatio Pending orders page
        orders.navigateToOrders();
        orders.navigateToServicingOrdersPage();
        orders.verifyPageHeading(heading,page);

        //Accept order in the list
        orders.acceptOrRejectServicingOrderByName(file,action);

        //Verify rejected order
        orders.verifyTabSubtitle(PendingSubtitle);
        orders.verifyServicingOrderNotPresentInTheList(file);
        orders.navigateToInProgressOrdersTab();
        orders.verifyTabSubtitle(progressSubtitle);
     })

     it("Verify Accepting a Servicing order in the order details page",()=>{

        var heading="Servicing Orders";
        var page="Servicing";
        var PendingSubtitle="Servicing: Submitted";
        var progressSubtitle="Servicing: In progress";
        var orderType="Foreclosure";
        var file="34343";
        var action="Accept";
        var status="In Progress";

       //Navigate to Orignation Pending orders page
       orders.navigateToOrders();
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       
       //Navigate to order details page
       orders.navigateToServicingOrderDetailsPage(file);

       //Accept the foreclosure order in the order details page
       orders.acceptOrRejectOrderInDetailsPage(orderType,action);

       //Verify accepted order
       orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status);
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       orders.verifyTabSubtitle(PendingSubtitle);
       orders.verifyServicingOrderNotPresentInTheList(file);
       orders.navigateToInProgressOrdersTab();
       orders.verifyTabSubtitle(progressSubtitle);
       orders.verifyServicingOrderPresentInTheList(file);
     })

     it("Verify rejecting a Servicing order in the order details page",()=>{

        var heading="Servicing Orders";
        var page="Servicing";
        var PendingSubtitle="Servicing: Submitted";
        var progressSubtitle="Servicing: In progress";
        var orderType="Foreclosure";
        var file="Loan@1";
        var action="Reject";
        var status="Rejected";

       //Navigate to Orignation Pending orders page
       orders.navigateToOrders();
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       
       //Navigate to order details page
       orders.navigateToServicingOrderDetailsPage(file);

       //Accept the foreclosure order in the order details page
       orders.acceptOrRejectOrderInDetailsPage(orderType,action);
       orders.clickCancelItButton();

       //Verify accepted order
       orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status);
       orders.navigateToServicingOrdersPage();
       orders.verifyPageHeading(heading,page);
       orders.verifyTabSubtitle(PendingSubtitle);
       orders.verifyServicingOrderNotPresentInTheList(file);
       orders.navigateToInProgressOrdersTab();
       orders.verifyTabSubtitle(progressSubtitle);
       orders.verifyServicingOrderNotPresentInTheList(file);
     })

    })