import {
    HomeRepairServiceRounded,
    SchoolRounded,
    SettingsEthernetRounded,
} from "@mui/icons-material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineDot,
    TimelineConnector,
} from "@mui/lab";
import {
    Card,
    CardContent,
    Chip,
    Divider,
    Typography,
    Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { devEdu } from "../constants/details";

function Resume({ helmetTitle }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{ height: "100vh", bgcolor: "secondary.main", overflowY: "auto" }}
        >
            <Helmet>
                <title>درباره من</title>
            </Helmet>
            <CardContent>
                <Slide
                    direction="down"
                    in={loading}
                    style={{ transitionDelay: loading ? "200ms" : "0ms" }}
                >
                    <Divider
                        textAlign="center"
                        sx={{
                            "&::before, &::after": {
                                borderColor: "white",
                            },
                        }}
                    >
                        <Chip
                            color="info"
                            label={
                                <Typography
                                    variant="body1"
                                    color={"white"}
                                    sx={{ textAlign: "center" }}
                                >
                                    رزومه من
                                </Typography>
                            }
                            sx={{ p: 3 }}
                            icon={<SettingsEthernetRounded />}
                        />
                    </Divider>
                </Slide>
                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <Slide
                            direction="down"
                            in={loading}
                            style={{ transitionDelay: loading ? "200ms" : "0ms" }}
                        >
                            <Divider
                                textAlign="center"
                                sx={{
                                    "&::before, &::after": {
                                        borderColor: "white",
                                    },
                                }}
                            >
                                <Chip
                                    color="success"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color={"white"}
                                            sx={{ textAlign: "center" }}
                                        >
                                            تجربیات من
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                    icon={<SchoolRounded />}
                                />
                            </Divider>
                        </Slide>

                        <Timeline position="right" sx={{ direction: "ltr" }}>
                            {devEdu.map((item, index) => (
                                <Slide
                                    key={index}
                                    direction="up"
                                    in={loading}
                                    style={{
                                        transitionDelay: loading ? `${index + 5}99ms` : "0ms",
                                    }}
                                >
                                    <TimelineItem >
                                        <TimelineSeparator>
                                            <TimelineDot color="success" variant="outlined">
                                                <SchoolRounded color="success" />
                                            </TimelineDot>
                                            {index != 3 ? <TimelineConnector /> : null}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="caption" color={"whitesmoke"}>
                                                {item.year}
                                            </Typography>
                                            <Typography variant="body1" color={"white"}>
                                                {item.cert}
                                            </Typography>
                                            <Typography variant="body2" color={"white"}>
                                                {item.major}
                                            </Typography>
                                            <Typography variant="body2" color={"white"}>
                                                {item.place}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                            ))}
                        </Timeline>
                    </Grid>
                    <Grid xs={6}>
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "white",
                                },
                            }}
                        >
                            <Chip
                                color="error"
                                label={
                                    <Typography
                                        variant="body1"
                                        color={"white"}
                                        sx={{ textAlign: "center" }}
                                    >
                                        تحصیلات من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                                icon={<HomeRepairServiceRounded />}
                            />
                        </Divider>
                        <Timeline position="right" sx={{ direction: "ltr" }}>
                            {devEdu.map((item, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot color="error" variant="outlined">
                                            <HomeRepairServiceRounded color="error" />
                                        </TimelineDot>
                                        {index != 3 ? <TimelineConnector /> : null}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="caption" color={"whitesmoke"}>
                                            {item.year}
                                        </Typography>
                                        <Typography variant="body1" color={"white"}>
                                            {item.cert}
                                        </Typography>
                                        <Typography variant="body2" color={"white"}>
                                            {item.major}
                                        </Typography>
                                        <Typography variant="body2" color={"white"}>
                                            {item.place}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Resume;
