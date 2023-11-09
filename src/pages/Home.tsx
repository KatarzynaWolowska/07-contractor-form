import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ContractorList from '../components/Contractors/ContractorsList'
import MainWrapper from '../components/MainWrapper'
import 'react-toastify/dist/ReactToastify.css'

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
                <ToastContainer
                    position='bottom-center'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    pauseOnHover
                    theme='light'
                />
            </MainWrapper>
        </div>
    )
}

export default Home
