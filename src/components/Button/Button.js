import { html } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map'
import './button.css'

/**
 * Botão base
 */
export const Button = ({ primary, backgroundColor = null, size, label, onClick }) => {
  const mode = primary ? 'button--primary' : 'button--secondary'

  return html`
    <h1>Teste</h1>
    <button
      type="button"
      class=${['button', `button--${size || 'medium'}`, mode].join(' ')}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `
}