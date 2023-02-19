import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import "./App.css";

import { theme } from "./components/ui/theme"
import Header from "./components/ui/Header";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وبسایت شخصی پوریا اقدم پور</title>
          </Helmet>
          <Header />
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
