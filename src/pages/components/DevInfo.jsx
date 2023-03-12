import { KeyboardArrowLeftRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

function DevInfo({ children }) {
    return (
        <Typography variant='body1' color="white" textAlign={"left"} sx={{ mt: 2 }}>
            {children}
            <KeyboardArrowLeftRounded sx={{ verticalAlign: 'bottom' }} />
        </Typography>
    )
}

export default DevInfo