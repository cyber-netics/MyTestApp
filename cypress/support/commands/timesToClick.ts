type IOptions = "Once" | "Twice";
type Subject = Cypress.Chainable<Element>;

export const timesToClick = (subject: Subject, option: IOptions) => {
  if (option === "Once") subject.click();
  if (option === "Twice") subject.click().click();
  return subject;
};
