import React from 'react';

const FormTarea = () => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">

                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea.."
                    />

                </div>
                <div className="contenedor-input">

                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="agregar tarea"
                    />

                </div>
            </form>
        </div>
    );
}

export default FormTarea;