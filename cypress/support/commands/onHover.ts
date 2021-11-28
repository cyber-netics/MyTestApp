import { getElementPositionXY } from "../util/coords";

type IParams = {
  x: number;
  y: number;
  type: string;
  button: string;
  pointerType: string;
};

const fireCdpCommand = async (command: string, params: IParams) => {
  return Cypress.automation("remote:debugger:protocol", {
    command,
    params,
  }).catch((e) => {
    throw new Error(
      `Failed request to chrome devtools protocol. This can happen if cypress lost connection to the browser or the command itself is not valid. Original cypress error: ${e}`
    );
  });
};

export const onHover = async (elem: JQuery<HTMLElement>) => {
  elem[0].style.transition = "none";

  const { x, y } = getElementPositionXY(elem[0]);

  await fireCdpCommand("Input.dispatchMouseEvent", {
    x,
    y,
    type: "mouseMoved",
    button: "none",
    pointerType: "mouse",
  });

  return elem;
};
