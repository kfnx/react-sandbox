import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Gridd from './grid';


function Xbutton(props){
    return (
        <Button variant="contained" style={{margin: '5px auto'}} color={props.color}>{props.value}</Button>
        );
}

function CalcResult(props){
    return(
        <div style={{
            margin: '10px auto',
            padding: '5px 10px',
            border: '1px solid grey',
            borderRadius: '3px',
            width: '100%',
            fontSize: '2em',
            textAlign: 'right'
        }}>
            {props.value}
        </div>
    );
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result : 'nullsss'
        }
    }

    handleCalculate(){
        this.setState({
            result: 'calculated!'
        });
    }

    renderResult(){
        return(
            <CalcResult value={this.state.result}/>
        );

    }
    
    render(){
        let result = this.state.result
        return (
            <div style={{textAlign: 'center', fontFamily: 'Roboto', padding: '25px'}}>
                <CssBaseline />
                <h3>Simple Calculator</h3>
                <Grid container>
                    {/* ROW 1 */}
                    <Grid item xs={12} style={{padding: '0px 7%'}}>
                        {this.renderResult()}
                        {/* <CalcResult value={result}/> */}
                    </Grid>
                    {/* ROW 2 */}
                    <Grid item xs={3}>
                        <Xbutton value='('/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value=')'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='CE'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='/'/>
                    </Grid>
                    {/* ROW 3 */}
                    <Grid item xs={3}>
                        <Xbutton value='7'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='8'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='9'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='*'/>
                    </Grid>
                    {/* ROW 4 */}
                    <Grid item xs={3}>
                        <Xbutton value='4'/>
                    </Grid>                    
                    <Grid item xs={3}>
                        <Xbutton value='5'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='6'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='-'/>
                    </Grid>
                    {/* ROW 5 */}
                    <Grid item xs={3}>
                        <Xbutton value='1'/>
                    </Grid>                    
                    <Grid item xs={3}>
                        <Xbutton value='2'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='3'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='+'/>
                    </Grid>
                    {/* ROW 6 */}
                    <Grid item xs={3}>
                        <Xbutton value='0'/>
                    </Grid>                    
                    <Grid item xs={3}>
                        <Xbutton value='.'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='DEL' color="secondary"/>
                    </Grid>
                    <Grid item xs={3}>
                        <Xbutton value='=' color="primary" onClick={()=>this.setState({result: 'calculated!'})}/>
                    </Grid>
                </Grid>
                <h6> simple calculator by kafin salim </h6>
            </div>
        );
    }
}

export default Calculator
