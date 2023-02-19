import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
        fontFamily: "Shabnam, Roboto",
    },
});