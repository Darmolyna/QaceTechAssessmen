/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})

Given('I navigate to saucedemo login page', function () {
    //cy.viewport(1800,1000)
    cy.visit(Cypress.env("baseUrl"))
});

When ('I enter valid username', function(){
    cy.get('input[placeholder="Username"]').type(this.data.standardUserName)
})
    
Then ('I enter valid password', function(){
    cy.get('input[placeholder="Password"]').type(this.data.password)
})

When ('I click the login button', function(){
    cy.get('input[value="Login"]').click()
})

Then ('I add Sauce Labs Backpack to cart', function(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible')
      .and('contain', 'Remove');

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1');
})

When ('I click remove button', function(){
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
})

Then ('I validate item has been removed', function(){
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
    cy.get('[data-test="shopping-cart-link"]')
    .should('be.visible')
    .and('have.text', '');
})

Then ('I click the cart button', function(){
    cy.scrollTo('top');
    cy.get('.shopping_cart_badge').click()
})

Then ('I remove item from cart', function(){
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
})
Then ('i validate item has been removed from cart', function(){
    cy.get('.cart_item').should('not.exist')
    cy.get('[data-test="shopping-cart-link"]')
    .should('be.visible')
    .and('have.text', '');
})

When ('I validate Sauce Labs Backpack is in the cart', function(){
    cy.get('[data-test="inventory-item-name"]')
      .should('contain.text', 'Sauce Labs Backpack');

    cy.get('[data-test="inventory-item-price"]')
      .should('contain.text', '$29.99');

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible')
      .and('contain', 'Remove');
})
When ('I click the checkout button', function(){
    cy.get('button').contains('Checkout').click()
})

Then ('I fill checkout info', function(){
    cy.get('[data-test="firstName"]').type('Blessing');
    cy.get('[data-test="lastName"]').type('QA');
    cy.get('[data-test="postalCode"]').type('100001');
})

When ('I click continue button', function(){
    cy.get('input[value="Continue"]').click()
})

Then ('I validate Checkout Summary', function(){
    cy.get('[data-test="checkout-summary-container"]').should('be.visible');
    cy.get('[data-test="cart-quantity-label"]').should('contain.text', 'QTY');
    cy.get('[data-test="cart-desc-label"]').should('contain.text', 'Description');
    cy.get('[data-test="item-quantity"]').should('not.be.empty');
    cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack');
    cy.get('[data-test="inventory-item-desc"]').should('contain.text', 'carry.allTheThings()');
    cy.get('[data-test="inventory-item-price"]').should('contain.text', '$29.99');
    cy.get('[data-test="payment-info-label"]').should('contain.text', 'Payment Information:');
    cy.get('[data-test="payment-info-value"]').should('not.be.empty');
    cy.get('[data-test="shipping-info-label"]').should('contain.text', 'Shipping Information:');
    cy.get('[data-test="shipping-info-value"]').should('contain.text', 'Free Pony Express Delivery!');
    cy.get('[data-test="subtotal-label"]').should('contain.text', 'Item total: $29.99');
    cy.get('[data-test="tax-label"]').should('not.be.empty');
    cy.get('[data-test="total-label"]').should('not.be.empty');
    cy.get('[data-test="cancel"]').should('be.visible').and('contain.text', 'Cancel');
    cy.get('[data-test="finish"]').should('be.visible').and('contain.text', 'Finish');
})

When ('I click the finish button', function(){
    cy.get('button').contains('Finish').click()
})

Then ('I validate Checkout Complete Page', function(){
    cy.get('h2').contains('Thank you for your order').should('be.visible');
    cy.get('div').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
    cy.get('button').contains('Back Home').should('be.visible');
})

When ('I click back home button', function(){
    cy.get('button').contains('Back Home').click()
})
    
Then ('I validate that the application takes me to hopmepage', function(){
    cy.get('span').contains('Products').should('exist')
})