import { LitElement, html, css } from 'lit'
import { styleMap } from 'lit-html/directives/style-map'

export class GButton extends LitElement {
    static get properties() {
      return {
        primary: { type: Boolean },
        backgroundColor: false,
        size: { type: String },
        label: { type: String },
        onClick: false
      }
    }

    static get styles() {
      return css`
        h1 {
          color: red;
        }
        .button {
          font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 700;
          border: 0;
          border-radius: .75em;
          cursor: pointer;
          display: inline-block;
          line-height: 1;
        }
        .button--primary {
          color: white;
          background-color: #1ea7fd;
        }
        .button--secondary {
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        }
        .button--small {
          font-size: 12px;
          padding: 10px 16px;
        }
        .button--medium {
          font-size: 14px;
          padding: 11px 20px;
        }
        .button--large {
          font-size: 16px;
          padding: 12px 24px;
        }
      `
    }

    constructor() {
      super()
      this.title = 'My button'
    }
    
    render() {
      const mode = this.primary ? 'button--primary' : 'button--secondary'
      return html`
        <h1>Teste</h1>
        <button
          type="button"
          class=${['button', `button--${this.size || 'medium'}`, mode].join(' ')}
          style=${styleMap({ backgroundColor: this.backgroundColor })}
          @click=${this.onClick}
        >
          ${this.label}
        </button>
      `
    }
}

customElements.define('g-button', GButton)