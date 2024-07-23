import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "512pt",
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      red: {
        light: "rgb(255,59,48)",
        dark: "rgb(255,69,58)",
        "light-acc": "rgb(215,0,21)",
        "dark-acc": "rgb(255,10,97)",
      },
      orange: {
        light: "rgb(255,149,0)",
        dark: "rgb(255,159,10)",
        "light-acc": "rgb(201,52,0)",
        "dark-acc": "rgb(255,179,64)",
      },
      yellow: {
        light: "rgb(255,204,0)",
        dark: "rgb(255,214,10)",
        "light-acc": "rgb(178,80,0)",
        "dark-acc": "rgb(255,212,38)",
      },
      green: {
        light: "rgb(52,199,89)",
        dark: "rgb(48,209,88)",
        "light-acc": "rgb(36,138,61)",
        "dark-acc": "rgb(48,219,91)",
      },
      mint: {
        light: "rgb(0,199,190)",
        dark: "rgb(99,230,226)",
        "light-acc": "rgb(12,129,123)",
        "dark-acc": "rgb(102,212,207)",
      },
      teal: {
        light: "rgb(48,176,199)",
        dark: "rgb(64,200,224)",
        "light-acc": "rgb(0,130,153)",
        "dark-acc": "rgb(93,230,255)",
      },
      cyan: {
        light: "rgb(50,173,230)",
        dark: "rgb(100,210,255)",
        "light-acc": "rgb(0,113,164)",
        "dark-acc": "rgb(112,215,255)",
      },
      blue: {
        light: "rgb(0,122,255)",
        dark: "rgb(10,132,255)",
        "light-acc": "rgb(0,64,221)",
        "dark-acc": "rgb(64,156,255)",
      },
      indigo: {
        light: "rgb(88,86,214)",
        dark: "rgb(94,92,230)",
        "light-acc": "rgb(54,52,163)",
        "dark-acc": "rgb(125,122,255)",
      },
      purple: {
        light: "rgb(175,82,222)",
        dark: "rgb(191,90,242)",
        "light-acc": "rgb(137,68,171)",
        "dark-acc": "rgb(218,143,255)",
      },
      pink: {
        light: "rgb(255,45,85)",
        dark: "rgb(255,55,95)",
        "light-acc": "rgb(211,15,69)",
        "dark-acc": "rgb(255,100,130)",
      },
      brown: {
        light: "rgb(162,132,94)",
        dark: "rgb(172,142,104)",
        "light-acc": "rgb(127,101,69)",
        "dark-acc": "rgb(181,148,105)",
      },
      gray: {
        light: "rgb(142,142,147)",
        dark: "rgb(142,142,147)",
        "light-acc": "rgb(108,108,112)",
        "dark-acc": "rgb(174,174,178)",
      },
      gray2: {
        light: "rgb(174,174,178)",
        dark: "rgb(99,99,102)",
        "light-acc": "rgb(142,142,147)",
        "dark-acc": "rgb(124,124,128)",
      },
      gray3: {
        light: "rgb(199,199,204)",
        dark: "rgb(72,72,74)",
        "light-acc": "rgb(174,174,178)",
        "dark-acc": "rgb(84,84,86)",
      },
      gray4: {
        light: "rgb(209,209,214)",
        dark: "rgb(58,58,60)",
        "light-acc": "rgb(188,188,192)",
        "dark-acc": "rgb(68,68,70)",
      },
      gray5: {
        light: "rgb(229,229,234)",
        dark: "rgb(44,44,46)",
        "light-acc": "rgb(216,216,220)",
        "dark-acc": "rgb(54,54,56)",
      },
      gray6: {
        light: "rgb(242,242,247)",
        dark: "rgb(28,28,30)",
        "light-acc": "rgb(235,235,240)",
        "dark-acc": "rgb(36,36,38)",
      },
    },
  },
  plugins: [],
};
export default config;
