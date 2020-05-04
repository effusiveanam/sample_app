import queryString from 'query-string';
import React from 'react';
import './App.css';
//import './citiMock.css';

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
     <div><h4 style={{color: "red"}}><i>I am printing the query parameters along with their values below -</i></h4>
     <h5><i>code = {params.code} </i></h5>
     <h5><i>scope = {params.scope} </i></h5>
     <h5><i>id_token = {params.id_token} </i></h5>
     <h5><i>state = {decodedData} </i></h5>
	</div>
	</div>
     
);
}
}
export default UserComponent;