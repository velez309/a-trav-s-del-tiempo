import React from 'react';


class Registro extends React.Component {

    render() {
        return (
            <form>
                <label for="nya">Nombres y Apellidos: (Campo Obligatorio)</label>
                <br />
                <input type="text" name="nya" id="nya" readonly="true" />
                <br /><br />
                <label for="Correo Electrónico">Correo Electrónico: (Campo Obligatorio)</label>
                <br />
                <input type="text" name="Correo Electrónico" id="Correo Electrónico" required />
                <br /><br />
                <label for="edad">Edad: (Ejemplo)</label>
                <br />
                <input type="text" name="edad" id="edad" placeholder="Ejemplo: 10 años" />
                <br /><br />
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default Registro;