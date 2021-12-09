import "construct-style-sheets-polyfill";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./d-column";
import "./d-container";
import "./d-row";
import { Border, Padding, Rank } from "./system";

@customElement("lit-dynamic-styles-demo")
export class LitDynamicStylesDemoElement extends LitElement {
  render() {
    return html`
      <d-container padding="giant" rank="tertiary">
        <d-container padding="huge" rank="primary">
          <d-column gap="medium">
            <h1>Dynamic Styles with Lit</h1>
            <d-row gap="medium">
              <d-container rank="tertiary" padding="medium">
                <d-container rank="secondary" padding="medium"
                  ><d-container rank="primary" padding="medium"
                    >primary</d-container
                  ></d-container
                >
              </d-container>

              <d-container
                .border=${[Border.tertiary, Border.secondary, Border.primary]}
                .rank=${[Rank.tertiary, Rank.secondary, Rank.primary]}
                .padding=${[Padding.small, Padding.medium, Padding.huge]}
                >Responsive</d-container
              >

              <d-container border="primary" rank="primary" padding="medium"
                >primary</d-container
              >
              <d-container border="secondary" rank="secondary" padding="medium"
                >secondary</d-container
              >
              <d-container border="tertiary" rank="tertiary" padding="medium"
                >tertiary</d-container
              >
            </d-row>

            <d-row gap="medium">
              <d-container rank="tertiary" padding="medium" theme="dark">
                <d-container rank="secondary" padding="medium" theme="dark"
                  ><d-container rank="primary" padding="medium" theme="dark"
                    >primary</d-container
                  ></d-container
                >
              </d-container>

              <d-container
                .border=${[Border.tertiary, Border.secondary, Border.primary]}
                .rank=${[Rank.tertiary, Rank.secondary, Rank.primary]}
                .padding=${[Padding.small, Padding.medium, Padding.huge]}
                theme="dark"
                >Responsive</d-container
              >

              <d-container
                border="primary"
                rank="primary"
                padding="medium"
                theme="dark"
                >primary</d-container
              >
              <d-container
                border="secondary"
                rank="secondary"
                padding="medium"
                theme="dark"
                >secondary</d-container
              >
              <d-container
                border="tertiary"
                rank="tertiary"
                padding="medium"
                theme="dark"
                >tertiary</d-container
              >
            </d-row>
          </d-column>
        </d-container>
      </d-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-dynamic-styles-demo": LitDynamicStylesDemoElement;
  }
}
