import React, { useEffect, useContext } from "react";
//import el context
import proyectoContext from "../../context/proyectos/proyectoContext";

import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //extraer context de los proyecto state
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;
  //useEffect siempre es un arrow function
  useEffect(() => {
    obtenerProyectos();
  }, []);
  //el arroglo basio es para que solo corra una ves

  //algo existe bien sigue
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
