import { BasePage } from "./base.page.js";

export class WebtablesPage extends BasePage {
    static get url() {
        return "/webtables"
    }

    static get addBtn() {
        return cy.get("#addNewRecordButton");
    }

    static get firstNameInput() {
        return cy.get("#firstName");
    }

    static get lastNameInput() {
        return cy.get("#lastName");
    }

    static get emailInput() {
        return cy.get("#userEmail");
    }

    static get ageInput() {
        return cy.get("#age");
    }

    static get salaryInput() {
        return cy.get("#salary");
    }

    static get departmentInput() {
        return cy.get("#department");
    }

    static get submitBtn() {
        return cy.get("#submit");
    }

    static allRows() {
        return cy.get("[role='row']")
    }

    static findRowByEmail(email) {
        return WebtablesPage.allRows()
        .contains(email) // finds the specific cell with the email
        .parent(); // returns the whole row
    }

    static get rowsDeleteBtns() {
        return this.allRows().find("[id^='delete-record']")
    }

    static get noRowsText() {
        return cy.get(".rt-noData");
    }

    static deleteAllRows() {
        this.rowsDeleteBtns.then(btns => {
            if (btns.length > 0) {
                this.rowsDeleteBtns.first().click();

                if (btns.length !== 1) {
                    // avoid errors when trying to find the buttons again
                    this.deleteAllRows();
                }
            }
        })
    }
}