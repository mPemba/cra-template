const baseTheme = {
  blue: "#0072EC", // Original Blue "#007AFF",
  green: "#34C759",
  red: "#E22E25", // Original Red "#FF3B30",
  orange: "#FF9500",
  yellow: "#FFCC00",
  grey100: "#F2F2F7",
  grey200: "#E5E5EA",
  grey300: "#D1D1D6",
  grey400: "#C7C7CC",
  grey500: "#AEAEB2",
  white: "#fff",
  black: "#000",
};

const darkTheme = {
  ...baseTheme,
  background: "#000",
  text: "#fff",
};

const lightTheme = {
  ...baseTheme,
  background: "#fff",
  text: "#000",
};

const getTheme = (currentTheme) => {
  return currentTheme === "light" ? lightTheme : darkTheme;
};

export { getTheme };
