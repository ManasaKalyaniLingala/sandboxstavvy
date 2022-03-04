import selectors from "../Selectors/login"

const sandboxData = require("../../fixtures/sandbox_data.json")
const devData=require("../../fixtures/dev_data.json")

var testdata=sandboxData

export class Login {

    navigateToUrl(){
        cy.visit("/");
    }

    loginToApplication(username=testdata.username,password=testdata.password)
    {
        this.enterUserName(username);
        this.enterPassword(password);
        this.clickOnLogin();
    }

    enterUserName(username)
    {
        cy.get(selectors.usernameTxtbx).type(username);
    }

    enterPassword(password)
    {
        cy.get(selectors.passwordTxtbx).type(password);
    }

    clickOnLogin()
    {
        cy.get(selectors.loginBttn).click();
    }

    verifyLoginPageView()
    {
        cy.url().should('include', 'https://login.sandbox.stavvy.com/login?state');
        cy.get(selectors.usernameTxtbx).should('exist');
        cy.get(selectors.passwordTxtbx).should('exist');
        cy.get(selectors.loginBttn).should('exist');
        cy.get(selectors.dontRememberPasswordLink).should('exist');
    }

    clickOnProfile()
    {
        cy.get(selectors.profileIcon).click();
    }
}