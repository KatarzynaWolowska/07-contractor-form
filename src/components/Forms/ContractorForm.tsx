import { ErrorMessage, Field, Form, Formik } from 'formik'
import FileInput from '../Inputs/FileInput'

import Select from '../Inputs/Select'
import TextInput from '../Inputs/TextInput'
import FormSummary from './FormSummary'
import validationSchema from './Schema'

const ContractorForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        type: '',
        identityNumber: '',
        photo: ''
    }

    const options = [
        { value: 'person', label: 'person' },
        { value: 'company', label: 'company' }
    ]

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false)
                alert(JSON.stringify(values, null, 2))
            }}>
            {({ isSubmitting, errors, touched, values }) => (
                <Form noValidate>
                    <Field
                        name='firstName'
                        label='First name:'
                        component={TextInput}
                    />
                    <ErrorMessage component='div' name='firstName' />

                    <Field
                        name='lastName'
                        label='Last name:'
                        component={TextInput}
                    />
                    <ErrorMessage name='lastName' />

                    <Field
                        name='type'
                        label='Choose type:'
                        component={Select}
                        options={options}
                    />
                    <ErrorMessage name='type' />

                    <Field
                        name='identityNumber'
                        label='Identity number:'
                        component={TextInput}
                    />
                    <ErrorMessage name='identityNumber' />

                    {/* <Field name='photo' label='Photo:' component={FileInput} />
                    <ErrorMessage name='photo' /> */}

                    {!isSubmitting && <button type='submit'>Submit</button>}

                    <FormSummary
                        touched={touched}
                        errors={errors}
                        values={values}
                        isSubmitting={isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    )
}

export default ContractorForm
