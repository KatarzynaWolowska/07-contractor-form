const ContractorList = ({ contractors, onEdit, onDelete }) => {
    return (
        <div>
            {contractors.map(contractor => (
                <div key={contractor.id}>
                    <img
                        src={contractor.avatar}
                        alt={`${contractor.name} ${contractor.surname}`}
                    />
                    <p>
                        {contractor.name} {contractor.surname}
                    </p>
                    <button onClick={() => onEdit(contractor)}>Edytuj</button>
                    <button onClick={() => onDelete(contractor.id)}>
                        Usuń
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ContractorList
