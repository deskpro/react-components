import ReactDOM from 'react-dom';
import { domIsReactComponent } from 'utils/dom';

/**
 * Sets the width of toSet to the computed width of toGet
 *
 * Returns the computed width.
 *
 * @param {element} toGet  Get the computed width from this element
 * @param {element} toSet Set the computed width on this element
 * @return {string}
 */
export function cssMatchComputedWidth(toGet, toSet) {
  let getEl  = toGet;
  let setEl = toSet;
  if (domIsReactComponent(getEl)) {
    getEl = ReactDOM.findDOMNode(getEl);
  }
  if (domIsReactComponent(setEl)) {
    setEl = ReactDOM.findDOMNode(setEl);
  }

  let width = 0;
  if (getEl && setEl) {
    width = window.getComputedStyle(getEl, null).width; // eslint-disable-line
    setEl.style.width = width;
  }
  return width;
}
