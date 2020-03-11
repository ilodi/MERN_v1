import React from 'react'

export default function Tarea({ tarea }) {
    return (

        <li className="tarea sombra">
            <p>
                {tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button type="button" className="completo">
                            Completo
                        </button>
                    )

                    :
                    (
                        <button type="button" className="incompleto">
                            incompleto
                        </button>
                    )

                }

            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                >
                    eliminar
                </button>
            </div>
        </li>

    );
}
