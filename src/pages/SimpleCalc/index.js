import React, {Component, Fragment} from 'react'
import Button from '@material-ui/core/Button';

function History(props){
    return(
        <span style={{color: 'grey', float: 'right'}}>
            {props.value} - h
        </span>
    );
}

function Stack(props){
    return(
        <span style={{color: 'grey', float: 'right'}}>
            {props.value} - s
        </span>
    );
}

class SimpleCalc extends Component{
    constructor(props){
        super(props);
        this.state = {
            nextNum : true,
            result : 0,
            calculationStack: [],
            history : ''
        }
    }

    handleInsert(e){
        const i = this.state.calculationStack
        this.setState({calculationStack: i+e});
        this.setState({result: i+e});
    }

    handleClick(code){
        const i = this.state.result
        switch(code) {
            case 1:
              this.setState({result:i+1});
              break;
            case 2:
              this.setState({result:i-1});
              break;
            case 3:
              this.setState({result:i*2});
              break;
            case 4:
              this.setState({result:i/2});
              break;
            case 5:
              this.setState({history:i});
              break;
          }
        
    }

    render(){
        let status = this.state.history;
        let stack = this.state.calculationStack;
        return(
            <div style={{padding: '25px', margin: 0}}>
                <div style={{width: '94%', margin: '5px 3%', padding: '10px', textAlign: 'center', border: '1px solid grey', borderRadius: '3px', background: 'white'}}>
                    <History value={status}/>
                    <br />
                    <Stack value={stack}/>
                    <br />
                    <h1>{this.state.result}</h1>
                </div>
                <span>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('0'))}>0</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('+'))}>+</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('-'))}>-</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('/'))}>/</Button>

                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('7'))}>7</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('8'))}>8</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('9'))}>9</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('*'))}>*</Button>

                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('6'))}>6</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('5'))}>5</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('4'))}>4</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('C'))} color="secondary">CLEAR</Button>

                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('3'))}>3</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('2'))}>2</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('1'))}>1</Button>
                    <Button variant="contained" style={{margin: '5px 3%', width: '19%'}} onClick={() => (this.handleInsert('='))} color='primary'>=</Button>
                </span>
                <br />
                <br />
                <br />
                <Button variant="contained" style={{margin: '5px 3%', width: '44%'}} color='primary' onClick={() => (this.handleClick(1))}>+1</Button>
                <Button variant="contained" style={{margin: '5px 3%', width: '44%'}} color='secondary' onClick={() => (this.handleClick(2))}>-1</Button>
                <Button variant="contained" style={{margin: '5px 3%', width: '44%'}} color='primary' onClick={() => (this.handleClick(3))}>*2</Button>
                <Button variant="contained" style={{margin: '5px 3%', width: '44%'}} color='secondary' onClick={() => (this.handleClick(4))}>/2</Button>
                <Button variant="contained" style={{margin: '5px 3%', width: '94%'}} onClick={() => (this.handleClick(5))}>save to history</Button>
                <Button variant="contained" style={{margin: '5px 3%', width: '94%'}} onClick={() => (this.handleInsert(this.state.result))}>save to stack</Button>
                <center>
                    <h6>test auto deploy</h6>
                </center>
            </div>
        );
    }
}

export default SimpleCalc