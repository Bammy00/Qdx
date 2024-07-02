import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BootStrapAlertPage } from "../../page_objects/bootStrapAlertPage";

const alerts = new BootStrapAlertPage();

Given('users open the application to test bootstrap alerts', () => {
    alerts.visitApp();
});

When('users navigate to the bootstrap alert section', () => {
    alerts.navigateToAlertSection();
});

When('users trigger the autoclosable {string} alert', (type) => {
    alerts.triggerAutoCloseableAlert(type);
});

When('users wait for {int} seconds', (seconds) => {
    alerts.waitForSeconds(seconds);
});

When('users trigger the normal {string} alert', (type) => {
    alerts.triggerNormalAlert(type);
});

When('users close the normal {string} alert', (type) => {
    alerts.closeNormalAlert(type);
});

Then('an autoclosable {string} alert is shown', (type) => {
    alerts.verifyAutoAlertVisible(type);
});

Then('the autoclosable {string} alert should no longer be visible', (type) => {
    alerts.verifyAutoAlertHidden(type);
});

Then('a normal {string} alert is shown', (type) => {
    alerts.verifyNormalAlertVisible(type);
});

Then('the normal {string} alert should no longer be visible', (type) => {
    alerts.verifyNormalAlertHidden(type);
});
