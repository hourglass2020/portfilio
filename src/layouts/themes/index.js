import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#F57C00"
        },
        secondary: {
            main: "#FF5722"
        }
    },
    direction: "rtl",
    typography: {
        fontFamily: "Tanha, Roboto",
    },
    /*
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'dashed' },
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${blue[500]}`,
                    },
                },
                {
                    props: { variant: 'dashed', color: 'secondary' },
                    style: {
                        border: `4px dashed ${red[500]}`,
                    },
                },
            ],
        },
    } */
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#F57C00"
        },
        secondary: {
            main: "#FF5722"
        }
    },
    direction: "rtl",
    typography: {
        fontFamily: "Tanha, Roboto",
    },

});