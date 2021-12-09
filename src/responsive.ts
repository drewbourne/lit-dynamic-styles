export type ResponsiveProperty<Key> = Key | Array<Key>;

export const responsivePropertyConverter = {
  fromAttribute: (value: string, type: any) => {
    if (value && /^\[(.*)\]$/.test(value)) {
      const values = value
        .replace(/^\[/g, "")
        .replace(/\]$/g, "")
        .replace(/'/g, "")
        .replace(/"/g, "")
        .split(/,\s*/);
      return values;
    }
    return value;
  },
  toAttribute: (value: any, type: any): string => {
    return JSON.stringify(value);
  },
};
