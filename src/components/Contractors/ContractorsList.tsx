import ContractorItem from './ContractorItem'

const ContractorList = ({ contractors }) => {
    return (
        <div>
            {contractors.map(contractor => (
                <ContractorItem contractor={contractor} />
            ))}
        </div>
    )
}

export default ContractorList
