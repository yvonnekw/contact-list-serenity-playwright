import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';

export const Login = {
    using: (email: string, password: string) =>
        Task.where(`#actor logs in as ${email}`,
            Enter.theValue(email).into(SignInForm.emailField()),
            Enter.theValue(password).into(SignInForm.passwordField()),
            Click.on(SignInForm.submitButton()),
        ),
}

const SignInForm = {
    emailField: () =>
        PageElement.located(By.id('email')).describedAs('email field'),

    passwordField: () =>
        PageElement.located(By.id('password')).describedAs('password field'),

    submitButton: () =>
        PageElement.located(By.id('submit')).describedAs('submit button'),
}