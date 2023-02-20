import { cloneElement } from 'react';
import { Typography, Button, Toolbar, AppBar, useScrollTrigger } from '@mui/material';

import logo from "../assets/logo.svg";

const Header = () => {
    function ElevationScroll(props) {
        const { children } = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    return (
        <>
            <ElevationScroll>
                <AppBar position='static'>
                    <Toolbar disableGutters>
                        <img src={logo} alt="site logo" style={{ width: '3rem' }} />
                        <Typography variant='h4' gutterBottom sx={{ ml: 1 }} >
                            وبسایت شخصی
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}

export default Header