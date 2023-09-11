import { Given } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';

import { AddContactRequest } from '../../../test/apiEndpoints/addContacts';


Given('{actor} creates a contact', function (actor: Actor) {
    actor.attemptsTo(
        AddContactRequest.addContact()
    )
});