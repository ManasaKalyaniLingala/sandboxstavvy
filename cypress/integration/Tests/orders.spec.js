/// <reference types="cypress" />

import { Login } from '../Pages/login_page';
import { Orders } from '../Pages/orders_page';

const login = new Login();
const orders = new Orders();
describe("stavvy application" , ()=>{

    beforeEach("Login as valid user",()=>{
        login.navigateToUrl();
        login.loginToApplication("manasa.lingala@qualitlabs.com","16c31a0_486");
     })
     it("Verify navigating to Pending orders page",()=>{
    
         //failed test case
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading("Pending");
         orders.verifystatusOfOrdersInTheList("Pending");
     })

    it.only("verify navigating to In Progress Orders page",()=>{

        orders.navigateToAssignedOrders();
        orders.navigateToInProgressOrders();
        orders.verifyPageHeading("In Progress");
        orders.verifystatusOfOrdersInTheList("In progress");
    })


    it("verify navigated to Completed orders page",()=>{

        orders.navigateToAssignedOrders();
        orders.clickOnArchivedButton();
        orders.navigateToCompletedOrders();
        orders.verifyPageHeading("Completed");
        orders.verifystatusOfOrdersInTheList("Completed");
    })


    it("Verify navigating to Favorite orders page",()=>{

        orders.navigateToAssignedOrders();
        orders.navigateToMyFavoritesOrders();
        orders.verifyPageHeading("Favorites");
    })


     it("Verify accepting a pending order",()=>{
         var file="Loan@222";
         var orderType="Settlement"
         var status1="Pending";
         var action="Accept";
         var status2="In Progress";

         //Accepting order.
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
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
   
     it("Verify rejecting a pending order",()=>{

        var file="Loan@222";
        var orderType="Title";
        var status1="Pending";
        var status2="Rejected";
        var action="Reject";

        //Rejecting order
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
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

     it("verify accepting an order in order details page",()=>{
         var file="2222";
         var orderType="Settlement";
         var status1="Pending";
         var status2="In Progress";
         var action="Accept";

         //Accepting order
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
         orders.navigateToOrderDetailsPage(file);
         orders.acceptOrRejectOrderInDetailsPage(orderType,action);
        
         //verification
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

         //Rejecting order
         orders.navigateToAssignedOrders();
         orders.navigateToPendingOrders();
         orders.verifyPageHeading(status1);
         orders.navigateToOrderDetailsPage(file);
         orders.acceptOrRejectOrderInDetailsPage(orderType,action);
         orders.clickCancelItButton();

        //verification
         orders.verifyOrderDetailsInTheDetailsPage(file,orderType,status2);
         orders.navigateToOrdersListThroughAssignedOrdersLink();
         orders.verifyPageHeading(status1);
         orders.verifyOrderNotPresentInTheList(file,orderType)
     })

     it("verify making an order favorite",()=>{


     })
    })