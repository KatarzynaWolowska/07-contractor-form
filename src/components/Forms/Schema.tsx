import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    identityNumber: Yup.string().required('Required'),
    // identityNumber: Yup.string().when('type', {
    //     is: 'person',
    //     then: Yup.string().matches(/^\d{11}$/, 'Invalid PESEL'),
    //     otherwise: Yup.string().matches(/^\d{10}$/, 'Invalid NIP')
    // }),
    photo: Yup.mixed().required('Wybierz zdjęcie')
})

export default validationSchema
