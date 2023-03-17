import { config } from "../../config";

describe("cypress test spec", () => {
  it("logs in", () => {
    cy.visit(config.WEBSITE_URL);
    cy.contains("Login page");

    cy.get("button").type("Test User");
    cy.contains("Submit").click();

    cy.contains("Home page");
  });
});

export {};
