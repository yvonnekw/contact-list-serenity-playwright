import { Then, When } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { clickOnSignUpButton, SubmitSignUp, VerifySignUp } from '../../../test/signUp'

When('{pronoun} signs up using {string} {string} {string} and {string}', async (pronoun, firstName: string, lastName: string, email: string, password: string) =>
    pronoun.attemptsTo(
        Click.on(clickOnSignUpButton.signUpButton()),
        SubmitSignUp.using(firstName, lastName, email, password)
    )
);

Then('should see the page url includes', async () =>
    actorInTheSpotlight().attemptsTo(
        await VerifySignUp.pageUrl()
    )
);