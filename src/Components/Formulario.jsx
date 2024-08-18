import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = (props) => {
    const [tarea, setTarea] = useState({
        title: '',
        descripcion: '',
        select: 'Pendiente'
    });


    const enviarFormulario = (e) => {
        e.preventDefault();
    }

    // const textTarea = (str) => {
    //     console.log(str);
    //     setTarea(str);
    // }

    return (
        <>
            <form onSubmit={enviarFormulario}>
                <input type='text' className='form-control mb-2' placeholder='Ingrese tarea' value={ tarea.title } onChange={ (e) => setTarea( {...tarea, title: e.target.value} ) } />

                <textarea className='form-control mb-2' placeholder='Ingrese descripcion' value={ tarea.descripcion } onChange={ (e) => setTarea({ ...tarea, descripcion: e.target.value}) } ></textarea>

                <select className='form-control mb-2'  value={ tarea.select } onChange={ (e) => setTarea({ ...tarea, select: e.target.value}) } >
                    <option>Pendiente</option>
                    <option>Completado</option>
                </select>
                <button className='btn btn-primary mx-2'>Enviar</button>
                <input className='btn btn-primary' type='reset' value='Limpiar Campos' />
            </form>        
        </>
    )
}

Formulario.propTypes = {

}

export default Formulario
