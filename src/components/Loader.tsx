import { CircularProgress, Box } from '@mui/material'

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 10,
                width: '100%'
            }}>
            <CircularProgress size={50} />
        </Box>
    )
}

export default Loader
