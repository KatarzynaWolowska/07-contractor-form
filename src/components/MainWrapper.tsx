import { Container, Box } from '@mui/material'

const MainWrapper = ({ children }) => {
    return (
        <Container sx={{ p: 4, pt: 0 }}>
            <Box sx={{ textAlign: 'center' }}>
                <h1>Contractors</h1>
            </Box>

            <Box>{children}</Box>
        </Container>
    )
}

export default MainWrapper
