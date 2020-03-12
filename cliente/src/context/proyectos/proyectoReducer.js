//Import Types
import { FORMULARIO_PROYECTO,OBTENER_PROYECTOS } from '../../types';
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
            return{
                ...state,
                proyectos:action.payload
            }    
        default:
            return state;
    }
}