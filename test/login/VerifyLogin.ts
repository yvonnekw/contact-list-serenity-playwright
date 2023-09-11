
import { Ensure, equals } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Page } from '@serenity-js/web';

export class VerifyLogin {
    static currentPageTitle = async (expectedPageTitle: string) => {
        return Task.where(`#actor verifies the current page title`,
            Ensure.that(
                Page.current().title().describedAs('website title'),
                equals(expectedPageTitle),

            )
        )
    }

}

