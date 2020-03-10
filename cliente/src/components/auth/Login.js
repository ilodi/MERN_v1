import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    //State oara ubucuar sesiòn
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })
    //extraer de usuario
    const { email, password } = usuario;

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
                <h1>Inicia sesiòn</h1>
                <form
                    onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu nombre"
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesiòn" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;