import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import EditarCategoria from './pages/cadastro/Categoria/EditCategoria';
import Pagina404 from './pages/Pagina404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/cadastro/categorias/:id" component={EditarCategoria} />
      <Route path="*" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
