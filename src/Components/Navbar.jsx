import React from 'react';
import './styles/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                <div className='container-fluid'>
                    <a className='Navbar__brand'>
                    <span className='font-weight-light'>
                        I.E  SAC
                    </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;