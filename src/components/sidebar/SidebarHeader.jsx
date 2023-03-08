import React from 'react'
import {
    Typography,
    Avatar,
} from "@mui/material";

function SidebarHeader() {
    return (
        <>
            <Avatar
                src={require("../../assets/avatar.jpg")}
                variant="rounded"
                sx={{
                    height: 200, width: 200, margin: "0 auto",
                    display: {
                        lg: 'block',
                        md: 'block',
                        sm: 'none',
                        xs: "none",
                        xl: 'block'
                    }
                }}
            />
            <Typography variant="h6" color={"whitesmoke"}>
                پوریا اقدم پور
            </Typography>
            <Typography variant="caption" color={"whitesmoke"}>
                توسعه دهنده اندروید و وب
            </Typography>
        </>
    )
}

export default SidebarHeader