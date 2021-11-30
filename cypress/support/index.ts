import "regenerator-runtime/runtime";
import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      timesToClick([...args]: "Once" | "Twice"): Cypress.Chainable<Element>;
      onHover(): Cypress.Chainable<Element>;
      noTransition(): Cypress.Chainable<Element>;
      pseudoCss(css: string, pseudo?: string): Cypress.Chainable<Element>;
      parseColor(type?: string): Cypress.Chainable<string>;
    }
  }
}
