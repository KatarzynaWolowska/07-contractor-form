const FileInput = ({
    name,
    label,
    btnLabel = '+ Add file',
    placeholder,
    error,
    touched,
    field,
    setFieldValue,
    ...props
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <label className='custom-file-upload'>
                {btnLabel}
                <input
                    type='file'
                    accept='image/png, image/jpeg, image/jpg, image/gif'
                    id={name}
                    name={name}
                    placeholder={placeholder || label}
                    {...props}
                    onChange={e => {
                        if (e.currentTarget.files) {
                            setFieldValue('avatar', e.currentTarget.files[0])
                        }
                    }}
                />
                <p className='error'>{error && touched ? error : null}</p>
            </label>
        </>
    )
}

export default FileInput
