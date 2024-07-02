import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DualInputPage } from "../page_objects/dualInputPage";

const dualInputForm = new DualInputPage();

Given('the users open the demo application', () => {
    dualInputForm.visitApp();
});

When('the users access the simple form section and locate the input fields for two values', () => {
    dualInputForm.goToSimpleForm();
});

When('the users input {string} and {string}', (num1, num2) => {
    dualInputForm.enterValues(num1, num2);
});

When('the users click the calculate button', () => {
    dualInputForm.pressCalculateButton();
});

Then('the result should display the sum of {string} and {string}', (num1, num2) => {
    dualInputForm.checkSum(num1, num2);
});
