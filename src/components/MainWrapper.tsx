import { Container, Box } from '@mui/material'

type MainWrapperProps = {
    children: any
    maxWitdh?: string
}

const MainWrapper = ({ children, maxWitdh = '1280px' }: MainWrapperProps) => {
    return (
        <Container sx={{ p: 5, pt: 0, width: maxWitdh }}>
            <Box>{children}</Box>
        </Container>
    )
}

export default MainWrapper
