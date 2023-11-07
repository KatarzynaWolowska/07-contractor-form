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
                type={type}
                id={name}
                placeholder={placeholder || label}
                {...field}
                {...props}
            />
            <p className='error'>{error && touched ? error : null}</p>
        </div>
    )
}

export default TextInput
