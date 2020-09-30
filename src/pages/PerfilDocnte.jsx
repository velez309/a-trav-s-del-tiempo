import React from 'react';

class PerfilDocente extends React.Component {

  render() {
    return (
      <form>
        <label for="nya">Nombres y Apellidos:</label>
        <br />
        <input type="text" name="nya" id="nya" />
        <br /><br />
        <label for="email">Email:</label>
        <br />
        <input type="text" name="nya" id="nya" />
        <br /><br />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default PerfilDocente;