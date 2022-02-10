import selectors from "../Selectors/login"
export class Login {

    navigateToUrl(){
        cy.visit(selectors.url);
    }

    loginToApplication(username="manasa.lingala@qualitlabs.com",password="16c31a0_486")
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