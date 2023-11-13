import BasePage from "./BasePage";

class CartPage extends BasePage{

    constructor(){
        super();
        this.elements.deliveryIdCountry = '#estimate_country';
        this.elements.deliveryIdCity = '#estimate_country_zones';
        this.elements.deliveryPostcode = '#estimate_postcode';
        this.elements.checkoutButton = '#cart_checkout2';
        this.elements.confirmCheckoutButton = '#checkout_btn';
    }

    visit(){
        cy.log('Opening cart page...');
        cy.visit('/index.php?rt=checkout/cart');
    }
    
    getDeliveryCountry(){
        return cy.get(this.elements.deliveryIdCountry)
    }

    getDeliveryCity(){
        return cy.get(this.elements.deliveryIdCity)
    }

    getDeliveryPostcode(){
        return cy.get(this.elements.deliveryPostcode)
    }

    getCheckoutButton(){
        return cy.get(this.elements.checkoutButton)
    }

    getConfirmCheckoutButton(){
        return cy.get(this.elements.confirmCheckoutButton)
    }

    fillDeliveryForm(delivery){
        cy.log('Fill in delivery form...');

        this.getDeliveryCountry().select(delivery.deliveryCountryid);
        this.getDeliveryCity().select(delivery.deliveryCityid);
        this.getDeliveryPostcode().type(delivery.deliveryPostcode);
    }

    orderCheckout(delivery){
        cy.log('Checkout...');
        this.fillDeliveryForm(delivery);
        this.getCheckoutButton().click();
        this.getConfirmCheckoutButton().click();
    }

}
export default new CartPage();