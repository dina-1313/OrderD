import homePage from "../support/pages/HomePage";
import search from '../fixtures/search.json';

describe('Search products', () => {

    it('Search', () => {
        cy.visit('/');

        homePage.fillSearchField(search);


    }
    )})