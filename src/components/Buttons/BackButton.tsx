import { useNavigate } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <Box m={1}>
            <IconButton aria-label='Go back' onClick={() => navigate(-1)}>
                <ArrowBackRoundedIcon fontSize='large' />
            </IconButton>
        </Box>
    )
}

export default BackButton
