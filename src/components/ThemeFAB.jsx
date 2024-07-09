import React, { useContext } from "react";

import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import MainContext from "../context";
import { useTheme } from "@emotion/react";

function ThemeFAB() {
    const theme = useTheme();
    const { handleThemeChange } = useContext(MainContext);

    return (
        <Box
            sx={{
                display: {
                    xs: "none",
                    md: "block",
                },
                position: "absolute",
            }}
        >
            <Fab
                aria-label={"ThemeChanger"}
                variant="extended"
                size="small"
                color="secondary"
                sx={{ ml: 2, color: "whitesmoke" }}
                onClick={() => {
                    // console.log(theme.palette.mode);
                    handleThemeChange()
                }}
            >
                {theme.palette.mode === "dark" ? (
                    <WbSunnyOutlined sx={{ mr: 1 }} />
                ) : (
                    <NightlightOutlined sx={{ mr: 1 }} />
                )}
                {theme.palette.mode === "dark" ? "light" : "dark"}
            </Fab>
        </Box>
    );
}

export default ThemeFAB;
