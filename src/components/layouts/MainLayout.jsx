import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { Typography, Box, Divider, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

import { theme } from "./../ui/theme";
import Sidebar from './../ui/Sidebar';

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

function MainLayout({ children }) {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وبسایت شخصی پوریا اقدم پور</title>
                    </Helmet>
                    <Grid container sx={{ height: "100vh" }}>
                        <Sidebar />
                        <Grid
                            xs={12}
                            sm={12}
                            md={9}
                            lg={10}
                            xl={10}
                            sx={{ backgroundColor: "secondary.main" }}
                        >
                            <Typography textAlign={"center"} variant="h5">
                                Main Content
                            </Typography>
                            {children}
                        </Grid>
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MainLayout;
