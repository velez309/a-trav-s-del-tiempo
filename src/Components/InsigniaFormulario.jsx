import React from 'react';

class InsigniaFormulario extends React.Component {


    //EVENTO BOTÓN
    handleClick = (e) => {
        console.log('Botón presionado')
    }

    //EVENTO FORMULARIO

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>
                    Formulario estudiante
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Nombre:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='firstName'
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Apellido:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='lastName'
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Ocupación:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='ocupacion'
                            value={this.props.formValues.ocupacion}

                        />
                    </div>

                    <div className='form-group'>
                        <label>E-mail:</label>
                        <input onChange={this.props.onChange} className='form-control' type='email' name='email'
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Twitter:</label>
                        <input onChange={this.props.onChange} className='form-control' type='text' name='twitter'
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className='btn btn-primary'>
                        GUARDAR
                    </button>
                </form>
            </div>
        )
    }
}
export default InsigniaFormulario;