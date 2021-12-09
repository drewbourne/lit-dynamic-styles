import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LitDynamicStylesMixin } from "./lit-dynamic-styles-mixin";
import { ResponsiveProperty, responsivePropertyConverter } from "./responsive";
import {
  Border,
  BorderType,
  Elevation,
  ElevationType,
  Padding,
  PaddingType,
  Rank,
  RankType,
  spacingScale,
  Theme,
  ThemeType,
} from "./system";

@customElement("d-container")
export class DContainerElement extends LitDynamicStylesMixin(LitElement, {
  variants: {
    padding: spacingScale,
    border: {
      none: {
        border: "none",
      },
      primary: {
        border: "1px solid hsl(0, 0%, 35%)",
      },
      secondary: {
        border: "1px solid hsl(0, 0%, 55%)",
      },
      tertiary: {
        border: "1px solid hsl(0, 0%, 85%)",
      },
    },
    rank: {
      primary: {
        color: "var(--color-primary)",
        background: "var(--background-primary)",
      },
      secondary: {
        color: "var(--color-secondary)",
        background: "var(--background-secondary)",
      },
      tertiary: {
        color: "var(--color-tertiary)",
        background: "var(--background-tertiary)",
      },
    },
    elevation: {
      base: {
        boxShadow: `0 0 0 hsla(0, 0%, 5%, 35%)`,
      },
      low: {
        boxShadow: `0 1px 2px hsla(0, 0%, 5%, 35%)`,
      },
      medium: {
        boxShadow: `0 2px 4px hsla(0, 0%, 5%, 35%)`,
      },
      high: {
        boxShadow: `0 4px 8px hsla(0, 0%, 5%, 35%)`,
      },
    },
    theme: {
      light: {
        "--color-primary": "hsl(0, 0%, 5%)",
        "--background-primary": "hsl(0, 0%, 100%)",
        "--color-secondary": "hsl(0, 0%, 15%)",
        "--background-secondary": "hsl(0, 0%, 95%)",
        "--color-tertiary": "hsl(0, 0%, 25%)",
        "--background-tertiary": "hsl(0, 0%, 85%)",
      },
      dark: {
        "--color-primary": "hsl(0, 0%, 100%)",
        "--background-primary": "hsl(0, 0%, 5%)",
        "--color-secondary": "hsl(0, 0%, 95%)",
        "--background-secondary": "hsl(0, 0%, 15%)",
        "--color-tertiary": "hsl(0, 0%, 85%)",
        "--background-tertiary": "hsl(0, 0%, 25%)",
      },
    },
  },
}) {
  static styles = [
    css`
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }

      :host([hidden]) {
        display: none;
      }
    `,
  ];

  @property({ converter: responsivePropertyConverter })
  border?: ResponsiveProperty<Border | BorderType>;

  @property({ converter: responsivePropertyConverter })
  elevation?: ResponsiveProperty<Elevation | ElevationType>;

  @property({ converter: responsivePropertyConverter })
  rank?: ResponsiveProperty<Rank | RankType>;

  @property({ converter: responsivePropertyConverter })
  theme?: ResponsiveProperty<Theme | ThemeType> = "light";

  @property({ type: Boolean })
  hidden: boolean = false;

  @property({ converter: responsivePropertyConverter })
  padding?: ResponsiveProperty<Padding | PaddingType>;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "d-container": DContainerElement;
  }
}
