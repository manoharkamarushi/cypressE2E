describe("check page navigation", () => {
  before("launch url", () => {
    cy.visit("https://way2automation.com/way2auto_jquery/index.php");
  });

  it("Verify page title", () => {
    cy.url().should("include", "/index.php");
    cy.title().should("contains", "Welcome"); // bdd assertions
    cy.title().then(($text) => {
      //chai jquery assertions
      //expect($text).to.contains('Test Site')
      assert.equal($text, "Welcome to the Test Site"); //tdd assertions
    });
  });

  it("Verify Name field", () => {
    // it matching 2 elements (one in ui and one is hidden but in dom)
    // #load_form > fieldset:nth-child(5) > label

    // so change it to
    cy.get("#load_box > #load_form > fieldset:nth-child(5) > label").then(
      (label) => {
        cy.log(label.text());
      }
    );

    //another way using eq pass index as parameter
    cy.get("#load_form > fieldset:nth-child(5) > label")
      .eq(1) //eq takes index as param
      .then((label) => {
        cy.log(label.text());
      });

    //another way  using first() last() returns matching element of 1st or 2nd selector
    cy.get("#load_form > fieldset:nth-child(5) > label")
      .last()
      .then((label) => {
        cy.log(label.text());
      });

    //validating one way
    cy.get("#load_form > fieldset:nth-child(5) > label")
      .last()
      .should("contains.text", "Name:");

    //validating 2nd way
    cy.get("#load_form > fieldset:nth-child(5) > label")
      .last()
      .should("have.text", "Name:");
  });

  it("verify element visibility and attributes", () => {
    cy.get("#load_box > #load_form > fieldset:nth-child(5) > input[type=text]")
      .should("be.visible") // validation 1
      .invoke("attr", "type")
      .should("contain", "text"); //validate 2 using invoke method for attributes
  });

  it.only("verify element within another element", () => {
    cy.get("#load_box")
      .find("input")
      .its("length") //returns 8 but actually 6, 2 are type hidden
      .then((eleLength) => {
        cy.log(eleLength);
      }); // to print length
  });
  it.only("verify element within another element", () => {
    cy.get("#load_box")
      .find("input")
      .invoke("attr", "type")
      .should("not.have", "hidden")
      .its("length") //excluding hidden
      .then((eleLength) => {
        cy.log(eleLength);
      }); // to print length

    //another way using children
    cy.get("#load_box > form > fieldset")
      .children("input")
      .its("length")
      .then((eleLength) => {
        cy.log(eleLength);
      }); // to print length

    //finding within a form/section/block using within
    cy.get("#load_box > form > fieldset").within((section) => {
      cy.get("input").its("length").should("eq", 6);
      cy.get("input").first().type("cypressAutomation");
      cy.get("input").last().type("cypressAutomation");
      cy.wait(3000); //hard wait
      cy.get("input[name='phone']", { timeout: 3000 }).type("98794582");
      //setting timeout for that element, if found within given time proceeds
    });

    //sibling elements prev(),next(),parent()
    cy.get("#load_box > form > fieldset").within((section) => {
      cy.get("input").its("length").should("eq", 6);
      cy.get("input")
        .first()
        .prev()
        .then((label) => {
          cy.log("sibling element label is ", label);
        });
    });
  });
});
