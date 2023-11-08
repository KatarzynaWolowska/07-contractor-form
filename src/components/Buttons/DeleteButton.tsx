import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteButton = ({ id, onDelete }) => {
    const handleDelete = () => {
        onDelete && onDelete(id)
    }
    return (
        <IconButton aria-label='delete' onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteButton
