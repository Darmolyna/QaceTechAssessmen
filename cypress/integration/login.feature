Feature: Saucedemo login validation

    Application regression

    @login
    Scenario: login with valid credentials
    Given I navigate to saucedemo login page
    When I enter valid username
    Then I enter valid password
    When I click the login button
    Then I validate successfull login

    Scenario: login with locked out user credentials
    Given I navigate to saucedemo login page
    When I enter locked out username
    Then I enter locked out password
    When I click the login button
    Then I validate unsuccessfull login