import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const EditButton = ({ id, onEdit }) => {
    const handleEdit = () => {
        onEdit && onEdit(id)
    }

    return (
        <IconButton aria-label='delete' onClick={handleEdit}>
            <EditIcon />
        </IconButton>
    )
}

export default EditButton
