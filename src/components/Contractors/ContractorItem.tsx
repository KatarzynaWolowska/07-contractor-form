import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
import API from '../../api'
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'

const ContractorItem = ({ contractor }) => {
    const handleEdit = id => {
        console.log('edit ' + id)
    }

    const handleDelete = id => {
        console.log('delete ' + id)
    }

    return (
        <>
            <TableRow
                sx={{
                    '&:last-child td, &:last-child th': {
                        border: 0
                    }
                }}>
                <TableCell component='th' scope='row' sx={{ fontWeight: 700 }}>
                    {contractor.name} {contractor.surname}
                </TableCell>
                <TableCell align='left'>{contractor.id}</TableCell>
                <TableCell align='left'>{contractor.type}</TableCell>
                <TableCell align='center'>
                    <Link to={`/contractors/${contractor.id}`}>
                        <EditButton id={contractor.id} onEdit={handleEdit} />
                    </Link>
                </TableCell>
                <TableCell align='center'>
                    <DeleteButton id={contractor.id} onDelete={handleDelete} />
                </TableCell>
            </TableRow>
        </>
    )
}

export default ContractorItem
