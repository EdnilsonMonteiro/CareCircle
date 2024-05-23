import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

import text from "./text";

const sizes = defineStyle({
  xs: {
    ...text.variants["body-xs"],
    h: "fit-content",
    width: "fit-content",
    minWidth: "fit-content",
    py: 2,
    px: 4,
    Icon: {
      h: 3,
      w: 3,
    },
  },
  sm: {
    ...text.variants["body-sm"],
    h: "fit-content",
    minH: 9,
    width: "fit-content",
    minWidth: "fit-content",
    py: 2,
    px: 4,
    Icon: {
      h: 3.5,
      w: 3.5,
    },
  },
  md: {
    ...text.variants["body-md"],
    h: "fit-content",
    width: "fit-content",
    minWidth: "fit-content",
    py: 2,
    px: 6,
    Icon: {
      h: 4,
      w: 4,
    },
  },
  lg: {
    ...text.variants["body-lg"],
    h: "fit-content",
    width: "fit-content",
    minWidth: "fit-content",
    py: 2,
    px: 8,
    Icon: {
      h: 4,
      w: 4,
    },
  },
});

const solidVariant = defineStyle({
  fontFamily: "heading",
  background: "active",
  color: "primary.50",
  bgColor: "primary.500",
  _hover: {
    bgColor: "primary.400",
  },
  get _active() {
    return this._hover;
  },
  _focus: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "primary.700",
  },
  _visited: {
    bgColor: "primary.700",
  },
  _focusWithin: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "primary.700",
  },
  _focusVisible: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "primary.700",
  },
  _disabled: {
    bgColor: "primary.300",
    color: "primary.50",
  },
});

const outlineVariant = defineStyle((props) => ({
  fontFamily: "heading",
  color: "primary.500",
  background: "transparent",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "primary.500",
  ".chakra-button__icon": {
    color: "primary.500",
  },
  _hover: {
    background: props.colorMode === "dark" ? "purple.900" : "primary.200",
  },
  _focus: {
    background: "primary.300",
    borderColor: "primary.700",
  },
  _active: {
    borderColor: "primary.500",
  },
  _disabled: {
    color: "primary.300",
    borderColor: "primary.300",
    background: "primary.50",
    ".chakra-button__icon": {
      color: "primary.300",
    },
  },
}));

const ghostVariant = defineStyle((props) => ({
  fontFamily: "heading",
  background: "transparent",
  color: "primary.500",
  _hover: {
    background: props.colorMode === "dark" ? "primary.500" : "primary.200",
    color: props.colorMode === "dark" ? "primary.50" : "primary.500",
    ".chakra-button__icon": {
      color: "primary.500",
    },
  },
  get _active() {
    return this._hover;
  },
  _disabled: {
    color: props.colorMode === "dark" ? "primary.200" : "primary.400",
    _hover: {
      color: props.colorMode === "dark" ? "primary.200" : "primary.400",
    },
  },
}));

const linkVariant = defineStyle({
  fontFamily: "heading",
  color: "primary.500",
  ".chakra-button__icon": {
    color: "primary.500",
  },
  "::after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: "5px",
    width: "100%",
    borderBottom: "2px solid",
    borderColor: "transparent",
    transitionProperty: "all",
    transitionDuration: ".4s",
    transitionTimingFunction: "ease-in-out",
  },
  _hover: {
    textDecoration: "none",
    "::after": {
      borderColor: "primary.500",
    },
  },
  get _active() {
    return this._hover;
  },
  _focus: {
    "::after": {
      borderColor: "primary.700",
    },
  },
  _disabled: {
    color: "primary.300",
    "::after": {
      borderColor: "primary.300",
    },
    ".chakra-button__icon": {
      color: "primary.300",
    },
    _hover: {
      color: "primary.100",
    },
  },
});

const navigationVariant = defineStyle({
  fontFamily: "heading",
  color: "primary.500",
  ".chakra-button__icon": {
    color: "primary.500",
  },
  _hover: {
    textDecoration: "none",
  },
  get _active() {
    return this._hover;
  },
  _focus: {
    color: "primary.700",
  },
  _disabled: {
    color: "primary.300",
    ".chakra-button__icon": {
      color: "primary.300",
    },
    _hover: {
      color: "primary.100",
    },
  },
});

const variants = {
  solid: solidVariant,
  outline: outlineVariant,
  ghost: ghostVariant,
  link: linkVariant,
  navigation: navigationVariant,
};

const baseStyle = defineStyle({
  borderRadius: 30,
  boxSizing: "border-box",
  svg: {
    color: "inherit",
  },
  transitionProperty: "all",
  transitionDuration: ".4s",
  transitionTimingFunction: "ease-in-out",
  ".chakra-button__icon": {
    transitionProperty: "all",
    transitionDuration: ".4s",
    transitionTimingFunction: "ease-in-out",
  },
});

const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
});

export default buttonTheme;
