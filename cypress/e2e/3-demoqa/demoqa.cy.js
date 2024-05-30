const { CheckboxPage } = require("../../pageObjects/checkbox.page");
const { RadiobuttonsPage } = require("../../pageObjects/radiobuttons.page");
const { TextboxPage } = require("../../pageObjects/textbox.page");
const { WebtablesPage } = require("../../pageObjects/webtables.page");

describe("Demoqa", () => {
  context("Text Box", () => {
    beforeEach(() => {
      //cy.visit("https://demoqa.com/text-box");
      TextboxPage.visit();
    });

    // it.skip
    it("Enter text field values - POSITIVE", () => {
      TextboxPage.fullnameTextField.type("John");
      TextboxPage.userEmailField.type("aaa@bbb.xyz");
      TextboxPage.currentAddressTextField.type("Some random current address");
      TextboxPage.permanentAddressTextField.type("Some random permanent address");
      TextboxPage.submitButton.click();
      TextboxPage.nameOutput.should("have.text", "Name:John");
      TextboxPage.emailOutput.get("[id='email']").should("have.text", "Email:aaa@bbb.xyz");
      TextboxPage.currentAddressOutput.should(
        "contain.text",
        "Current Address :Some random current address"
      );
      TextboxPage.permanentAddressOutput.should(
        "contain.text",
        "Permananet Address :Some random permanent address"
      );
    });

    it("Enter text field values - NEGATIVE", () => {
      // Incorrect email
      TextboxPage.userEmailField.should(
        "not.have.class",
        "field-error"
      );
      TextboxPage.userEmailField.type("ajajjajajajaja@a");
      TextboxPage.submitButton.click();
      TextboxPage.userEmailField.should(
        "have.class",
        "field-error"
      );
    });
  });

  context("Checkbox", () => {
    beforeEach(() => {
      CheckboxPage.visit();
    });

    it("Check specific checkboxes", () => {
      // Notes, Angular, Private, Excel File.doc
      CheckboxPage.expandAllBtn.click();
      CheckboxPage.findCheckboxTitleByName("Notes").click();
      CheckboxPage.findCheckboxTitleByName("Angular").click();
      CheckboxPage.findCheckboxTitleByName("Private").click();
      CheckboxPage.findCheckboxTitleByName("Excel File.doc").click();

      // validate selected checkboxes
      CheckboxPage.selectedCheckboxes.should("contain.text", "notes");
      CheckboxPage.selectedCheckboxes.should("contain.text", "angular");
      CheckboxPage.selectedCheckboxes.should("contain.text", "private");
      CheckboxPage.selectedCheckboxes.should("contain.text", "excelFile");
    });
  });

  context("Radio buttons", () => {
    beforeEach(() => {
      RadiobuttonsPage.visit();
    });

    it("Click radio button - Yes", () => {
      RadiobuttonsPage.findBtnLabelByName("Yes").click();
      RadiobuttonsPage.textSuccess.should("contain.text", "Yes");
    });
    it("Click radio button - Impressive", () => {
      RadiobuttonsPage.findBtnLabelByName("Impressive").click();
      RadiobuttonsPage.textSuccess.should("contain.text", "Impressive");
    });
    it("No radio button is disabled/not clickable", () => {
      RadiobuttonsPage.findBtnLabelByName("No").should("have.class", "disabled");
    });
  });

  context.only("Web tables", () => {
    beforeEach(() => {
      WebtablesPage.visit();
    });

    it("Add new row", () => {
      WebtablesPage.addBtn.click();

      WebtablesPage.firstNameInput.type("John");
      WebtablesPage.lastNameInput.type("Smith");
      WebtablesPage.emailInput.type("john@gmail.com");
      WebtablesPage.ageInput.type("28");
      WebtablesPage.salaryInput.type("100000");
      WebtablesPage.departmentInput.type("HR");
      WebtablesPage.submitBtn.click();

      // Validate row appears
      WebtablesPage.findRowByEmail("john@gmail.com").should("contain.text", "JohnSmith28john@gmail.com100000HR");
    });

    it.only("Delete all items", () => {
      WebtablesPage.deleteAllRows();

      WebtablesPage.noRowsText.should("have.text", "No rows found");
    });
  });
});