import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    id: Yup.string().required('Required'),
    // id: Yup.string().when('type', {
    //     is: 'person',
    //     then: Yup.string().matches(/^\d{11}$/, 'Invalid PESEL'),
    //     otherwise: Yup.string().matches(/^\d{10}$/, 'Invalid NIP')
    // }),
    avatar: Yup.mixed().required('Wybierz zdjęcie')
})

export default validationSchema
