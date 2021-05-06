import * as yup from 'yup'

export const registration = yup.object().shape({
    name: yup.string().required('Nick name must be added'),
    email: yup.string()
        .email('Email needs to be forlated like a email'),
    phoneNumber: yup.string(),
    age: yup.number('Phone number needs to be number')

})