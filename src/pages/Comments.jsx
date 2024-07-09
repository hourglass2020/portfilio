import { SettingsEthernetRounded } from "@mui/icons-material";
import {
    Card,
    CardContent,
    Chip,
    Divider,
    Typography,
    Slide,
    Avatar,
    Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import { userComments } from "../constants/details";

function Comments() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: 'linear'
    }

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
                                    نظرات دانشجویان من
                                </Typography>
                            }
                            sx={{ p: 3 }}
                            icon={<SettingsEthernetRounded />}
                        />
                    </Divider>
                </Slide>
                <Box
                    component={"div"}
                    sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
                >
                    <Slider {...options}>

                        {userComments.map((comment, index) => (
                            <Box key={index} component="div" sx={{ justifyContent: "center" }}>
                                <Avatar
                                    src={comment.avatar}
                                    variant="rounded"
                                    sx={{ height: 100, width: 100, margin: "0 auto" }}
                                />
                                <Typography
                                    variant="body1"
                                    textAlign={"center"}
                                    color="black"
                                    sx={{ mb: 2 }}
                                >
                                    {comment.fullname}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    textAlign={"center"}
                                    color="black"
                                    sx={{ mb: 2 }}
                                >
                                    {comment.jobTitle}
                                </Typography>
                                <Card
                                    sx={{
                                        backgroundColor: "lightsalmon",
                                        width: 1 / 2,
                                        m: "0 auto",
                                        borderRadius: 5,
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {comment.comment}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Comments;
