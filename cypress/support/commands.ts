import { timesToClick } from "./commands/timesToClick";
import { pseudoCss } from "./commands/pseudoCss";
import { onHover } from "./commands/onHover";
import { parseColor } from "./commands/parseColor";

Cypress.Commands.add("onHover", { prevSubject: true }, <any>onHover);
Cypress.Commands.add("pseudoCss", { prevSubject: true }, <any>pseudoCss);
Cypress.Commands.add("parseColor", { prevSubject: true }, <any>parseColor);
Cypress.Commands.add("timesToClick", { prevSubject: true }, <any>timesToClick);
