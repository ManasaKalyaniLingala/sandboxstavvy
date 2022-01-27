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


     it("Verify navigating to Pending orders page",()=>{
         var status1="Pending";
         
         //Navigate to pending orders page
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();

         //Verify Navigated to Pending orders page
         orders.verifyPageHeading(status1);
     })


    it("verify navigating to In Progress Orders page",()=>{
        
        var heading="In Progress";
        var status2="In progress";

        //Navigate to In Progress orders page
        orders.navigateToAssignedOrders();
        orders.navigateToInProgressOrders();

        //Verify navigating to In progress orders page
        orders.verifyPageHeading(heading);
        orders.verifystatusOfOrdersInTheList(status2);
    })


    it("verify navigated to Completed orders page",()=>{

        var status="Completed";

        //Navigate to Completed Orders page
        orders.navigateToAssignedOrders();
        orders.clickOnArchivedButton();
        orders.navigateToCompletedOrders();

        //Verify navigated to completed orders page
        orders.verifyPageHeading(status);
        orders.verifystatusOfOrdersInTheList(status);
    })


    it("Verify navigating to Favorite orders page",()=>{
         var heading="Favorites";

        //Navigate to Favorites orders page.
        orders.navigateToAssignedOrders();
        orders.navigateToMyFavoritesOrders();

        //Verify navigated to Favorites order page
        orders.verifyPageHeading(heading);
    })


     it("Verify accepting a pending order in the list",()=>{
         var file="45656";
         var orderType="Title";
         var status1="Pending";
         var action="Accept";
         var status2="In Progress";

         //Navigate to Pending orders page
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);

         //Accepting order in the list
         orders.acceptOrRejectOrderByNameAndType(file,orderType,action);

         //verification
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status2);
         orders.navigateToOrdersListThroughAssignedOrdersLink();
         orders.verifyPageHeading(status2);
         orders.verifyOrderDetailsInTheList(file,orderType,"In progress");
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
         orders.verifyOrderNotPresentInTheList(file,orderType);
     })
   

     it("Verify rejecting a pending order in the list",()=>{

        var file="45656";
        var orderType="Settlement";
        var status1="Pending";
        var status2="Rejected";
        var action="Reject";

        //Navigate to Pending orders page
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);

         //Rejecting order in the list
         orders.acceptOrRejectOrderByNameAndType(file,orderType,action);

         //verifying rejected order
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status2);
         orders.navigateToOrdersListThroughAssignedOrdersLink();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
         orders.verifyOrderNotPresentInTheList(file,orderType);
     })


     it("verify accepting an order in order details page",()=>{
         var file="2222";
         var orderType="Settlement";
         var status1="Pending";
         var status2="In Progress";
         var action="Accept";

         //Navigate to Pending orders page
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);

         //Accepting order in the order details page
         orders.navigateToOrderDetailsPage(file);
         orders.acceptOrRejectOrderInDetailsPage(orderType,action);
        
         //verifying accepted order
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status2);
         orders.navigateToOrdersListThroughAssignedOrdersLink();
         orders.verifyPageHeading(status1);
         orders.verifyOrderNotPresentInTheList(file,orderType);
         orders.navigateToInProgressOrders();
         orders.verifyPageHeading(status2);
         orders.verifyOrderDetailsInTheList(file,orderType,"In progress");
     })
     

     it("verify rejecting order in order details page",()=>{

         var file="2222";
         var orderType="Title";
         var status1="Pending";
         var status2="Rejected";
         var action="Reject";

         //Navigate to Pending orders page
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
         orders.navigateToOrderDetailsPage(file);

         //Reject order in order details page
         orders.acceptOrRejectOrderInDetailsPage(orderType,action);
         orders.clickCancelItButton();

        //verifying rejected order
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status2);
         orders.navigateToOrdersListThroughAssignedOrdersLink();
         orders.verifyPageHeading(status1);
         orders.verifyOrderNotPresentInTheList(file,orderType);
     })
    })