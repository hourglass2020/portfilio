import { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import { DrawerFAB } from "../components/drawer";

import MainContext from "../context";
import SwipeableViews from "react-swipeable-views";
import { About, Home, Resume } from "../pages";
import Courses from "../pages/Courses";
import Comments from "../pages/Comments";
import Contact from "../pages/Contact";

function AppContainer() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const preferedDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`)

  const [mode, setMode] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);


  useEffect(() => {
    setMode(preferedDarkMode === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const handleThemeChange = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerFAB />
        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page value={pageNumber} index={0}>
              <Home />
            </Page>
            <Page value={pageNumber} index={1}>
              <About />
            </Page>
            <Page value={pageNumber} index={2}>
              <Resume helmetTitle={"رزمه من"} />
            </Page>
            <Page value={pageNumber} index={3}>
              <Courses helmetTitle={"نمونه کارهای من"} />
            </Page>
            <Page value={pageNumber} index={4}>
              <Comments />
            </Page>
            <Page value={pageNumber} index={5}>
              <Contact helmetTitle={"ارتباط با من"} />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
