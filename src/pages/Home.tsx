import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ContractorList from '../components/Contractors/ContractorsList'
import MainWrapper from '../components/MainWrapper'

const Home = () => {
    return (
        <div className='App'>
            <MainWrapper>
                <Box my={4} sx={{ textAlign: 'center' }}>
                    <h1>Contractors</h1>
                </Box>
                <Link to={`/contractors/new`}>
                    <Button>+ Add new</Button>
                </Link>
                <ContractorList />
            </MainWrapper>
        </div>
    )
}

export default Home
