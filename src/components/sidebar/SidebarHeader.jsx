import React from "react";
import { Typography, Avatar, Box, IconButton } from "@mui/material";

import avatar from "../../assets/avatar.jpg";
import { RandomReveal } from "react-random-reveal";
import { persianAlphabets } from "../../constants/alphabets";

import { GitHub, Telegram, Instagram, WhatsApp } from "@mui/icons-material";

function SidebarHeader() {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "0 auto",
                    display: {
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                        xl: "block",
                    },
                }}
            />
            <Typography variant="h6" color={"whitesmoke"}>
                <Typography variant="caption" color={"orangered"}>
                    {"{{"}
                </Typography>
                <RandomReveal
                    characters={"پوریا اقدم پور"}
                    isPlaying
                    duration={10}
                    characterSet={persianAlphabets}
                />
                <Typography variant="caption" color={"orangered"}>
                    {"}}"}
                </Typography>
            </Typography>
            <Typography variant="caption" color={"whitesmoke"}>
                توسعه دهنده اندروید و وب
            </Typography>
            <Box component={"div"} sx={{ m: "0 auto", textAlign: "center" }}>
                <IconButton arria-label="Github" color="primary">
                    <a
                        href="#"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <GitHub />
                    </a>
                </IconButton>
            </Box>
        </>
    );
}

export default SidebarHeader;
