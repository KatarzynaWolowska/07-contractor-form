import { Typography, Box } from '@mui/material'
import BackButton from '../components/BackButton'
import MainWrapper from '../components/MainWrapper'

const PageNotFound = () => {
    return (
        <MainWrapper>
            <Box sx={{ textAlign: 'center' }}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    mb={2}>
                    <BackButton />
                    <Typography variant='h2' fontSize='1.7rem'>
                        404... Page not found...
                    </Typography>
                </Box>
            </Box>
        </MainWrapper>
    )
}

export default PageNotFound
