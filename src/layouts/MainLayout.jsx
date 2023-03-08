import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Grid from "@mui/material/Unstable_Grid2";

import { theme } from "./themes";

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
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MainLayout;
