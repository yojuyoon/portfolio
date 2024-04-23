/** @type {import('tailwindcss').Config} */

const spacing = () => {
  const baseFontSize = 16; // 1rem = 16px
  const maxValueInPx = 800; // Maximum value in pixels
  const remValues = {};

  for (let pxValue = 0; pxValue <= maxValueInPx; pxValue++) {
    const remValue = pxValue / baseFontSize;
    const clampedRemValue = Math.max(
      0,
      Math.min(remValue, maxValueInPx / baseFontSize)
    );
    remValues[pxValue] = `${clampedRemValue}rem`;
  }

  return remValues;
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: spacing(),
      width: {
        maxWidth: "1080px",
      },
      maxWidth: { desktop: "1080px" },
      colors: {
        darkBg: "#201F1F",
        caption: "#6CACE4",
        focus: "#13ACDE",
        darkGray: "#6b6a6a",
        mediumGray: "#999797",
        lightGray: "#C5C5C5",
        extraLightGray: "#e5e3e3",
        lightBlack: "#252525",
        violet: "#9358F7",
        white: "#FFFFFF",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 1600px",
          },
          "100%": {
            backgroundPosition: "1600px 0",
          },
        },
        animation: "gradient 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
