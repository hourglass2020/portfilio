import { cloneElement } from 'react';
import { Typography, Button, Toolbar, AppBar, useScrollTrigger } from '@mui/material';

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
                <AppBar >
                    <Toolbar>
                        <Typography variant='h3' component={"p"} gutterBottom>
                            وبسایت شخصی
                        </Typography>
                        <Button variant='contained' color='secondary'>کلیک کن</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}

export default Header