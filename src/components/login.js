import React, {useEffect, useState} from 'react';
import Form from "./form";
import Input from "./input";
import Button from "./button";
import useForm from "../hooks/useForm";

const Login = () => {

    const email = useForm(
        '',
        'email',
        {isEmpty: true, isEmail: false}
    )
    const password = useForm(
        '',
        'password',
        {isEmpty: true, isPassword: false}
    )

    useEffect(() => {
        console.log(email, password)
    }, [email, password])

    const onSubmit = (e) => {
        e.preventDefault()
        return null
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
                error={email.isTouched ? email.errors.email : null}
                name='email'
            />
            <Input
                value={password.value}
                onChange={password.onChange}
                onBlur={password.onBlur}
                error={password.isTouched ? password.errors.password : null}
                name='password'
            />

            <Button disabled={!email.isValidateForm || !password.isValidateForm}>
                Login
            </Button>
        </Form>
    );
};

export default Login;