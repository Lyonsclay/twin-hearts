import React, { Component } from 'react';

const Layout = ({ children }) => (
  <div id="outer-container">
    <ResponsiveNav />
    <main id="page-wrap">
      {children}
    </main>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/shows" component={Shows} />
        </Route>
      </Router>
    );
  }
}
