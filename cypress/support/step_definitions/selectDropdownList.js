import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SelectListPage from '../page_objects/selectDropdownListPage';

const selectListPage = new SelectListPage();

Given('users navigate to the app', () => {
  selectListPage.navigateToApp();
});

When('user opens the multi-select list page', () => {
  selectListPage.openMultiSelectListPage();
});

When('user opens the single-select list page', () => {
  selectListPage.openSingleSelectListPage();
});

When('user selects the following options:', (dataTable) => {
  const options = dataTable.rawTable.map(row => row[0]);
  selectListPage.selectMultipleOptions(options);
});

When('user selects the following option:', (dataTable) => {
  const option = dataTable.rawTable[0][0];
  selectListPage.selectOneOption(option);
});

When('user deselects the following items:', (dataTable) => {
  const options = dataTable.rawTable.map(row => row[0]);
  selectListPage.deselectMultipleOptions(options);
});

When('user clicks on {string} button', (button) => {
  selectListPage.clickButton(button);
});

When('user presses ctrl+A', () => {
  selectListPage.selectAllOptions();
});

Then('the following items should be selected:', (dataTable) => {
  const options = dataTable.rawTable.map(row => row[0]);
  selectListPage.verifyItemsSelected(options);
});

Then('the following items should not be selected:', (dataTable) => {
  const options = dataTable.rawTable.map(row => row[0]);
  selectListPage.verifyItemsNotSelected(options);
});

Then('all selected options should be:', (dataTable) => {
  const options = dataTable.rawTable.map(row => row[0]);
  selectListPage.verifyAllSelectedOptions(options);
});

Then('the first selected option should be:', (dataTable) => {
  const option = dataTable.rawTable[0][0];
  selectListPage.verifyFirstSelectedOption(option);
});

Then('the selected {string} should be displayed successfully', (day) => {
  selectListPage.verifyDropdownSelection(day);
});
