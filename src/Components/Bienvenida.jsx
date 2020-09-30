import React from 'react';
import './styles/Bienvenida.jsx'

class Bienvenida extends React.Component {
    render() {
        return (
            <div className='Bienvenida'>
                <div className='container-fluid'>
                    <a className='Bienvenida__brand'>
                        <span className='font-weight-light'>
                            Beinvenidos a Jugando y Aprendiendo.

                            ¡Binvenidos a este hermoso camino de aprendizaje!
                            ¡Empezemos!

                            Desbes elegir tu: Profesor o Estudiante.
                    </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Bienvenida;
