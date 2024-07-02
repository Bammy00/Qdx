const states = ['California', 'Florida', 'New Jersey', 'New York', 'Ohio', 'Texas', 'Pennsylvania', 'Washington'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class SelectListPage {

  elements = {
    navigateToApp: () => cy.visit('/'),
    multiSelectList: () => cy.get('#multi-select'),
    singleSelectDropdown: () => cy.get('#select-demo'),
    result: () => cy.get('.selected-value'),
    firstSelectedBtn: () => cy.get('#printMe'),
    allSelectedBtn: () => cy.get('#printAll'),
    getAllSelectedMessage: () => cy.get('.getall-selected')
  };

  navigateToApp() {
    this.elements.navigateToApp();
  }

  openMultiSelectListPage() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List').click();
    cy.contains('Multi Select List Demo');
  }

  openSingleSelectListPage() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List').click();
    cy.contains('Select List Demo');
  }

  selectOneOption(option) {
    const index = states.indexOf(option);
    cy.get('#multi-select').select(index, { force: true });
  }

  selectMultipleOptions(options) {
    options.forEach(option => {
      cy.get('#multi-select').contains(option).then($option => {
        cy.wrap($option).invoke('prop', 'selected', true).click({ force: true });
      });
    });
    this.elements.multiSelectList().trigger('change');
  }

  deselectMultipleOptions(options) {
    options.forEach(option => {
      cy.get('#multi-select').contains(option).then($option => {
        cy.wrap($option).invoke('prop', 'selected', false).click({ force: true });
      });
    });
    this.elements.multiSelectList().trigger('change');
  }

  clickButton(button) {
    if (button === 'Get All Selected') {
      this.elements.allSelectedBtn().click();
    } else if (button === 'First Selected') {
      this.elements.firstSelectedBtn().click();
    }
  }

  selectAllOptions() {
    states.forEach(option => {
      cy.get('#multi-select').contains(option).then($option => {
        cy.wrap($option).invoke('prop', 'selected', true).click({ force: true });
      });
    });
    this.elements.multiSelectList().trigger('change');
  }

  verifyItemsSelected(options) {
    options.forEach(option => {
      cy.get('#multi-select').contains(option).should('be.selected');
    });
  }

  verifyItemsNotSelected(options) {
    options.forEach(option => {
      cy.get('#multi-select').contains(option).should('not.be.selected');
    });
  }

  verifyAllSelectedOptions(options) {
    const message = "Options selected are : " + options.join(', ');
    this.elements.getAllSelectedMessage().should('have.text', message);
  }

  verifyFirstSelectedOption(option) {
    const message = "First selected option is : " + option;
    this.elements.getAllSelectedMessage().should('have.text', message);
  }

  selectDropdownItem(day) {
    const index = days.indexOf(day);
    cy.get('#select-demo').select(index);
  }

  verifyDropdownSelection(day) {
    this.elements.result().should('have.text', day);
  }
}

export default SelectListPage;
