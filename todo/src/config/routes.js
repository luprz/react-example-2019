// React Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Layout from '../app/layouts/Layout';
import Home from '../app/Home';
import About from '../app/About';
import Page404 from '../app/Page404';

// Books
import Books from '../app/books';
import ShowBook from '../app/books/show';

const AppRoutes = () => 
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" component={ShowBook} />
      <Route component={Page404} />
    </Switch>
  </Layout>


export default AppRoutes;