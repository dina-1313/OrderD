import BasePage from "./BasePage";
import accountPage from "./AccountPage";
import homePage from "./HomePage";

class LoginPage extends BasePage {
    constructor() {
        super();
        this.elements.returningCustomerLoginNameField = '#loginFrm_loginname';
        this.elements.returningCustomerPasswordField = '#loginFrm_password';
        this.elements.returningCustomerLoginButton = 'button[title="Login"]';
        this.elements.accountPageFirstName = '.heading1';
        this.elements.registerAccountButton = '#accountFrm button';
        
    }

    getReturningCustomerLoginNameField() {
        return cy.get(this.elements.returningCustomerLoginNameField)
    }

    getReturningCustomerPasswordField() {
        return cy.get(this.elements.returningCustomerPasswordField)
    }

    getReturningCustomerLoginButton() {
        return cy.get(this.elements.returningCustomerLoginButton)
    }

    fillLoginFields(user) {
        cy.log('Fill in login fields...');
        this.getReturningCustomerLoginNameField().type(user.loginName);
        this.getReturningCustomerPasswordField().type(user.password);
    }

    getRegisterAccountButton(){
        return cy.get(this.elements.registerAccountButton)
    }

    login(user) {       
        homePage.visit();
        homePage.getHeaderAccountButton().click();
        this.getReturningCustomerLoginNameField().type(user.loginName);
        this.getReturningCustomerPasswordField().type(user.password);
        this.getReturningCustomerLoginButton().click();
        accountPage.getFirstNameText().should('contain', user.firstName);
    }

}
export default new LoginPage();


