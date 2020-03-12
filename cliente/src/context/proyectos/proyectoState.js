import React, { useReducer } from 'react'

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

//Import Types
import { FORMULARIO_PROYECTO } from '../../types';

//state inicial
const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el CRUD

    //mostrar el formulari
    const mostrarFormulario = () => {
        dispatch({
            //EL type que lo va evaluar en los reducers
            type: FORMULARIO_PROYECTO
        })
    }


    //Desde aqui nacen los datos
    return (
        //lo qur pase se pase en todos los componentes
        <proyectoContext.Provider
            //value state inicial
            value={{
                formulario: state.formulario,
                mostrarFormulario
            }}>

            {props.children}
        </proyectoContext.Provider>
    )

}


export default ProyectoState;