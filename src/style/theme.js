import { extendTheme } from "@chakra-ui/react";


export const myTheme = extendTheme({
    colors: {
            one: "#38589A",
            secondary: "#1A202C",
            tertiary: "#CBD5E0",
            quaternary: "#EDF2F7",
            two:"#2C5282",
            three:"#1A365D",
            four:"#ffffff",
        },
    
        fontSize: {
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "48px",
        },
        fonts: {
            heading: "Roboto",
            body: "Roboto",
        },

});
