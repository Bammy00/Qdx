import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BootstrapModalPage } from "../../page_objects/BootstrapModalPage";

const modalPage = new BootstrapModalPage();

Given('users access the application to test bootstrap modals', () => {
    modalPage.openApplication();
});

When('users navigate to the bootstrap modal page', () => {
    modalPage.goToModalPage();
});

When('users click to open the single modal', () => {
    modalPage.openSingleModal();
});

When('users click the modal\'s close button', () => {
    modalPage.clickCloseButton();
});

When('users click the modal\'s cancel icon', () => {
    modalPage.clickCancelIcon();
});

When('users click the modal\'s save button', () => {
    modalPage.clickSaveButton();
});

When('users click to open the first modal', () => {
    modalPage.openFirstModal();
});

When('users click the first modal\'s close button', () => {
    modalPage.clickFirstModalCloseButton();
});

When('users click the first modal\'s cancel icon', () => {
    modalPage.clickFirstModalCancelIcon();
});

When('users click the first modal\'s save button', () => {
    modalPage.clickFirstModalSaveButton();
});

When('users click to open the second modal', () => {
    modalPage.openSecondModal();
});

When('users click the second modal\'s close button', () => {
    modalPage.clickSecondModalCloseButton();
});

When('users click the second modal\'s cancel icon', () => {
    modalPage.clickSecondModalCancelIcon();
});

When('users click the second modal\'s save button', () => {
    modalPage.clickSecondModalSaveButton();
});

Then('the single modal should be visible', () => {
    modalPage.verifySingleModalVisible();
});

Then('the modal should contain a header', () => {
    modalPage.verifyModalHasHeader();
});

Then('the modal should display body content', () => {
    modalPage.verifyModalHasBody();
});

Then('the modal should include a close button', () => {
    modalPage.verifyCloseButtonExists();
});

Then('the modal should no longer be visible', () => {
    modalPage.verifyModalNotVisible();
});

Then('the first modal should be visible', () => {
    modalPage.verifyFirstModalVisible();
});

Then('the second modal should be visible', () => {
    modalPage.verifySecondModalVisible();
});

Then('the second modal should no longer be visible', () => {
    modalPage.verifySecondModalNotVisible();
});

Then('the first modal should no longer be visible', () => {
    modalPage.verifyFirstModalNotVisible();
});
