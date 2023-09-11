Feature: add contact using the api

    As a tester I would like to explore this functionality where
    Sam can create a contact using the api

    Background:
        Given Sam creates a contact
    @my
    Scenario: Sam can create a contact using the api endpoint
        When he logs in using a
        Then he should see the current page 