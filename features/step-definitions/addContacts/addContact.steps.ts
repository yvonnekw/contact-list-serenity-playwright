import { Given, Then, When } from '@cucumber/cucumber';
import { LastResponse, PostRequest, Send } from '@serenity-js/rest'
import { Ensure, equals } from '@serenity-js/assertions'




const bodyParameters = {
    'firstName': 'John5',
    'lastName': 'Doe5',
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
    timeout: 30000, // Set the timeout to 20 seconds
    proxy: 'https://localhost:8080'
};

Given('{pronoun} creates a contact', async (pronoun) => {
    try {
        const response = await pronoun.attemptsTo((Send.a(PostRequest.to('/contacts').with({
            "firstName": "John5",
            "lastName": "Doe5",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555777",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA"

        }).using({
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY3MGU5N2NjNjVhOTAwMTM5YzhjYzEiLCJpYXQiOjE2OTU0OTQxNzZ9.OLEG436b8EXmQJIHXkNiN9jMB9NWgP5sFGZJUgaHovo`,
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Content-Length': ''
            },
        })
        )
        ));
        Ensure.that(LastResponse.status(), equals(201));
        let results =
            Ensure.that(LastResponse.body.name, equals('John4'))
        //let results = JSON.stringify(response)
        console.log('response ' + results)
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

);

When('{pronoun} logs in using a', function (pronoun) {
    console.log('the when')
});

Then('{pronoun} should see the current page', function (pronoun) {
    console.log('the then')
});


