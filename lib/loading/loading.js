/* eslint-disable class-methods-use-this */
import { SimplrTheme } from '@simplr-wc/theme';
import { LitElement, html } from 'lit-element';

/**
 * TODO:
 * - Add multiple animations:
 *   - Rotating symbol
 *   - Indetermine loading bar (animates in a loop)
 *   - Fit into elements
 *   */
export default class SimplrLoading extends LitElement {
  static get properties() {
    return {
      element: { type: Object },
      oldPos: { type: String },
      loadingType: { type: String },
      progress: { type: Number },
      // Color settings
      primary: { type: Boolean },
      secondary: { type: Boolean },
      color: { type: String },
    };
  }

  constructor() {
    super();
    this.element = null;
    this.loadingType = 'bar';
    this.progress = 0;
    this.primary = false;
    this.secondary = false;
    this.color = '#808080';
  }

  firstUpdated() {
    if (!this.element) {
      this.element = this.parentNode;
    }

    if (this.element) {
      this.oldPos = this.element.style.position;
      this.element.style.position = 'relative';
    }
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
      case 'indeterminate-bar':
        return this.getIndeterminateBarLoadingContent();
      case 'circle':
        return this.getRotatingHalfCircleLoadingContent();
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
          background: ${this.getLoadingColor()};
          width: ${this.progress}%;
          height: 100%;
          transition: 0.3s ease-in;
        }
      </style>
      <div class="loading-bar-holder"><div class="loading-bar-progress"></div></div>
    `;
  }

  getIndeterminateBarLoadingContent() {
    return html`
      <style>
        .loading-bar-holder {
          background: ${this.getBackgroundColor()};
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          overflow: hidden;
        }
        .loading-bar-progress {
          position: absolute;
          width: 60%;
          height: 100%;
          background: ${this.getLoadingColor()};
          animation: indeterminate-load;
          transform: translate(-100%, 0);
          animation-iteration-count: infinite;
          animation-duration: 1400ms;
        }

        .loading-bar-progress-one {
          animation-delay: 0ms;
        }

        .loading-bar-progress-two {
          animation-delay: 700ms;
        }

        @keyframes indeterminate-load {
          0% {
            transform: translate(-100%, 0);
          }
          50% {
            transform: translate(180%, 0);
          }
          100% {
            transform: translate(180%, 0);
          }
        }
      </style>
      <div class="loading-bar-holder">
        <div class="loading-bar-progress loading-bar-progress-one"></div>
        <div class="loading-bar-progress loading-bar-progress-two"></div>
      </div>
    `;
  }

  getRotatingHalfCircleLoadingContent() {
    return html`
      <style>
        .loading-half-circle-holder {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .loading-half-circle {
          animation: rotate;
          animation-iteration-count: infinite;
          animation-duration: 1000ms;
          animation-timing-function: linear;
        }

        @keyframes rotate {
          0% {
            transform: rotate(-90deg);
          }
          100% {
            transform: rotate(270deg);
          }
        }

        .loading-half-circle {
          width: 60px;
          height: 60px;
        }

        circle {
          animation: shorten-svg;
          animation-iteration-count: infinite;
          animation-duration: 1500ms;
          animation-timing-function: ease-in-out;
          stroke-dasharray: 130;
          stroke-dashoffset: 0;
        }

        @keyframes shorten-svg {
          0% {
            stroke-dashoffset: -130;
          }
          50% {
            stroke-dashoffset: -30;
          }
          60% {
            stroke-dashoffset: -30;
          }
          100% {
            stroke-dashoffset: -130;
          }
        }
      </style>
      <div class="loading-half-circle-holder">
        <svg class="loading-half-circle" height="60" width="60">
          <circle
            cx="30"
            cy="30"
            stroke-width="3"
            stroke="${this.getLoadingColor()}"
            r="25"
            fill="transparent"
          />
        </svg>
      </div>
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
