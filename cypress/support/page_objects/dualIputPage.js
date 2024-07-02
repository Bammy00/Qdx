///<reference types="cypress"/>
import { elements } from '../utils/elements';

export class DualInputPage {
    visitApp() {
        elements.visitApp();
    }

    goToSimpleForm() {
        cy.get('.dropdown-toggle').contains('Input Forms').click();
        cy.get('.dropdown-menu').contains('Simple Form Demo').click();
        cy.contains('Two Input Fields').should('be.visible');
    }

    enterValues(value1, value2) {
        elements.firstInput().type(value1);
        elements.secondInput().type(value2);
    }

    pressCalculateButton() {
        elements.calculateButton().click();
    }

    checkSum(value1, value2) {
        const expectedSum = (parseFloat(value1) + parseFloat(value2)).toFixed(2);
        elements.resultDisplay().should('contain.text', expectedSum);
    }
}
