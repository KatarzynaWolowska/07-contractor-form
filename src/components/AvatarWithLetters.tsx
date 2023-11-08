import { Avatar } from '@mui/material'

const AvatarWithLetters = ({ name, surname, ...props }) => {
    return (
        <Avatar {...props}>
            {name.charAt(0).toUpperCase()}
            {surname.charAt(0).toUpperCase()}
        </Avatar>
    )
}

export default AvatarWithLetters
