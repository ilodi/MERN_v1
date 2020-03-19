import React from 'react'

import Tarea from './Tarea';
export default function ListadoTareas() {
    const tareasProyecto = [
        { nombre: 'Pokebol', estado: true },
        { nombre: 'Pokebol Maste', estado: true },
        { nombre: 'Pokebol Ultra', estado: false },
        { nombre: 'Pokebol Legin', estado: false },
    ]
    return (
        <>
            <h2>Proyecto</h2>
            <ul>
                {
                    tareasProyecto.length === 0
                        ? (
                            <li className="tarea"><p>No hay tareas</p></li>
                        )

                        : tareasProyecto.map(tarea => (
                            <Tarea
                            key={tarea.nombre}
                                tarea={tarea}
                            />
                        ))
                }
                <button
                    type="button"
                    className="btn btn-eliminar"
                >
                    Eliminar proyecto &times;
            </button>
            </ul>
        </>
    )
}

