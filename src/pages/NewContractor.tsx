import BackButton from '../components/Buttons/BackButton'
import ContractorForm from '../components/Forms/ContractorForm'
import MainWrapper from '../components/MainWrapper'

const NewContractor = () => {
    return (
        <MainWrapper maxWitdh='500px'>
            <BackButton />
            <ContractorForm />
        </MainWrapper>
    )
}

export default NewContractor
