import { stringify } from "@stitches/stringify";
import "construct-style-sheets-polyfill";
import { LitElement, PropertyValues } from "lit";

type Constructor<T = {}> = new (...args: any[]) => T;

export function LitDynamicStylesMixin<T extends Constructor<LitElement>>(
  superclass: T,
  dynamicStylesDefinition: any
) {
  const breakpoints = dynamicStylesDefinition.breakpoints || [
    null,
    "(min-width: 600px)",
    "(min-width: 900px)",
    "(min-width: 1200px)",
  ];

  const styleProperties = Object.keys(dynamicStylesDefinition.variants);

  return class extends superclass {
    private _dynamicStyleSheets = new Map<string, CSSStyleSheet>();

    connectedCallback() {
      super.connectedCallback();

      const renderRoot = this.renderRoot as ShadowRoot;

      styleProperties.forEach((property) =>
        this._dynamicStyleSheets.set(property, new CSSStyleSheet())
      );

      renderRoot.adoptedStyleSheets = [
        ...renderRoot.adoptedStyleSheets,
        ...Array.from(this._dynamicStyleSheets.values()),
      ];
    }

    willUpdate(changedProperties: PropertyValues) {
      super.willUpdate(changedProperties);

      styleProperties.forEach((property) => {
        if (changedProperties.has(property)) {
          // @ts-ignore
          const propValue = this[property];
          const respValue = Array.isArray(propValue)
            ? propValue
            : propValue
            ? [propValue]
            : [];

          const scale = dynamicStylesDefinition.variants[property];
          const rules: string[] = [];

          respValue.forEach((key, i) => {
            const media = breakpoints[i];
            const value = scale[key];
            if (value === null || value === undefined) return;

            const decls = stringify(
              typeof value === "object" ? value : { [property]: value }
            );

            if (i === 0) {
              rules.push(`:host { ${decls} }`);
            }

            if (media) {
              rules.push(`@media ${media} { :host { ${decls} } }`);
            }

            const sheet = this._dynamicStyleSheets.get(property);
            sheet?.replaceSync(rules.join(""));
          });
        }
      });
    }
  } as T;
}
