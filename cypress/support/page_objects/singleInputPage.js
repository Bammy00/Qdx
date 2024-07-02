///<reference types="cypress"/>

export class SingleInputPage {
    elements = {
        navigateToApp: () => cy.visit('/'),
        messageInput: () => cy.get("#user-message"),
        showMessageButton: () => cy.get('#get-input > .btn'),
        result: () => cy.get('#display')
    };

    navigateToApp() {
        this.elements.navigateToApp();
    }

    openSimpleFormPage() {
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click();
        cy.contains('Single Input Field').should('exist');
    }

    enterMessage(message) {
        this.elements.messageInput().type(message);
    }

    verifyInputFieldIsEnabled() {
        this.elements.messageInput().should('be.enabled');
    }

    verifyInputFieldAccepts(message) {
        this.elements.messageInput().should('have.value', message);
    }

    clickShowMessageButton() {
        this.elements.showMessageButton().click();
    }

    verifyDisplayedMessage(message) {
        this.elements.result().should('have.text', message);
    }
}
