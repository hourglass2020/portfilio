import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import DrawerContent from "./ui/DrawerContent";
import { Box, Drawer, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{
                backgroundColor: grey[900],
                //  height: "100vh", overflowY: "auto"
            }}
        >
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                    },
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
            <DrawerContent value={value} handleChange={handleChange} />
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
                <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </Grid>
    );
};

export default Sidebar;
