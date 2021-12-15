import { extendTheme } from "@chakra-ui/react";

const Button = {
  // The styles all button have in common
  baseStyle: {    
    fontWeight: "400",
    borderRadius: "24px",
    backgroundColor: "#007DE8",
    width: "full",
    fontSize: "12px",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: "lg",
      px: 16,
      py: 6,
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    light: {
      bg: "#FFF6FF",
      fontWeight: "normal",
      borderRadius: "8px",
      color: "#961BA9",
      boxShadow: "none",
    },
    solid: {
      bg: "#007DE8",
      color: "white",
      boxShadow: "none",
      width: "100%",
      fontSize: "16px",
      _hover: {
        background: "transparent",
        border: "#007DE8"
      }
    },
    white: {
      bg: "white",
      color: "#961BA9",
      boxShadow: "none",
    },
    disabled: {
      bg: "#FFE071",
      color: "#961BA9",
      boxShadow: "none",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
};

export const theme = extendTheme({
  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  colors: {
    brand: {
      primary: "#007DE8",
      secondary: "#00E8BE",
      "textColorOne": "#FAFAFA",
      "textColorTwo": "#616161",
      "bodyText": "#9E9E9E",
      "subHeadColor": "#BDBDBD",
      "thickDark": "#424242",
      "successColor": "#00E841",
      "dangerColor": "#E80E00",
      "midWhite": "#EEEEEE",
      "brown": "#212121",
      "darkishBrown": "#202020",
      "darkBrown": "#131313",
      "primaryBG": "#121212",
      "accentBrown": "#181818",      
    },
    brandPrimaryTheme: {
      100: "#961BA9",
      200: "#961BA9",
      300: "#961BA9",
      400: "#961BA9",
      500: "#961BA9",
    },
  },
  components: { Button, },
});