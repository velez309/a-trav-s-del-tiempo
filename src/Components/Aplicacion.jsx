import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InsigniaPages from '../pages/InsigniaPages';
import InsigniaNueva from '../pages/InsigniaNueva';
import Layout from "./Layout";
import RegistroPages from '../pages/RegistroPages';
import Registro from '../pages/Registro';
import PerfilDocnte from '../pages/PerfilDocnte';
import PerfilPagesDocente from '../pages/PerfilPagesDocente';

function Aplicacion() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={InsigniaPages} />
          <Route exact path='/insignia' component={InsigniaNueva} />
          <Route exact path='/registropages' component={RegistroPages} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/perfildocente' component={PerfilDocnte} />
          <Route exact path='/perfilpagesdocente' component={PerfilPagesDocente} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default Aplicacion;