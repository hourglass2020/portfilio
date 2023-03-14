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

function AppContainer() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));


  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout>
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
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "white" }}
              >
                نظرات دانشجویان
              </Typography>
            </Page>
            <Page value={pageNumber} index={5}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "white" }}
              >
                ارتباط با من
              </Typography>
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
