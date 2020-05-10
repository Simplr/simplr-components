/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import SimplrTheme from '@simplr-wc/theme';

/**
 * TODO:
 * - Add multiple animations:
 *   - Rotating symbol
 *   - Indetermine loading bar (animates in a loop)
 *   - Handle progress on normal bar
 *   - Fit into elements
 *   */
export default class SimplrLoading extends LitElement {
  static get properties() {
    return {
      element: { type: String },
      oldPos: { type: String },
      type: { type: String },
      progress: { type: Number },
    };
  }

  constructor() {
    super();
    if (!this.element) {
      this.element = this.parentNode;
    }
    this.loadingType = 'bar';
    this.oldPos = this.element.style.position;
    this.element.style.position = 'relative';
  }

  /**
   * Apply loading element to given element.
   * @param {HTMLElement} element for loading element
   * @returns Callback to remove loading animation
   * */
  static applyBar(element) {
    const loadingElem = document.createElement('simplr-loading');
    loadingElem.element = element;
    loadingElem.loadingType = 'bar';
    loadingElem.element.appendChild(this);
    return loadingElem.loadingControls;
  }

  getBackgroundColor() {
    if (this.primary) return `${SimplrTheme().primary.main}66`;
    if (this.secondary) return `${SimplrTheme().secondary.main}66`;
    if (this.color) return `${this.color}66`;
    return '#80808066';
  }

  getLoadingColor() {
    if (this.primary) return SimplrTheme().primary.main;
    if (this.secondary) return SimplrTheme().secondary.main;
    if (this.color) return this.color;
    return '#808080';
  }

  loadingControls() {
    return { end: this.endLoading, setProgress: this.setProgress };
  }

  /**
   * A callback returned after applying a loading element.
   * Is called to end loading animation
   * */
  endLoading() {
    this.element.style.position = this.oldPos;
    this.remove();
  }

  setProgress(amount) {
    this.progress = amount;
  }

  getLoadingContentByType() {
    switch (this.loadingType) {
      case 'bar':
        return this.getBarLoadingContent();
      default:
        return null;
    }
  }

  getBarLoadingContent() {
    return html`
      <style>
        .loading-bar-holder {
          background: ${this.getBackgroundColor()};
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }

        .loading-bar-progress {
          background: black;
          width: ${this.progress}%;
          height: 100%;
          transition: 0.3s ease-in;
        }
      </style>
      <div class="loading-bar-holder"><div class="loading-bar-progress"></div></div>
    `;
  }

  render() {
    return html`
      ${this.getLoadingContentByType()}
    `;
  }
}

if (!customElements.get('simplr-loading')) {
  customElements.define('simplr-loading', SimplrLoading);
}
