import React from 'react';

import Proyecto from './Proyecto';

const ListadoProyectos = () => {


    const proyectos = [
        { nombre: 'Charmander' },
        { nombre: 'Pikachu' },
        { nombre: 'Totodile' }
    ]

    return (
        <ul className="listado-proyectos">

            {
                proyectos.map(proyecto => (
                    <Proyecto
                        proyecto={
                            proyecto
                        }
                    />


                ))


            }
        </ul>
    );
}

export default ListadoProyectos;