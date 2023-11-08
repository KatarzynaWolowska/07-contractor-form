import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../api'
import ContractorList from '../components/Contractors/ContractorsList'
import MainWrapper from '../components/MainWrapper'

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        API('GET', '')
            .then(result => {
                setData(result)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className='App'>
            <MainWrapper>
                <Box my={4} sx={{ textAlign: 'center' }}>
                    <h1>Contractors</h1>
                </Box>
                <Link to={`/contractors/new`}>
                    <Button>+ Add new</Button>
                </Link>
                <ContractorList contractors={data} />
            </MainWrapper>
        </div>
    )
}

export default Home
