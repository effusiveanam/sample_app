import queryString from 'query-string';
import React from 'react';
import Table from 'react-bootstrap/Table';
/*import { URLSearchParams } from 'url';*/
//import { URLSearchParams } from 'whatwg-url';
import { Buffer } from 'buffer';
import './App.css';
import './citiMock.css';

class UserComponent extends React.Component{
  
    render(){   
  const url = this.props.location.search;
  let pparams = queryString.parse(url);
  //const params = new URLSearchParams(url);
  //console.log(params);
  console.log(pparams);
   var state_parameter = pparams.state; 
   console.log(state_parameter);
   if (state_parameter!== undefined){
   var decodedData = Buffer.from(state_parameter, 'base64').toString('ascii');
   console.log("********* Decode value ********** = " + decodedData);
   }

 return (
  
     <div> 
     <div><h4 className="container6" style={{color: "red"}}>Printing all the query parameters with their values in the tabular format below -</h4>
     <Table striped bordered hover style={{width:"100%"}}>
  <thead>
    <tr>
      <th>Query-Parameter</th>
      <th className ="value">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text">code</td>
      <td>{pparams.code}</td>
    </tr>
    <tr>
    <td className="text">scope</td>
      <td>{pparams.scope}</td>
    </tr>
    <tr>
    <td className="text">id_token</td>
      <td>{pparams.id_token}</td>
    </tr>
        <tr>
    <td className="text">state</td>
      <td>{decodedData}</td>
    </tr>
  </tbody>
</Table>
	</div>
	</div>
     
);
}
}
export default UserComponent;