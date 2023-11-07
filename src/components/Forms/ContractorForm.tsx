import { Field, Form, Formik } from 'formik'
import Avatar from '../Avatar'
import FileInput from '../Inputs/FileInput'

import Select from '../Inputs/Select'
import TextInput from '../Inputs/TextInput'
import FormSummary from './FormSummary'
import validationSchema from './Schema'

const ContractorForm = () => {
    const initialValues = {
        name: '',
        surname: '',
        type: 'person',
        id: '',
        avatar: null
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
                        name='name'
                        label='First name:'
                        component={TextInput}
                        error={errors.name}
                        touched={touched.name}
                        required
                    />

                    <Field
                        name='surname'
                        label='Last name:'
                        component={TextInput}
                        error={errors.surname}
                        touched={touched.surname}
                        required
                    />

                    <Field
                        name='type'
                        label='Choose type:'
                        component={Select}
                        options={options}
                        error={errors.type}
                        touched={touched.type}
                        required
                    />

                    <Field
                        name='id'
                        label='Identity number:'
                        component={TextInput}
                        error={errors.id}
                        touched={touched.id}
                        required
                    />

                    <Field
                        name='avatar'
                        label='Avatar:'
                        component={FileInput}
                        error={errors.avatar}
                        touched={touched.avatar}
                        setFieldValue={setFieldValue}
                        required
                    />

                    {values.avatar && (
                        <Avatar
                            src={URL.createObjectURL(values.avatar)}
                            alt='Podgląd zdjęcia'
                        />
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
