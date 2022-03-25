// <reference types="cypress" />

import { Users } from '../Pages/users_page'

//const testdata = require('../Pages/users');
const { faker } = require('@faker-js/faker');

const users=new Users()

describe('Users test cases',()=>{


   it("Get users",()=>{

    users.getUsers();
    users.verifyUsersList()
   })

    it("Verify inviting a new User",()=>{

        var email=faker.internet.email();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var userRole="User";
        var notaryStatus=false

        //1.Inviting user (POST)
        users.inviteUser(email,firstName,middleName,lastName,userRole,notaryStatus);

        //Verify created user
        users.verifyCreatedUser(email);

        //2.Get users  (GET)
        users.getUsers();

        //Verify created user in the list
        users.verifyUserInTheList(email,notaryStatus,userRole);
        })

 

    it("Verify inviting new User as Admin",()=>{

        var email=faker.internet.email();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var userRole="Admin";
        var notaryStatus=false;
    
        //1.Inviting user (POST)
        users.inviteUser(email,firstName,middleName,lastName,userRole,notaryStatus);
    
        //Verify created user
        users.verifyCreatedUser(email);
    
        //2.Get users  (GET)
        users.getUsers()
    
        //Verify created user in the list
        users.verifyUserInTheList(email,notaryStatus,userRole);
        })


    
    it("Verify inviting new User as Notary",()=>{

        var email=faker.internet.email();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var userRole="User";
        var notaryStatus=true;
    
        //1.Inviting user (POST)
        users.inviteUser(email,firstName,middleName,lastName,userRole,notaryStatus);
    
        //Verify created user
        users.verifyCreatedUser(email);
    
        //2.Get users  (GET)
        users.getUsers()
    
        //Verify created user in the list
        users.verifyUserInTheList(email,notaryStatus,userRole);
        })



   it("Verify inviting new User as Admin and Notary",()=>{

        var email=faker.internet.email();
        var firstName=faker.name.firstName();
        var middleName=faker.name.middleName();
        var lastName=faker.name.lastName();
        var userRole="Admin";
        var notaryStatus=true;
    
        //1.Inviting user (POST)
        users.inviteUser(email,firstName,middleName,lastName,userRole,notaryStatus);
    
        //Verify created user
        users.verifyCreatedUser(email);
    
        //2.Get users  (GET)
        users.getUsers()
    
        //Verify created user in the list
        users.verifyUserInTheList(email,notaryStatus,userRole);
        })

})