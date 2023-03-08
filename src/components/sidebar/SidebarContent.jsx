import React from "react";

import { Box, Divider } from "@mui/material";

import { grey } from "@mui/material/colors";

import { SidebarFooter, SidebarHeader, SidebarTabs } from ".";

function SidebarContent() {
    return (
        <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
            <SidebarHeader />
            <Divider variant="middle" color={grey[700]} sx={{ my: 1 }} />
            <SidebarTabs />
            <Divider variant="middle" color={grey[700]} sx={{ my: 2 }} />
            <SidebarFooter />
        </Box>
    );
}

export default SidebarContent;
