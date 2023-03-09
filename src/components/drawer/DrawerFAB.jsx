import React, { useContext } from "react";

import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import MainContext from "../../context";

function DrawerFAB() {
    const { setDrawerOpen } = useContext(MainContext);

    return (
        <Box
            sx={{
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
                position: 'absolute'
            }}
        >
            <Fab
                aria-label={"Sidebar"}
                size="small"
                sx={{ m: 2, backgroundColor: "primary.main" }}
                onClick={() => setDrawerOpen((prev) => !prev)}
            >
                <MenuRounded />
            </Fab>
        </Box>
    );
}

export default DrawerFAB;
