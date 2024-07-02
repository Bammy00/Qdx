///<reference types="cypress"/>

export const elements = {
    visitApp: () => cy.visit('/'),
    firstInput: () => cy.get('#value1'),
    secondInput: () => cy.get('#value2'),
    calculateButton: () => cy.get('#gettotal > .btn'),
    resultDisplay: () => cy.get('#displayvalue')
};


///<reference types="cypress"/>

export const elementsb = {
    visitApp: () => cy.visit('/'),
    alertPageLink: () => cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle'),
    bootstrapAlertLink: () => cy.get('.open > .dropdown-menu > :nth-child(1) > a'),
    autoCloseableAlert: (type) => cy.get('.alert-autocloseable-' + type),
    normalAlert: (type) => cy.get('.alert-normal-' + type),
    autoCloseableButton: (type) => cy.get('#autoclosable-btn-' + type),
    normalButton: (type) => cy.get('#normal-btn-' + type),
    normalCloseButton: (type) => cy.get('.alert-normal-' + type + ' > .close')
};
