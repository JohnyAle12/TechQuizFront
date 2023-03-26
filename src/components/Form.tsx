import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { saveUser } from '../services/userService';
import { NavBar } from './NavBar'
import { useEffect } from 'react';
import { getCountries } from '../services/countryService';
import { Country } from '../interfaces/types';

export const Form = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState<Country[]>([]);
    const [saveUserFailed, setSaveUserFailed] = useState<boolean>(false);

    const {
        category,
        name,
        lastname,
        identification,
        email,
        country,
        address,
        mobile,
        onInputChange
    } = useForm({
        category: 0,
        name: '',
        lastname: '',
        identification: 123,
        email: '',
        country: 'Colombia',
        address: '',
        mobile: ''
    });

    const onFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        await saveUser({
            category_id: category,
            name,
            lastname,
            identification,
            email,
            country,
            address,
            mobile,
        })
            .catch(() => setSaveUserFailed(true))
        
        if(!saveUserFailed) return;

        navigate('/');
    }

    const setCountriesList = async() => {
        const countries = await getCountries();
        setCountries(countries);
    };

    useEffect(() => {
        setCountriesList();
    }, [])
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <NavBar />
                </div>
                <div className="col-12">
                    <h3 className='mt-4 mb-4'>Crear usuarios</h3>

                    { saveUserFailed && (
                        <div className="alert alert-danger" role="alert">
                            Ocurrio un error al guardar el usuario!
                        </div>
                    )}

                    <div className="row">
                        <form className="col-4" onSubmit={onFormSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Categoría:</label>
                                <select name="category" className="form-select" onChange={onInputChange}>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre:</label>
                                <input type="text" name="name" className="form-control" value={name} onChange={onInputChange} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Apellido:</label>
                                <input type="text" name="lastname" className="form-control" value={lastname} onChange={onInputChange} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Identificación:</label>
                                <input type="number" name="identification" className="form-control" value={identification} onChange={onInputChange} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico:</label>
                                <input type="email" name="email" className="form-control" value={email} onChange={onInputChange} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">País:</label>
                                <select name="country" className="form-select" onChange={onInputChange}>
                                    { countries.map((country) => (
                                        <option value={ country.commonName }>{ country.commonName }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Dirección:</label>
                                <input type="text" name="address" className="form-control" value={address} onChange={onInputChange} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Celular:</label>
                                <input type="text" name="mobile" className="form-control" value={mobile} onChange={onInputChange} required/>
                            </div>
                            <button className="btn btn-primary" type="submit">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
