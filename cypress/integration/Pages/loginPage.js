import selectors from "../Selectors/login"
export class Login {

    navigateToUrl(){
        cy.visit(selectors.url);
    }

    loginToApplication()
    {
        this.enterUserName();
        this.enterPassword();
        this.clickOnLogin();
    }

    enterUserName()
    {
        cy.get(selectors.usernameTxtbx).type("manasa.lingala@qualitlabs.com");
    }

    enterPassword()
    {
        cy.get(selectors.passwordTxtbx).type("16c31a0_486");
    }

    clickOnLogin()
    {
        cy.get(selectors.loginBttn).click();
    }
}