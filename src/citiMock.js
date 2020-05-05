import queryString from 'query-string';
import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import './citiMock.css';

class UserComponent extends React.Component{
    render(){   
  const url = this.props.location.search;
  let params = queryString.parse(url);
  console.log(params);
     let state_parameter = params.state; 
   let decodedData = Buffer.from(state_parameter, 'base64').toString('ascii');
   console.log("********* Decode value ********** = " + decodedData);

 return ( 
     <div> 
     <div><h4 style={{color: "red"}}><i>I am printing the all query parameters with their values in the tabular format -</i></h4>
     <Table striped bordered hover style={{width:"100%"},{align:"center"}}>
  <thead>
    <tr>
      <th>Query-Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>{params.code}</td>
    </tr>
    <tr>
    <td>scope</td>
      <td>{params.scope}</td>
    </tr>
    <tr>
    <td>id_token</td>
      <td>{params.id_token}</td>
    </tr>
        <tr>
    <td>state</td>
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