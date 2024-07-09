import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import bg02 from "../assets/bg02.jpg";
import { links } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";

function Home() {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const [index, setIndex] = useState(0);

    const strings = [
        " برنامه نویس هستم",
        " طراح سایت هستم",
        " مهندس برق هستم"
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["[[پوریا اقدم پور]]"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false
        });

        /*   const typedInfo = new Typed(infoEl.current, {
              strings: strings,
              startDelay: 1500,
              typeSpeed: 80,
              backSpeed: 50,
              backDelay: 50,
              loop: true,
              showCursor: false
          }); */

        const stringTransition = setInterval(() => {
            setIndex(index => index + 1);
        }, 3000)

        return () => {
            typedName.destroy();
            clearInterval(stringTransition);
            // typedInfo.destroy();
        }
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particleLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);


    return (
        <Box
            sx={{
                backgroundImage: `url(${bg02})`,
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Helmet>
                <title>وبسایت شخصی پوریا اقدم پور</title>
            </Helmet>
            <Particles id="tsparticles" init={particlesInit} loaded={particleLoaded} options={links} />
            <Typography ref={nameEl} variant="h3" sx={{ textAlign: "center", color: "white" }}>
                [[پوریا اقدم پور]]
            </Typography>

            <Box component={"div"} sx={{ display: 'flex' }}>

                <TextTransition springConfig={presets.wobbly}>
                    <Typography
                        // ref={infoEl}
                        variant="h4"
                        sx={{
                            mt: 4,
                            textAlign: "center",
                            color: "orange",
                            // textDecoration: "underline",
                        }}
                    >
                        {/* من یک برنامه نویس هستم */}
                        {
                            strings[index % strings.length]
                        }
                    </Typography>
                </TextTransition>
                <Typography
                    // ref={infoEl}
                    variant="h4"
                    sx={{
                        mt: 4,
                        mr: 1,
                        textAlign: "center",
                        color: "orange",
                        // textDecoration: "underline",
                    }}
                >
                    {"من یک"}
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;
