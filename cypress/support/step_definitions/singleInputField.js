import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SingleInputPage } from "../page_objects/singleInputPage";

const singleInputForm = new SingleInputPage();

Given('users access the Selenium demo application', () => {
    singleInputForm.navigateToApp();
});

When('users navigate to the simple form page', () => {
    singleInputForm.openSimpleFormPage();
});

When('users type {string} in the input field', (inputText) => {
    singleInputForm.enterMessage(inputText);
});

When('users click the show message button', () => {
    singleInputForm.clickShowMessageButton();
});

Then('the input field should be enabled', () => {
    singleInputForm.verifyInputFieldIsEnabled();
});

Then('the input field should accept {string}', (inputText) => {
    singleInputForm.verifyInputFieldAccepts(inputText);
});

Then('the displayed message should be {string}', (inputText) => {
    singleInputForm.verifyDisplayedMessage(inputText);
});
