const Select = ({ name, label, options, field, props }) => {
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
        </>
    )
}

export default Select
