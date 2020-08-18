import React from 'react';
import Main from "./components/Main";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div style={ { height: '100vh', position: 'relative' } }>
        <Layout fixedHeader>

          <Header
            className="header-color"
            title={ <Link to="/brandon_park"
              style={ { textDecoration: "none", color: "#4f3961" } } >
              Jaewoo Brandon Park</Link> } scroll>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>

          <Drawer
            className="drawer"
            title={ <Link to="/brandon_park" style={ { textDecoration: "none", color: "#4f3961" } } >
              My Website</Link> }>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;