
import { Ensure, equals } from '@serenity-js/assertions';
import { Task, Actor } from '@serenity-js/core';
import { Send, PostRequest, LastResponse } from '@serenity-js/rest';





/*
const bodyParameters = {
    'firstName': 'John4',
    'lastName': 'Doe4',
    'birthdate': '1970-01-01',
    'email': 'gorgeous4@msn.com',
    'phone': '8005555555',
    'street1': '1 Main St.',
    'street2': 'Apartment A',
    'city': 'Anytown',
    'stateProvince': 'KS',
    'postalCode': '12345',
    'country': 'USA'
};
*/
/*

const bodyParameters = {
    'firstName': 'John4',
    'lastName': 'Doe4',
    'birthdate': '1970-01-01',
    'email': 'gorgeous4@msn.com',
    'phone': '8005555555',
    'street1': '1 Main St.',
    'street2': 'Apartment A',
    'city': 'Anytown',
    'stateProvince': 'KS',
    'postalCode': '12345',
    'country': 'USA',
};
*/
/*
export const AddContactRequest = {
    addContact: () =>
        Task.where(`#actor create a contact using the api`, async (actor): Promise<void> => { // Specify the return type as Promise<void>
            try {
                await Send.a(PostRequest.to(`/contacts`).with({
                    ...bodyParameters,
                    config, // Include the config object in the request
                }));

                Ensure.that(LastResponse.status(), equals(201));
            } catch (error) {
                console.error('Error:', error.message);
                throw error; // Rethrow the error to fail the test if the request fails
            }
        }) as Activity, // Specify the return type as Activity
};
*/

/*
export const AddContactRequest = {
    addContact: () =>
        Task.where(`#actor create a contact using the api`, async (actor) => {
            try {
                await Send.a(PostRequest.to(`/contacts`).with({
                    ...bodyParameters,
                    config, // Include the config object in the request
                }));

                Ensure.that(LastResponse.status(), equals(201));
            } catch (error) {
                console.error('Error:', error.message);
                throw error; // Rethrow the error to fail the test if the request fails
            }
        }),
};
*/







/*
export const AddContactRequest = {
    addContact: () =>
        Task.where(`#actor create a contact using the api`,
            Send.a(PostRequest.to(`/contacts`).with(
                {
                    'firstName': 'John4',
                    'lastName': 'Doe4',
                    'birthdate': '1970-01-01',
                    'email': 'gorgeous4@msn.com',
                    'phone': '8005555555',
                    'street1': '1 Main St.',
                    'street2': 'Apartment A',
                    'city': 'Anytown',
                    'stateProvince': 'KS',
                    'postalCode': '12345',
                    'country': 'USA'
                    ,
                    config
                }


            )),

            Ensure.that(LastResponse.status(), equals(201))
        )
};

*/



/*

export class CreateContact implements Interaction {
    constructor() {}

    async performAs(actor: Actor): Promise<void> {
        try {
            await Send.a(PostRequest.to(`/contacts`).with({
                body: bodyParameters,
                headers: config.headers,
            }));

            Ensure.that(LastResponse.status(), equals(201));
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
    }
}*/
/*
// Usage in your test
actor.attemptsTo(
    CreateContact.create(),
);*/



const bodyParameters = {
    'firstName': 'John4',
    'lastName': 'Doe4',
    'birthdate': '1970-01-01',
    'email': 'gorgeous4@msn.com',
    'phone': '8005555555',
    'street1': '1 Main St.',
    'street2': 'Apartment A',
    'city': 'Anytown',
    'stateProvince': 'KS',
    'postalCode': '12345',
    'country': 'USA',
};

const config = {
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY3MGU5N2NjNjVhOTAwMTM5YzhjYzEiLCJpYXQiOjE2OTU0MDA0NTF9.pnWl61JOQRzy4-fhwFvqa0PHCAbsYuo7A7lj91wlUtE`,
        'Content-Type': `application/json`,
        'Accept': `*/*`
    },
    timeout: 100000, // Set the timeout to 10 seconds (adjust as needed)
    proxy: 'https://localhost:8080'
};

export const CreateContact = () =>
    Task.where(`#actor create a contact using the API`,
        Send.a(PostRequest.to(`/contacts`).with({
            body: bodyParameters,
            headers: config.headers,
        })),
        Ensure.that(LastResponse.status(), equals(201)),
    );

// Usage in your test
//actor.attemptsTo(
    ////CreateContact(),
//);
