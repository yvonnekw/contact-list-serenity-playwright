Feature: contact list login

    As a tester I would like to explore this feature to make
    Sam can safely login

    Background:
        Given Sam starts with the "Contact List App" application
        @my
        Scenario: Sam can login successfully
        When he logs in using a "gorgeous65@msn.com" and "Test1234"
        Then he should see the current page title "Contact List App"