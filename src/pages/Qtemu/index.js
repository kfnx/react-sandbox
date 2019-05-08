import React, {Component} from 'react';
import {Card,SmallCard} from './SmallComponents/card';
import './style.css';

  class Header extends Component {
    render() {
      return (
        <div className='headerWrap'>
            <div className='AppName'>
                Qtemu1
            </div>
            <div className='Menu'>
                menu1 &nbsp;
                menu2 &nbsp;
                menu3 &nbsp;
            </div>
            <div className='login'>
                login
            </div>
        </div>
      );
    }
  }

  const imgStyle = {
    width: '75px',
    height: '75px',
    margin: '10px',
    padding: '10px',    
    background: 'red',
    float: 'left'
  };

  const detailStyle = {
    width: '100%',
    height: '75px',
    margin: '10px',
    padding: '10px',    
    background: 'red',
    float: 'right',
    border: '1px solid black'
  };

  class SplashInfo extends Component {
    render() {
      return (
        <div className='SplashInfo'>
            <div className='image' style={imgStyle}>
                gambar disiny
            </div>
            <div className='info'>
            <br></br>
                info : info<br/>
                info : info<br/>
                info : info<br/>
                info : info<br/>
            </div>
        </div>
      );
    }
  }

  class CardWrapper extends Component {
    render() {
      return (
        <div className='SplashInfo'>
           <SmallCard />
           <SmallCard />
           <SmallCard />
           <SmallCard />
        </div>
      );
    }
  }

  class Member extends Component {
    render() {
      return (
        <div className='Member'>
            
        </div>
      );
    }
  }

  class Footer extends Component {
    render() {
      return (
        <div className='FooterWrap'>
            copyright kafin salim 2019
        </div>
      );
    }
  }

  class App extends Component {
    render() {
        return (
          <div>
              <Header />
              <div class="Content">
                  <SplashInfo />
                  <CardWrapper />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <br/><br/><br/>
              </div>
              <Footer />
          </div>
        );
      }
  }

  export default App