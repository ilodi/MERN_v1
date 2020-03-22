import React, { useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

//Import Types
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO
} from "../../types";

//state inicial
const ProyectoState = props => {
  //dispatch de proyectos
  const proyectos = [
    { id: 1, nombre: "Charmander" },
    { id: 2, nombre: "Pikachu" },
    { id: 3, nombre: "Totodile" }
  ];

  const initialState = {
    formulario: false,
    proyectos: []
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para el CRUD

  //mostrar el formulari
  const mostrarFormulario = () => {
    dispatch({
      //EL type que lo va evaluar en los reducers
      type: FORMULARIO_PROYECTO
    });
  };

  //obtener oriyectos
  const obtenerProyectos = () => {
    dispatch({
      //lo que tu funcion tome como parametro sera el payload
      type: OBTENER_PROYECTOS,
      payload: proyectos
    });
  };

  //Agregar nuevo proyecto
  const agregarProyecto = proyecto => {
    proyecto.id = uuidv4();
    //Proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    });
  };

  //Desde aqui nacen los datos
  return (
    //lo qur pase se pase en todos los componentes
    <proyectoContext.Provider
      //value state inicial
      //Recuerda que arriba es bueno poner los state y las funciones abajo
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
