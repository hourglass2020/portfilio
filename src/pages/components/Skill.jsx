import { Divider, Chip, Box, Typography, LinearProgress, Badge } from "@mui/material";

function Skill({ icon, color, name, value }) {
    return (
        <>
            <Divider
                textAlign="right"
                sx={{
                    "&::before, &::after": {
                        borderColor: `${color}.main`,
                    },
                    mt: 3
                }}
            >
                <Chip
                    color="primary"
                    icon={icon}
                    label={name}
                    sx={{ color: "#000", p: 3 }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color={"lightblue"}>
                        <Badge variant="standard" color={color} badgeContent={`${value} %`} sx={{ width: 40 }} />
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{ height: 10, borderRadius: 2 }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default Skill;
