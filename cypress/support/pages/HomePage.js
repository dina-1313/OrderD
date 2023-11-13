import BasePage from "./BasePage";

class HomePage extends BasePage{
    
    constructor(){
        super();
        this.elements.productCartButton = '[data-id="68"]';
        this.elements.cart = '.nav.navbar-nav.main_menu [data-id="menu_cart"]'; 
        this.elements.searchField = '.navbar-right.headerstrip_blocks #filter_keyword';
        this.elements.searchButton = '.fa.fa-search'; 
        this.elements.product = '[title="Beauty Eau de Parfum"]';               
    }

    visit(){
        cy.log('Opening home page...');
        cy.visit('/');
    }
    
    getProductCartButton(){
        return cy.get(this.elements.productCartButton)
    }

    getCart(){
        return cy.get(this.elements.cart)
    }

    addProductAndOpenCart(){
        this.getProductCartButton().click();
        this.getCart().click();
    }

    getSearchField(){
        return cy.get(this.elements.searchField)
    }

    getSearchButton(){
        return cy.get(this.elements.searchButton)
    }

    /**
     *  Fill in search field
     *  @param {Object} search - search object
     *  Search object example can be found in ./cypress/fixtures/search.json
     */

    fillSearchField(search){
        cy.log('Fill in search field...');
        this.getSearchField().type(search.letter);        
        this.getSearchButton().click();
    }


}
export default new HomePage();