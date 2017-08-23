const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
    Given(/^I open home page$/, () => {
        return client
            .url('http://localhost:3000')
            .waitForElementVisible('body', 1000);
    });


    Then(/^the title is "([^"]*)"$/, (title) => {
        return client
            .assert.visible('h1')
            .assert.containsText('h1', 'Welcome, arnaud').end();
    });
});