import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('new-element')
export class NewElement extends LitElement {

    render() {
        return html`<h1>Hello world</h1>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'new-element': NewElement
    }
  }
  