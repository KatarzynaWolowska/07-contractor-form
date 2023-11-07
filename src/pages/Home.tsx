import ContractorList from '../components/Contractors/ContractorsList'
import MainWrapper from '../components/MainWrapper'
import MOCKUP_DATA from '../mockupData'

const Home = () => {
    // const [data, setData] = useState('')

    // useEffect(() => {
    //     fetch('https://6546492dfe036a2fa955757c.mockapi.io/contrators')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    //     console.log('fetch')
    // }, [])

    return (
        <div className='App'>
            <MainWrapper>
                <ContractorList contractors={MOCKUP_DATA} />
            </MainWrapper>
        </div>
    )
}

export default Home
