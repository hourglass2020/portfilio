import { useState } from "react";
import { Typography } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import ContentContainer from "./ContentContainer";
import TabPanel from "../components/TabPanel";
import SidebarContainer from "./SidebarContainer";

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
        <ContentContainer>
          <TabPanel value={pageNumber} index={0}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              صفحه اصلی
            </Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={1}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              درباره من
            </Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={2}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              رزومه من
            </Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={3}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              نمونه کارها
            </Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={4}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              نظرات دانشجویان
            </Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={5}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "white" }}
            >
              ارتباط با من
            </Typography>
          </TabPanel>
        </ContentContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
