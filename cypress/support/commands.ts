import { timesToClick } from "./commands/timesToClick";
import { pseudoCss } from "./commands/pseudoCss";
import { onHover } from "./commands/onHover";
import { parseColor } from "./commands/parseColor";
import { noTransition } from "./commands/noTransition";
import { borderColor } from "./commands/firefox";

Cypress.Commands.add("onHover", { prevSubject: true }, <any>onHover);
Cypress.Commands.add("pseudoCss", { prevSubject: true }, <any>pseudoCss);
Cypress.Commands.add("parseColor", { prevSubject: true }, <any>parseColor);
Cypress.Commands.add("timesToClick", { prevSubject: true }, <any>timesToClick);
Cypress.Commands.add("noTransition", { prevSubject: true }, <any>noTransition);
Cypress.Commands.add("borderColor", { prevSubject: true }, <any>borderColor);
