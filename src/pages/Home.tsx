import { useEffect, useState } from 'react'
import API from '../api'
import ContractorList from '../components/Contractors/ContractorsList'
import MainWrapper from '../components/MainWrapper'

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        API('GET', 'contractors')
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
                <ContractorList contractors={data} />
            </MainWrapper>
        </div>
    )
}

export default Home
