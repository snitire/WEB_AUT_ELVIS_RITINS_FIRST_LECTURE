import { BasePage } from "./base.page.js";

export class CheckboxPage extends BasePage {
    static get url() {
        return "/checkbox"
    }

    static get expandAllBtn() {
        return cy.get("button[title='Expand all']");
    }

    static get selectedCheckboxes() {
        return cy.get('#result>.text-success');
    }

    static findCheckboxTitleByName(name) {
        return cy.get('.rct-title').contains(name);
    }
}