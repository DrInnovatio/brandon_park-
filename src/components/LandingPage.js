import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl"

class Landing extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://thumb.mtstarnews.com/06/2016/06/2016061720543832919_1.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML | CSS | Bootstrap | NodeJS | React | Javascript | Java</p>

              <div className="social-links">
              {/* Instgram */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram " aria-hidden="true"/>
              </a>
              {/* LinkedIn */}
              <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin " aria-hidden="true"/>
              </a>
              {/* Github */}
              <a href="http://github.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github " aria-hidden="true"/>
              </a>
              {/* facebook */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-facebook-square " aria-hidden="true"/>
              </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    ) 
  }
}

export default Landing;