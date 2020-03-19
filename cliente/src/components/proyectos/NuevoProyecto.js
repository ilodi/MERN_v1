import React, { useState, useContext, Fragment } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtener el state
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;


    //State para proyectos{}
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });
    const { nombre } = proyecto;
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
        if (
            nombre === ''
        ) {
            return;
        }
        //Agregar al State
        agregarProyecto(proyecto);
        //Reiniciar
        setProyecto({
            nombre: ''
        })
    }

    //mostrar el formulario

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >
                Nuevo Proyecto
        </button>
            {
                formulario ?
                    (

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
                    ) :
                    null
            }
        </Fragment >
    );

}

export default NuevoProyecto;