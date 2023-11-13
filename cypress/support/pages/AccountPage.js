import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
        this.elements.firstNameText = '.heading1';
        this.elements.logoutButton = '[data-original-title="Logoff"]';

    }

    getFirstNameText(){
        return cy.get(this.elements.firstNameText, {timeout: 2000})
    }

    getLogoutButton(){
        return cy.get(this.elements.logoutButton)
    }

    logout(){
        this.getLogoutButton().click();
    }
    
}
export default new AccountPage();