const FormSummary = ({ ...props }) => {
    return (
        <div style={{ margin: '3rem 0', padding: '.5rem' }}>
            <strong> Formik </strong>
            <div style={{}}>
                <code>touched:</code> {JSON.stringify(props.touched, null, 2)}
            </div>
            <div>
                <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
            </div>
            <div>
                <code>values:</code> {JSON.stringify(props.values, null, 2)}
            </div>
            <div>
                <code>isSubmitting:</code>{' '}
                {JSON.stringify(props.isSubmitting, null, 2)}
            </div>
        </div>
    )
}

export default FormSummary
