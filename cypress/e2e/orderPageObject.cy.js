import user from '../fixtures/user.json'
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import cartPage from '../support/pages/CartPage';
import delivery from '../fixtures/delivery.json';

describe('Succesfull order', () => {

    it('Authorization', () => {
        loginPage.login(user);
    })

    it('Adding products to Cart', () => {
        homePage.visit();
        homePage.addProductAndOpenCart();
    })

    it('Checkout', () => {
        cartPage.orderCheckout(delivery);
    })
})