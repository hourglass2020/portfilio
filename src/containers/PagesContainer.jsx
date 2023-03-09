import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

function PagesContainer({ children }) {
    return (
        <Grid
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{ backgroundColor: "secondary.main" }}
        >
            {children}
        </Grid>
    )
}

export default PagesContainer