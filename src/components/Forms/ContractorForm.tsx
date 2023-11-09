import { Avatar, Paper } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../../api'
import Button from '../Buttons/CustomButton'
import FileInput from '../Inputs/FileInput'
import Select from '../Inputs/Select'
import TextInput from '../Inputs/TextInput'
import validationSchema from './Schema/Schema'
import FormSummary from './FormSummary'
import { toast } from 'react-toastify'

const ContractorForm = () => {
    const [data, setData] = useState(null)
    const [editMode, setEditMode] = useState(false)

    const { id } = useParams()

    const navigate = useNavigate()

    let initialValues = {
        name: '',
        surname: '',
        type: 'person',
        id: '',
        avatar: ''
    }

    const options = [
        { value: 'person', label: 'person' },
        { value: 'company', label: 'company' }
    ]

    useEffect(() => {
        id &&
            API('GET', id)
                .then(result => {
                    setData(result)
                })
                .catch(error => {
                    console.error(error)
                })
        id && setEditMode(true)
    }, [])

    return (
        <Paper sx={{ p: 5, mt: 2 }}>
            <Formik
                initialValues={data === null ? initialValues : data}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)

                    console.log(values.avatar)

                    if (editMode) {
                        API('PUT', id, values)
                            .then(() => {
                                // alert(JSON.stringify(values, null, 2))
                                navigate(-1)
                                toast.success('Saved changes!')
                            })
                            .catch(error => {
                                console.error(error)
                                toast.success('Error!')
                            })
                    } else {
                        API('POST', '', values)
                            .then(() => {
                                // alert(JSON.stringify(values, null, 2))
                                // resetForm()
                                navigate(-1)
                                toast.success('Saved!')
                            })
                            .catch(error => {
                                console.error(error)
                                toast.success('Error!')
                            })
                    }
                }}>
                {({ isSubmitting, errors, touched, values, setFieldValue }) => (
                    <Form noValidate>
                        <Field
                            name='name'
                            label='First name:'
                            placeholder='First name'
                            component={TextInput}
                            error={errors.name}
                            touched={touched.name}
                            required
                        />

                        <Field
                            name='surname'
                            label='Last name:'
                            placeholder='Last name'
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
                            placeholder='Identity number'
                            component={TextInput}
                            error={errors.id}
                            touched={touched.id}
                            required
                        />

                        <Field
                            name='avatar'
                            label='Avatar:'
                            btnLabel={
                                data?.avatar ? 'Change avatar' : '+ Add file'
                            }
                            placeholder='Avatar'
                            component={FileInput}
                            error={errors.avatar}
                            touched={touched.avatar}
                            setFieldValue={editMode ? '' : setFieldValue}
                            required
                        />

                        {values?.avatar && !editMode && (
                            <Avatar
                                src={
                                    data
                                        ? values.avatar
                                        : URL.createObjectURL(values.avatar)
                                }
                                alt='Photo'
                                sx={{ width: 100, height: 100 }}
                            />
                        )}

                        {!isSubmitting && (
                            <Button type='submit' sx={{ mt: 2 }}>
                                Submit
                            </Button>
                        )}

                        {/* <FormSummary
                            touched={touched}
                            errors={errors}
                            values={values}
                            isSubmitting={isSubmitting} 
                        /> */}
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}

export default ContractorForm
