import * as Yup from 'yup'
import validatePesel from './validate'

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    avatar: Yup.string().optional(),
    surname: Yup.string(),
    id: Yup.string().when('type', {
        is: value => value === 'person',
        then: schema =>
            schema
                .matches(/^[0-9]{11}$/, 'PESEL must be exactly 11 digits')
                .test('pesel', 'Invalid PESEL', value => validatePesel(value)),
        otherwise: schema =>
            schema.required('Required').matches(/^\d{10}$/, 'NIP required')
    }),

    type: Yup.string()
        .oneOf(['person', 'company'], 'Invalid type')
        .required('Required')
})

export default validationSchema
