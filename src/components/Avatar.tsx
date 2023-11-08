const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto'
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
