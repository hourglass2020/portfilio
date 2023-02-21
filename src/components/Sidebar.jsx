import {
    Typography,
    Avatar,
    Box,
    Divider,
    Hidden,
    Tab,
    Tabs,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    FavoriteRounded,
    CopyrightRounded
} from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {

    const tabProps = (index) => {
        return {
            id: `sidebar-tab${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    }

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
            <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
                <Hidden mdDown>
                    <Avatar
                        src={require("../assets/avatar.jpg")}
                        variant="rounded"
                        sx={{ height: 200, width: 200, margin: "0 auto" }}
                    />
                </Hidden>
                <Typography variant="h6" color={"whitesmoke"}>
                    پوریا اقدم پور
                </Typography>
                <Typography variant="caption" color={"whitesmoke"}>
                    توسعه دهنده اندروید و وب
                </Typography>
                <Divider variant="middle" color={grey[700]} sx={{ my: 1 }} />

                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    value={value}
                    onChange={handleChange}
                >
                    <Tab
                        {...tabProps(0)}
                        sx={{ color: "whitesmoke" }}
                        label="صفحه اصلی"
                        // label={
                        //     <div>
                        //         <Typography variant="subtitle2" color={"white"}>
                        //             <HomeRounded sx={{ verticalAlign: "middle", mr: 1 }} />
                        //             صفحه اصلی
                        //         </Typography>
                        //     </div>
                        // }
                        icon={<HomeRounded />}
                        iconPosition={"start"}
                    />
                    <Tab
                        {...tabProps(1)}
                        label="درباره من"
                        icon={<FaceRounded />}
                        iconPosition="start"
                        sx={{ color: "whitesmoke" }}
                    />
                    <Tab
                        {...tabProps(2)}
                        label="رزومه من"
                        icon={<TextSnippetRounded />}
                        iconPosition="start"
                        sx={{ color: "whitesmoke" }}
                    />
                    <Tab
                        {...tabProps(3)}
                        label="نمونه کارها"
                        icon={<TerminalRounded />}
                        iconPosition="start"
                        sx={{ color: "whitesmoke" }}
                    />
                    <Tab
                        {...tabProps(4)}
                        label="نظرات دانشجویان"
                        icon={<MessageRounded />}
                        iconPosition="start"
                        sx={{ color: "whitesmoke" }}
                    />
                    <Tab
                        {...tabProps(5)}
                        label="ارتباط با من"
                        icon={<ConnectWithoutContactRounded />}
                        iconPosition="start"
                        sx={{ color: "whitesmoke" }}
                    />
                </Tabs>

                <Divider variant="middle" color={grey[700]} sx={{ my: 2 }} />

                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100
                }}>
                    <Typography variant="subtitle2" color="whitesmoke" sx={{ mb: 1 }}>
                        Designed by {" "}
                        <FavoriteRounded sx={{ verticalAlign: 'middle', color: 'tomato', height: 20 }} />
                    </Typography>
                    <Typography variant="caption" color="whitesmoke">
                        Copyright 2022 {" "}
                        <CopyrightRounded sx={{ verticalAlign: 'middle', height: 16 }} />
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default Sidebar;
