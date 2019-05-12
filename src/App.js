import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Portofolio } from './components/Portofolio';
import { Kontak } from './components/Kontak';
import { Layout } from './components/Layout';
import { Navigationbar } from './components/Navigationbar';
import { Jumbotron } from './components/Jumbotron';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigationbar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/portofolio" component={Portofolio} />
              <Route path="/kontak" component={Kontak} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment >
    );
  }
}

export default App;
