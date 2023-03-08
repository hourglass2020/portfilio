import React, { useContext } from "react";
import { Tab, Tabs } from "@mui/material";

import { grey } from "@mui/material/colors";

import MainContext from "../../context";
import { tabsData } from "../data/tabsData.sidebar";

function SidebarTabs() {

    const { pageNumber, setDrawerOpen, handlePageNumber } = useContext(MainContext);

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
            onClick={() => setDrawerOpen(false)}
        >

            {tabsData().map(tab => (
                <Tab
                    sx={{
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        color: "whitesmoke",
                        "&.MuiTab-root": {
                            minHeight: 50,
                        },
                    }}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition={"start"}
                    {...tab}
                />
            ))}

        </Tabs>
    );
}

export default SidebarTabs;
