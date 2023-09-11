import { Ensure, equals } from '@serenity-js/assertions';
//import { actorCalled } from '@serenity-js/core'
import { Actor, Interaction, Task } from '@serenity-js/core';
import { LastResponse, PostRequest, Send } from '@serenity-js/rest'

//const actor = actorCalled('Apisit').whoCan(CallAnApi.at('https://myapp.com/api'));
let response: Interaction;
let id: string;

export const AddContactRequest = {
    //await actor.attemptsTo(
    addContact: () =>
        Task.where(`#actor create a contact using the api`,
            response = Send.a(PostRequest.to('https://thinking-tester-contact-list.herokuapp.com/contacts').with({
                'firstName': 'John',
                'lastName': 'Doe',
                'birthdate': '1970-01-01',
                'email': 'gorgeous65@msn.com',
                'phone': '8005555555',
                'street1': '1 Main St.',
                'street2': 'Apartment A',
                'city': 'Anytown',
                'stateProvince': 'KS',
                'postalCode': '12345',
                'country': 'USA'
            })
            ),
            Ensure.that(LastResponse.status(), equals(201))
            //Ensure.that(LastResponse.header('Location'), startsWith('/users')),
            //console.log(response)
            // actor.whoCan(CallAnApi.at("api"),
            //actor.attemptsTo(PostRequest.to('/user').with({
            // login: 'tester',
            // password: 'P@ssword1',
            // });
            //actorCalled.should(response)

            //  )
            //response = Send.a(PostRequest.to('/users').with({

            //}),
            //Ensure.that(LastResponse.status(), equals(201))
            //Ensure.that(LastResponse.header('Location'), startsWith('/users')),

            //)
            // const responseBody = JSON.parse(await response.text())
            // id = (reseBody)

        )


}