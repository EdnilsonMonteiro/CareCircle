import { warn } from "console";

export default {
  primary: {
    get 950() {
      return "#3B9000"; // Adjusted for the darkest shade
    },
    get 900() {
      return "#4EA509"; // Adjusted for very dark shade
    },
    get 800() {
      return "#62B023"; // Adjusted for dark shade
    },
    get 700() {
      return "#76BC3D"; // Adjusted for slightly darker shade
    },
    get 600() {
      return "#8AC856"; // Adjusted for medium-dark shade
    },
    get 500() {
      return "#9ED470"; // Base color
    },
    get 400() {
      return "#B3E089"; // Adjusted for light shade
    },
    get 300() {
      return "#C7EBA3"; // Adjusted for lighter shade
    },
    get 200() {
      return "#D6F3BA"; // Adjusted for very light shade
    },
    get 100() {
      return "#E0F6CE"; // Adjusted for very light shade
    },
    get 50() {
      return "#E9F9E1"; // Adjusted for the lightest shade
    },
  },
  secondary: {
    get 950() {
      // Adjusted for the darkest shade
      return "#AE83FF";
    },
    get 900() {
      // Adjusted for very dark shade
      return "#B695FF";
    },
    get 800() {
      // Adjusted for dark shade
      return "#C0A9FF";
    },
    get 700() {
      // Adjusted for slightly darker shade
      return "#CCBBFF";
    },
    get 600() {
      // Adjusted for medium-dark shade
      return "#D8CEFF";
    },
    get 500() {
      // Base color
      return "#E1AFFF";
    },
    get 400() {
      // Adjusted for light shade
      return "#E8C1FF";
    },
    get 300() {
      // Adjusted for lighter shade
      return "#F0D4FF";
    },
    get 200() {
      // Adjusted for very light shade
      return "#F7E6FF";
    },
    get 100() {
      // Adjusted for very light shade
      return "#FCEFF9";
    },
    get 50() {
      // Adjusted for the lightest shade
      return "#FFFFFF";
    },
  },
  neutral: {
    get 900() {
      return "#040405";
    },
    get 800() {
      return "#17161E";
    },
    get 700() {
      return "#282733";
    },
    get 600() {
      return "#3A3847";
    },
    get 500() {
      return "#4D4B5C";
    },
    get 400() {
      return "#605E70";
    },
    get 300() {
      return "#737185";
    },
    get 200() {
      return "#888599";
    },
    get 100() {
      return "#9D9AAD";
    },
    get 50() {
      return "#DFE1E7";
    },
  },
  info: {
    pure: "#0062BE",
    superLight: "#CCE6FF",
    light: "#94CBFF",
    medium: "#4394E0",
    dark: "#02385C",
  },
  warning: {
    main: "#EAB308",
  },
  success: {
    main: "#10B981",
  },
} as const;
