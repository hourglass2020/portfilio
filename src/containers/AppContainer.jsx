import { useState } from "react";
import { Box, Typography } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import { DrawerFAB } from "../components/drawer";

import MainContext from "../context";

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
          <Page value={pageNumber} index={0}>

            <Box
              sx={{
                backgroundImage: `url(${require("../assets/bg02.jpg")})`,
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "white" }}
              >
                صفحه اصلی
              </Typography>
            </Box>
          </Page>
          <Page value={pageNumber} index={1}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              درباره من
            </Typography>
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
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
