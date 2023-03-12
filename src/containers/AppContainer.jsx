import { useState } from "react";
import { Box, Typography } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import { DrawerFAB } from "../components/drawer";

import MainContext from "../context";
import SwipeableViews from "react-swipeable-views";
import { About, Home } from "../pages";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "white" }}
              >
                رزومه من
              </Typography>
            </Page>
            <Page value={pageNumber} index={3}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "white" }}
              >
                نمونه کارها
              </Typography>
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
