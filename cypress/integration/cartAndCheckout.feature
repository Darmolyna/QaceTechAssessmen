Feature: Saucedemo cart and checkout validation

    Application regression

    @addingToCart
    Scenario: Adding product to cart
    Given I navigate to saucedemo login page
    When I enter valid username
    Then I enter valid password
    When I click the login button
    Then I add Sauce Labs Backpack to cart
    Then I click the cart button
    When I validate Sauce Labs Backpack is in the cart

    @removeFromCart
    Scenario: Removing product from cart
    Given I navigate to saucedemo login page
    When I enter valid username
    Then I enter valid password
    When I click the login button
    Then I add Sauce Labs Backpack to cart
    When I click remove button
    Then I validate item has been removed
    Then I add Sauce Labs Backpack to cart
    Then I click the cart button
    Then I remove item from cart
    Then i validate item has been removed from cart

    @checkout
    Scenario: Checkout Process validation
    Given I navigate to saucedemo login page
    When I enter valid username
    Then I enter valid password
    When I click the login button
    Then I add Sauce Labs Backpack to cart
    Then I click the cart button
    When I click the checkout button
    Then I fill checkout info
    When I click continue button
    Then I validate Checkout Summary
    When I click the finish button
    Then I validate Checkout Complete Page
    When I click back home button
    Then I validate that the application takes me to hopmepage