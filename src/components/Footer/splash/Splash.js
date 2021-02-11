import React, { Component } from 'react'


import { Redirect } from "react-router-dom";
import './Splash.css'

function AnimatedSplash() {
    return (
        <div log-wrapper>
            <div className="screen" >
        {/* <LoaderLogo id="logo" /> */}
        <img src = 'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80'></img>
      </div>
        </div>
    )
}

class Splash extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
      };
    }
  
    componentDidMount() {
      this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
    }
  
    componentWillMount() {
      clearTimeout(this.id);
    }
  
    render() {
      return this.state.redirect ? (
        <Redirect to="/home" />
      ) : (
        <AnimatedSplash  />
      );
    }
  }

export default Splash
