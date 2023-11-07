const avatarStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden'
}

const imgStyle = {
    width: '100%',
    height: '100%',
    object: 'cover'
}

const Avatar = ({ src, alt }) => {
    return (
        <div style={avatarStyle}>
            <img src={src} alt={alt} style={imgStyle} />
        </div>
    )
}

export default Avatar
