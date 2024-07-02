///<reference types="cypress"/>

export const elements = {
    visitApp: () => cy.visit('/'),
    firstInput: () => cy.get('#value1'),
    secondInput: () => cy.get('#value2'),
    calculateButton: () => cy.get('#gettotal > .btn'),
    resultDisplay: () => cy.get('#displayvalue')
};
