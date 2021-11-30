export const borderColor = (subject: any, option: string, color: string) => {
  cy.get(subject.selector)
    .should(option, "border-top-color", color)
    .should(option, "border-left-color", color)
    .should(option, "border-right-color", color)
    .should(option, "border-bottom-color", color);
};
