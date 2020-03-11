import React,{useReducer} from 'react'

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

//state inicial
const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el CRUD



    //Desde aqui nacen los datos
    return (
        //lo qur pase se pase en todos los componentes
        <proyectoContext.Provider
            //value state inicial
            value={{
                formulario: state.formulario
            }}>

            {props.children}
        </proyectoContext.Provider>
    )

}


export default ProyectoState;