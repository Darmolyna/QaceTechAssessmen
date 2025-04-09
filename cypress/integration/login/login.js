/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})

Given('I navigate to saucedemo login page', function () {
    cy.viewport(1800,1000)
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
    
Then ('I validate successfull login', function(){
    cy.get('span').contains('Products').should('exist')
})

When ('I enter locked out username', function(){
    cy.get('input[placeholder="Username"]').type(this.data.lockedUserName)
})

Then ('I enter locked out password', function(){
    cy.get('input[placeholder="Password"]').type(this.data.password)
})

Then ('I validate unsuccessfull login', function(){
    cy.get('h3').contains('Epic sadface: Sorry, this user has been locked out.').should('exist')
})
