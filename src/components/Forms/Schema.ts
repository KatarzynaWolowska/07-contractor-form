import * as Yup from 'yup'

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    avatar: Yup.string(),
    surname: Yup.string(),
    id: Yup.string().when('type', {
        is: value => value === 'person',
        then: schema =>
            schema.required('Required').matches(/^\d{11}$/, 'PESEL required'),
        otherwise: schema =>
            schema.required('Required').matches(/^\d{10}$/, 'NIP required')
    }),

    type: Yup.string()
        .oneOf(['person', 'company'], 'Invalid type')
        .required('Required')
})

export default validationSchema
