//Import Types
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO } from '../../types';
//cuando se detecta el type tanto en este archivo como 
//en proyectoState es cuando se genera una accion en el case

//El reducer solo cambia el state
//Siempre crea una copia del state
export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            //para consumir el payload
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            //agregae proyecto
            //en proyectos primero se le hace una copia a los proyectos y luego se agrega el nuevo en payload
           //una ves se agregea algo el siguiente paso es esconder el formulario
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false
            }
        default:
            return state;
    }
}