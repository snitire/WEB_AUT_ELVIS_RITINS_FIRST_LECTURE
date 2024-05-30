import { BasePage } from "./base.page.js";

export class RadiobuttonsPage extends BasePage {
    static get url() {
        return "/radio-button"
    }

    static get textSuccess() {
        return cy.get(".text-success");
    }

    static findBtnLabelByName(name) {
        return cy.get(".custom-radio>label").contains(name);
    }
}