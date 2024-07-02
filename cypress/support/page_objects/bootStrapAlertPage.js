///<reference types="cypress"/>
import { elementsb } from '../utils/elements';

export class BootStrapAlertPage {
    visitApp() {
        elementsb.visitApp();
    }

    navigateToAlertSection() {
        elementsb.alertPageLink().contains('Alerts & Modals').click();
        elementsb.bootstrapAlertLink().contains('Bootstrap Alerts').click();
        cy.contains('Bootstrap Alert messages').should('be.visible');
    }

    triggerAutoCloseableAlert(type) {
        elementsb.autoCloseableButton(type).should('exist').click();
    }

    verifyAutoAlertVisible(type) {
        elementsb.autoCloseableAlert(type).should('exist').contains(type + " message");
    }

    waitForSeconds(seconds) {
        cy.wait(seconds * 1000);
    }

    verifyAutoAlertHidden(type) {
        elementsb.autoCloseableAlert(type).should('not.be.visible');
    }

    triggerNormalAlert(type) {
        elementsb.normalButton(type).should('exist').click();
    }

    verifyNormalAlertVisible(type) {
        elementsb.normalAlert(type).should('exist').contains("normal " + type + " message");
    }

    closeNormalAlert(type) {
        elementsb.normalCloseButton(type).should('exist').click();
    }

    verifyNormalAlertHidden(type) {
        elementsb.normalAlert(type).should('not.be.visible');
    }
}
