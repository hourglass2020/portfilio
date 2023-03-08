import React, { useContext } from "react";

import { grey } from "@mui/material/colors";
import { Drawer } from "@mui/material";

import { SidebarContent } from "../sidebar";

import MainConext from "../../context";

function SidebarDrawer() {
    const { drawerOpen, setDrawerOpen } = useContext(MainConext);

    return (
        <Drawer
            open={drawerOpen}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 310,
                    backgroundColor: grey[900],
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
            }}
        >
            <SidebarContent />
        </Drawer>
    );
}

export default SidebarDrawer;
