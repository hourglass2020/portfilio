import React from "react";

import {
    Typography,
    Box,
} from "@mui/material";

import {
    FavoriteRounded,
    CopyrightRounded
} from "@mui/icons-material";

function SidebarFooter() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
            }}
        >
            <Typography variant="subtitle2" color="whitesmoke" sx={{ mb: 1 }}>
                <FavoriteRounded
                    sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
                />{" "}
                Designed by
            </Typography>
            <Typography variant="caption" color="whitesmoke">
                <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />{" "}
                Copyright 2022
            </Typography>
        </Box>
    );
}

export default SidebarFooter;
