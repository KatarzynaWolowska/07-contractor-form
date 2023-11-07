// import { useEffect, useState } from 'react'
import ContractorForm from './components/Forms/ContractorForm'

function App() {
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
        <>
            {/* {data} */}
            <ContractorForm />
        </>
    )
}

export default App
