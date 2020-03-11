import React, { useState } from 'react';

const NuevoProyecto = () => {

    //State para proyectos{}
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    };
    //enviar
    const onSubmit = e => {
        e.preventDefaul();
        //Validar

        //Agregar al State

        //Reiniciar
    }

    return (
        <>
            <button type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
        </button>
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={proyecto.name}
                    onChange={onChangeProyecto}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="enviar"
                />
            </form>
        </>
    );

}

export default NuevoProyecto;