import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LitDynamicStylesMixin } from "./lit-dynamic-styles-mixin";
import { ResponsiveProperty, responsivePropertyConverter } from "./responsive";
import { Gap, GapType, Padding, PaddingType, spacingScale } from "./system";

@customElement("d-row")
export class DRowElement extends LitDynamicStylesMixin(LitElement, {
  variants: {
    gap: spacingScale,
    padding: spacingScale,
  },
}) {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    `,
  ];

  @property({ converter: responsivePropertyConverter })
  padding?: ResponsiveProperty<Padding | PaddingType>;

  @property({ converter: responsivePropertyConverter })
  gap?: ResponsiveProperty<Gap | GapType>;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "d-row": DRowElement;
  }
}
