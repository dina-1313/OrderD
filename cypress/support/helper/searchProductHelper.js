//  export function login(user){
//      cy.log('Open website login page');
//      cy.visit('/index.php?rt=account/login');

//      cy.log('Authorize user');
//      cy.get('#loginFrm_loginname').type(user.loginName);
//      cy.get('#loginFrm_password').type(user.password);
//      cy.get('button[type="submit"]').contains('Login').click();

//      cy.get('.heading1', {timeout: 2000}).should('contain', user.firstName);
//  }


     


 


//  export function searchProduct(product) {
//     if (price < 1000 || price > 1900) { 
//         console.log('Price is OK');
//     } else {
//         cy.get('...').click(); 
//     }
// }
// checkPrice(1000)


// {
//     function checkPrice(price){
//         if (price < 1000 || price > 1900) { // перевірки: 999, 1901
//             console.log('Price is OK');
//         } else {
//             console.log('Price is not OK'); // перевірки: 1000, 1001, 1899, 1900
//         }
//     }
//     checkPrice(1000)
// }


