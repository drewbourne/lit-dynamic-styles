export const breakpoints = [
  null,
  "(min-width: 600px)",
  "(min-width: 900px)",
  "(min-width: 1200px)",
];

export const enum Border {
  none = "none",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export type BorderType = keyof typeof Rank;

export const enum Rank {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export type RankType = keyof typeof Rank;

export const enum Elevation {
  high = "high",
  medium = "medium",
  low = "low",
  zero = "zero",
}

export type ElevationType = keyof typeof Elevation;

export const spacingScale = {
  giant: "4rem",
  huge: "2rem",
  large: "1.5rem",
  medium: "1rem",
  small: "0.5rem",
  tiny: "0.25rem",
  zero: "0",
};

export type SpacingType = keyof typeof spacingScale;

export const enum Spacing {
  giant = "giant",
  huge = "huge",
  large = "large",
  medium = "medium",
  small = "small",
  tiny = "tiny",
  zero = "zero",
}

export const enum Padding {
  giant = "giant",
  huge = "huge",
  large = "large",
  medium = "medium",
  small = "small",
  tiny = "tiny",
  zero = "zero",
}

export type PaddingType = keyof typeof Padding;

export const enum Gap {
  giant = "giant",
  huge = "huge",
  large = "large",
  medium = "medium",
  small = "small",
  tiny = "tiny",
  zero = "zero",
}

export type GapType = keyof typeof Gap;

export const enum Theme {
  auto = "auto",
  light = "light",
  dark = "dark",
}

export type ThemeType = "auto" | "light" | "dark";
