import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';

export const SubmitSignUp = {
    using: (firstName: string, lastName: string, email: string, password: string) =>
        Task.where(`#actor signs up ${email}`,
            Enter.theValue(firstName).into(SignInForm.firstNameField()),
            Enter.theValue(lastName).into(SignInForm.lastNameField()),
            Enter.theValue(email).into(SignInForm.emailField()),
            Enter.theValue(password).into(SignInForm.passwordField()),
            Click.on(SignInForm.submitButton()),
        ),
}

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 */

const SignInForm = {
    firstNameField: () =>
        PageElement.located(By.id('firstName')).describedAs('first name field'),

    lastNameField: () =>
        PageElement.located(By.id('lastName')).describedAs('last name field'),

    emailField: () =>
        PageElement.located(By.id('email')).describedAs('email field'),

    passwordField: () =>
        PageElement.located(By.id('password')).describedAs('password field'),

    submitButton: () =>
        PageElement.located(By.id('submit')).describedAs('submit button'),
}

export const clickOnSignUpButton = {
    signUpButton: () =>
        PageElement.located(By.id('signup')).describedAs('signup button'),

}

export const clickOnCancelButton = {
    cancelButton: () =>
        PageElement.located(By.id('cancel')).describedAs('cancel button'),

}

