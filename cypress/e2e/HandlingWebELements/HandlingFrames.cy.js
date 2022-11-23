describe("check page navigation", () => {
  before("launch url", () => {
    cy.visit(
      "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_target"
    );
  });

  it("Get frame count", () => {
    cy.url().should("include", "tryhtml_iframe_target");
    cy.title().should("contains", "Tryit Editor"); // bdd assertions
    cy.get("body")
      .find("iframe")
      .its("length")
      .then((framecount) => {
        cy.log(framecount);
      });
  });

  it("switches to result frame and gets text ", () => {
    cy.url().should("include", "tryhtml_iframe_target");
    cy.title().should("contains", "Tryit Editor");
    
    cy.get("iframe[name='iframeResult']").then(($iframe)=>{

       let element= $iframe.contents().find("iframe[name='iframe_a'] > body >h1");
       console.log(element.text());
    })

    })
  });
