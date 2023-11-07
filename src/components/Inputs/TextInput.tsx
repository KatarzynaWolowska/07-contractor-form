const TextInput = ({ type, name, label, placeholder, field, ...props }) => {
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
        </div>
    )
}

export default TextInput
