function getFrameElement(currentWindow: any): HTMLElement {
  if (currentWindow.frameElement) {
    // accessible for same-origin iframes
    // or when running with --disable-web-security
    return currentWindow.frameElement as HTMLElement;
  }

  // fallback to querying using the parent window, mainly to grab the AUT iframe
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return [...currentWindow.parent.document.querySelectorAll("iframe")].find(
    (iframe) => iframe.contentWindow === currentWindow
  )!;
}

function getIframesPositionShift(element: HTMLElement) {
  let currentWindow: Window | null = element.ownerDocument.defaultView;
  const noPositionShift = {
    frameScale: 1,
    frameX: 0,
    frameY: 0,
  };

  if (!currentWindow) {
    return noPositionShift;
  }

  // eslint-disable-next-line prefer-const
  const iframes = [];

  while (currentWindow !== window.top) {
    iframes.push(getFrameElement(currentWindow));
    currentWindow = currentWindow.parent;
  }

  return iframes.reduceRight(({ frameX, frameY, frameScale }, frame) => {
    const { x, y, width } = frame.getBoundingClientRect();

    return {
      frameX: frameX + x * frameScale,
      frameY: frameY + y * frameScale,
      frameScale: frameScale * (width / frame.offsetWidth),
    };
  }, noPositionShift);
}

export function getElementPositionXY(htmlElement: HTMLElement) {
  const {
    x: elementX,
    y: elementY,
    width,
    height,
  } = htmlElement.getBoundingClientRect();

  const { frameScale, frameX, frameY } = getIframesPositionShift(htmlElement);

  return {
    x: frameX + elementX * frameScale,
    y: frameY + elementY * frameScale,
    width: width * frameScale,
    height: height * frameScale,
  };
}
