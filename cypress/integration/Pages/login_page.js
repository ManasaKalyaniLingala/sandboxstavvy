
import selectors from "../Selectors/login"

export class Login {

    
    navigateToUrl(){
        cy.visit(Cypress.env("baseUrl"));
    }

    loginToApplication(username=Cypress.env("username"),password=Cypress.env("password"))
    {
        this.enterUserName(username);
        this.enterPassword(password);
        this.clickOnLogin();
        cy.wait(4000);
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