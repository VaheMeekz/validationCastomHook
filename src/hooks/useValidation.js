import {useEffect, useState} from "react";
import {validateEmail, validatePassword} from "../";

const useValidation = (value, name, validations) => {

    const [errors, setErrors] = useState({})
    const [isEmpty, setEmpty] = useState(true)
    const [isEmailError, setEmailError] = useState(false)
    const [isPasswordError, setPasswordError] = useState(false)

    const [isValidateForm, setValidateForm] = useState(false)

    useEffect(() => {
        for (let validation in validations){
            switch (validation){
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'isEmail':
                    validateEmail(value) ? setEmailError(false) : setEmailError(true)
                case 'isPassword':
                    validatePassword(value) ? setPasswordError(false) : setPasswordError(true)
                default:
                    return null
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty) {
            setErrors({
                ...errors,
                [name]: `${name} is required`
            })
        } else if (isEmailError) {
            setErrors({
                ...errors,
                [name]: `Email is wrong`
            })
        } else if (isPasswordError) {
            setErrors({
                ...errors,
                [name]: `Must be at least 6 characters`
            })
        } else {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }, [isEmpty, isEmailError, isPasswordError])


    useEffect(() => {
        if (!isEmpty && !isEmailError && !isPasswordError) {
            setValidateForm(true)
        } else {
            setValidateForm(false)
        }
    }, [isEmpty, isEmailError, isPasswordError])

    return {
        errors,
        isValidateForm
    }

}

export default useValidation