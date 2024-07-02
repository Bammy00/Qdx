///<reference types="cypress"/>

export class BootstrapModalPage {
    openApplication() {
        cy.visit('/');
    }

    goToModalPage() {
        cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle')
            .contains('Alerts & Modals')
            .click();
        cy.get('.open > .dropdown-menu > :nth-child(2) > a')
            .contains('Bootstrap Modals')
            .click();
        cy.contains('Bootstrap Modal Example for Automation')
            .should('be.visible');
    }

    openSingleModal() {
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-heading')
            .contains('Single Modal Example');
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]')
            .click();
    }

    clickCloseButton() {
        cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
            .contains('Close')
            .click();
    }

    clickCancelIcon() {
        cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-header > .close')
            .click();
    }

    clickSaveButton() {
        cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click();
    }

    openFirstModal() {
        cy.get(':nth-child(3) > .col-md-4 > .panel > .panel-heading')
            .contains('Multiple Modal Example');
        cy.get('[href="#myModal"]')
            .click();
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title')
            .contains('First Modal');
    }

    clickFirstModalCloseButton() {
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
            .click();
    }

    clickFirstModalCancelIcon() {
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .close')
            .click();
    }

    clickFirstModalSaveButton() {
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click();
    }

    openSecondModal() {
        cy.get('.modal-body > .btn')
            .click();
        cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title')
            .contains('Modal 2');
    }

    clickSecondModalCloseButton() {
        cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
            .click();
    }

}
