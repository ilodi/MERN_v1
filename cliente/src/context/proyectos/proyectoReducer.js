//Import Types
import { FORMULARIO_PROYECTO } from '../../types';
//cuando se detecta el type tanto en este archivo como 
//en proyectoState es cuando se genera una accion en el case

//El reducer solo cambia el state
export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        default:
            return state;
    }
}