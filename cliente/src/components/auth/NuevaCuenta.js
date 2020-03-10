import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {
    //State para ubucuar sesiòn
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })
    //extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            //crea una copia
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    //iniciar
    const onSubmit = e => {
        e.preventDefault();
        //Validar campos

        //Pasar Action a reducer
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>
                <form
                    onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre Usuario</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder=">Confirmar password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Regístrate" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    ya tienes cuenta
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;