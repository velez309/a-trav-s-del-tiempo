import React from 'react';
import '../Components/styles/InsigniaNueva.css'
import Navbar from '../Components/Navbar.jsx'
import LogoHeader from '../Components/imagenes/angeles.png'
import Insignia from '../Components/Insignia.jsx'
import InsigniaFormulario from '../Components/InsigniaFormulario';

class InsigniaNueva extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            ocupacion: '',
            email: '',
            twitter: '',
        }
    }

    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        this.setState({
            form: nextForm,
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='header'>
                    <img className='img-fluid' src={LogoHeader} alt='Logo' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Insignia
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                ocupacion={this.state.form.ocupacion}
                                email={this.state.form.email}
                                twitter={this.state.form.twitter}
                                URLAvatar='https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png' />
                        </div>

                        <div className='col-6'>
                            <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default InsigniaNueva;