const FileInput = ({ name, label, placeholder, field, ...props }) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type='file'
                id={name}
                placeholder={placeholder || label}
                {...field}
                {...props}
            />
        </div>
    )
}

export default FileInput
