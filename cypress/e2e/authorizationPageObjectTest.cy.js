import user from '../fixtures/user.json'
import homePage from '../support/pages/HomePage';
import accountPage from '../support/pages/AccountPage';
import loginPage from '../support/pages/LoginPage';

it('Authorization', () => {

    homePage.visit();
        
    cy.log('Opening login page...');
    homePage.getHeaderAccountButton().click(); 

    cy.log('Filling login fields...');
    loginPage.fillLoginFields(user);

    cy.log('Log in a user...');
    loginPage.getReturningCustomerLoginButton().click();

    cy.log('Verify first name displayed on account page...');
    accountPage.getFirstNameText().should('contain', user.firstName);
    
})