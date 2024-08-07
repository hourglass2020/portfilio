import React, { useEffect, useState } from "react";
import {
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Avatar,
    Box,
    Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import avatar from "../assets/avatar.jpg";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import { devSkills } from "../constants/skills";
import { Helmet } from "react-helmet-async";
import { devWorkInfo } from "../constants/details";

function About() {
    const [javascript, setJavascript] = useState(0);
    const [css, setCss] = useState(0);
    const [html, setHtml] = useState(0);
    const { htmlSkill, cssSkill, jsSkill } = devSkills;

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript(prev => {
                const diff = Math.random() * 10;
                return Math.min(prev + diff, 90);
            })
            setHtml(prev => {
                const diff = Math.random() * 10;
                return Math.min(prev + diff, 80);
            })
            setCss(prev => {
                const diff = Math.random() * 10;
                return Math.min(prev + diff, 96);
            })
        }, 500);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <Card sx={{ height: "100vh", bgcolor: "secondary.main", overflowY: 'auto' }}>
            <Helmet>
                <title>درباره من</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} md={8}>
                        <Divider textAlign="right">
                            <Chip
                                color="primary"
                                label={
                                    <Typography
                                        variant="body1"
                                        color={"white"}
                                        sx={{ textAlign: "center" }}
                                    >
                                        برنامه نویس و توسعه دهنده
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                                icon={<CodeRounded />}
                            />
                        </Divider>
                        <Grid container>
                            <Grid sm={4} md={3} sx={{
                                display: { xs: "none", sm: "block" }
                            }}>
                                {
                                    devWorkInfo.map((item, index) => (
                                        <Box key={index} component="div" sx={{ width: 1, mb: 2 }}>
                                            <Tooltip title={item.tooltipTitle} placement="right" arrow>

                                                <Chip icon={item.icon} label={
                                                    <Typography variant="body1" color="whitesmoke">
                                                        {/* <CountUp start={0} end={item.total} duration={2} /> */}
                                                        {item.total}
                                                    </Typography>
                                                } sx={{ p: 2, bgcolor: item.color, width: 1 }} />
                                            </Tooltip>
                                        </Box>
                                    ))
                                }
                            </Grid>
                            <Grid xs={12} sm={8} md={9}>
                                <DevInfo>نام و نام خانوادگی: پوریا اقدم پور</DevInfo>
                                <DevInfo>سن: 22</DevInfo>
                                <DevInfo>شهر: تهران</DevInfo>
                                <DevInfo>pouria.aghdampour@gmail.com :آدرس ایمیل</DevInfo>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} md={4} container justifyContent={"center"}>
                        <Avatar
                            src={avatar}
                            variant={"rounded"}
                            sx={{
                                height: 250,
                                width: 250,
                                display: {
                                    xs: "none",
                                    md: "block",
                                },
                            }}
                        >
                            PA
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>

                        <Divider textAlign="center" sx={{
                            "&::before, &::after": {
                                borderColor: "white"
                            }
                        }}>
                            <Chip
                                color="info"
                                label={
                                    <Typography
                                        variant="body1"
                                        color={"white"}
                                        sx={{ textAlign: "center" }}
                                    >
                                        مهارت های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                                icon={<SelfImprovementRounded />}
                            />
                        </Divider>

                        <Skill name={htmlSkill.name} icon={htmlSkill.icon} value={html} color={htmlSkill.color} />
                        <Skill name={cssSkill.name} icon={cssSkill.icon} value={css} color={cssSkill.color} />
                        <Skill name={jsSkill.name} icon={jsSkill.icon} value={javascript} color={jsSkill.color} />

                    </Grid>


                </Grid>
            </CardContent>
        </Card>
    );
}

export default About;
