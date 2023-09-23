Feature: add contact using the api

    As a tester I would like to explore this functionality where
    Sam can create a contact using the api

    Background:
        Given Sam creates a contact
    @my
    Scenario: Sam can create a contact using the api endpoint
        And Sam starts with the "Contact List App" application
        When he logs in using a "gorgeous65@msn.com" and "Test1234"
        Then he should see the current page title "Contact List App"