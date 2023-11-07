import { Field, Form, Formik } from 'formik'
import FileInput from '../Inputs/FileInput'

import Select from '../Inputs/Select'
import TextInput from '../Inputs/TextInput'
import FormSummary from './FormSummary'
import validationSchema from './Schema'

const ContractorForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        type: 'person',
        identityNumber: '',
        photo: null
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
            {({ isSubmitting, errors, touched, values, setFieldValue }) => (
                <Form noValidate>
                    <Field
                        name='firstName'
                        label='First name:'
                        component={TextInput}
                        error={errors.firstName}
                        touched={touched.firstName}
                    />

                    <Field
                        name='lastName'
                        label='Last name:'
                        component={TextInput}
                        error={errors.lastName}
                        touched={touched.lastName}
                    />

                    <Field
                        name='type'
                        label='Choose type:'
                        component={Select}
                        options={options}
                        error={errors.type}
                        touched={touched.type}
                    />

                    <Field
                        name='identityNumber'
                        label='Identity number:'
                        component={TextInput}
                        error={errors.identityNumber}
                        touched={touched.identityNumber}
                    />

                    <Field
                        name='photo'
                        label='Photo:'
                        component={FileInput}
                        error={errors.photo}
                        touched={touched.photo}
                        setFieldValue={setFieldValue}
                    />

                    {values.photo && (
                        <div>
                            <img
                                src={URL.createObjectURL(values.photo)}
                                alt='Podgląd zdjęcia'
                            />
                        </div>
                    )}

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
