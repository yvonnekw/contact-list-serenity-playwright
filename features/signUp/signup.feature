Feature: contact list signup

    As a tester I would like to if Sam could signup in this application

    Background:
        Given Sam starts with the "Contact List App" application
    @my
    Scenario: Sam can signup
        When he signs up using "TestfnA1" "TestlnA1" "mytest@email.com" and "password"
        Then should see the page url includes