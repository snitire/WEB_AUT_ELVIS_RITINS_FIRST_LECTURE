export class BasePage {
    static get url() {
        return "";
    }

    static visit() {
        return cy.visit(this.url);
    }
}