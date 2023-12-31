const TextInput = ({
    type,
    name,
    label,
    placeholder,
    field,
    error,
    touched,
    ...props
}) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                name={name}
                type={type || 'text'}
                id={name}
                placeholder={placeholder}
                {...field}
                {...props}
            />
            <p className='error'>{error && touched ? error : null}</p>
        </div>
    )
}

export default TextInput
