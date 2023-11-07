const ContractorItem = ({ contractor }) => {
    return (
        <div key={contractor.id}>
            <img
                src={contractor.avatar}
                alt={`${contractor.name} ${contractor.surname}`}
            />
            <p>
                {contractor.name} {contractor.surname}
            </p>
            <button onClick={() => console.log('edit')}>Edytuj</button>
            <button onClick={() => console.log('delete')}>Usuń</button>
        </div>
    )
}

export default ContractorItem
