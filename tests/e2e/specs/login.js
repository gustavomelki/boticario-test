/* eslint-disable no-undef */
const userName = "eve.holt@reqres.in";
const wrongUserName = "fake@email.com";
const passWord = "cityslicka";
const wait = 1000;

context("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it(".title() - get the title", () => {
    cy.get("h3").should("have.text", "Acesse sua conta");
  });

  it(".type() - right credentials", () => {
    cy.get("#email")
      .type(userName, { delay: 100 })
      .should("have.value", userName);

    cy.get("#password")
      .type(passWord, { delay: 100 })
      .should("have.value", passWord);

    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
  });

  it(".type() - wrong credentials", () => {
    cy.get("#email")
      .type(wrongUserName, { delay: 100 })
      .should("have.value", wrongUserName);

    cy.get("#password")
      .type(passWord, { delay: 100 })
      .should("have.value", passWord);

    cy.get("form").submit();

    cy.get("#message-error")
      .should("exist")
      .should("have.text", " user not found ");
  });

  it(".click() - register", () => {
    cy.get("#external__link--register").click();
    cy.url().should("include", "/cadastro");
    cy.wait(wait);
    cy.get("#external__link--login").click();
    cy.url().should("include", "/login");
  });
});
