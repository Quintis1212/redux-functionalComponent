import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import DoubleText from './DoubleText'

function App({state,increment,decrement}) {
  return (
    <div className="App">
      <h2>{state}</h2>
      <button onClick={()=>{increment()}}>INCREMENT</button>
      <button onClick={()=>{decrement()}}>DECREMENT</button>
      <DoubleText num={12}/>
    </div>
  );
}

function mapStateToProps(state) {
  return { state: state };
} 

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
