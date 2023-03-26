import React, { useState } from 'react'

export const useForm = <T>( initialState:T )  => {
    const [form, setForm] = useState(initialState);

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>|any) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const onResetForm = () => {
        setForm(initialState);
    }

    return {
        ...form,
        form,
        onInputChange,
        onResetForm
    }
}