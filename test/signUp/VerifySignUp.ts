
import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Page } from '@serenity-js/web';

export class VerifySignUp {
    static pageHeaderText = async () => {
        return Task.where(`#actor verifies the successful contact list page`,
            Ensure.that(
                Page.current().url().href,
                includes('/addUser')
            )
        )
    }

    static pageUrl = async () => {
        return Task.where(`#actor verifies the successful contact list page url`,
            Ensure.that(
                Page.current().url().href,
                includes('/addUser')
            )
        )
    }

}

