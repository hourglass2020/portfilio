import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

function ContentContainer({ children }) {
    return (
        <Grid
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{ backgroundColor: "secondary.main" }}
        >
            <Typography textAlign={"center"} variant="h5">
                Main Content
            </Typography>
            {children}
        </Grid>
    )
}

export default ContentContainer