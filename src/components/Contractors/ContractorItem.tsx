import { Avatar } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
import API from '../../api'
import AvatarWithLetters from '../AvatarWithLetters'
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'

const ContractorItem = ({ contractor }) => {
    const { name, surname, id, type, avatar } = contractor

    const handleEdit = id => {
        console.log('edit ' + id)
    }

    const handleDelete = id => {
        API('DELETE', id)
            .then(() => {
                console.log('delete ' + id)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <TableRow
                sx={{
                    '&:last-child td, &:last-child th': {
                        border: 0
                    }
                }}>
                <TableCell align='center'>
                    {avatar.length > 0 ? (
                        <Avatar src={avatar} />
                    ) : (
                        <AvatarWithLetters name={name} surname={surname} />
                    )}
                </TableCell>
                <TableCell component='th' scope='row' sx={{ fontWeight: 700 }}>
                    {name} {surname}
                </TableCell>
                <TableCell align='left'>{id}</TableCell>
                <TableCell align='left'>{type}</TableCell>
                <TableCell align='center'>
                    <Link to={`/contractors/${id}`}>
                        <EditButton id={id} onEdit={handleEdit} />
                    </Link>
                </TableCell>
                <TableCell align='center'>
                    <DeleteButton id={id} onDelete={handleDelete} />
                </TableCell>
            </TableRow>
        </>
    )
}

export default ContractorItem
