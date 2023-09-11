import { Given, Then, When } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { VerifyLogin } from '../../../test/login';
import { Login } from '../../../test/login';

Given('{actor} starts with the {string} application', async (actor, application: string) =>
    actor.attemptsTo(
        Navigate.to('/'))
);

When('{pronoun} logs in using a {string} and {string}', async (pronoun, username, password) =>
    pronoun.attemptsTo(
        Login.using(username, password)
    )
);

Then('{pronoun} should see the current page title {string}', async (pronoun, expectedPageTitle: string) =>
    actorInTheSpotlight().attemptsTo(
        await VerifyLogin.currentPageTitle(expectedPageTitle)
    )
);
