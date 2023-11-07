const Select = ({ name, label, options, field, error, touched, props }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select {...field} {...props}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <p className='error'>{error && touched ? error : null}</p>
        </>
    )
}

export default Select
