import React from 'react'
import { connect } from 'react-redux';

function DoubleText({state}) {
    return (
        <div>
            <h2>{state}</h2>
        </div>
    )
}



function mapStateToProps(state) {
    return { state: state };
  } 
  

  
  export default connect(mapStateToProps,null)(DoubleText);