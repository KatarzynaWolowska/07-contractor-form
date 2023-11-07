const FileInput = ({
    name,
    label,
    placeholder,
    error,
    touched,
    field,
    setFieldValue,
    ...props
}) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type='file'
                accept='image/png, image/jpeg, image/jpg, image/gif'
                id={name}
                name={name}
                placeholder={placeholder || label}
                {...props}
                onChange={e => {
                    if (e.currentTarget.files) {
                        setFieldValue('photo', e.currentTarget.files[0])
                    }
                }}
            />
            <p className='error'>{error && touched ? error : null}</p>
        </div>
    )
}

export default FileInput
