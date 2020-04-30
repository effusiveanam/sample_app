import queryString from 'query-string';
import React from 'react';
import './App.css';

class UserComponent extends React.Component{
    render(){   
  // url is 'https://www.example.com/user?id=123&type=4';
  const url = this.props.location.search;
  let params = queryString.parse(url);
  console.log(params);
     let state_parameter = params.version; // have to write fetch the value logic
   let decodedData = Buffer.from(state_parameter, 'base64').toString('ascii');
   console.log("Decode value for the version is - " + decodedData);
  // The result will be like below
  // { id: 123, type: 4 }
  // other code
 return ( 
     <div> 
     <div><h4><i><em>I am printing the parameters below - </em></i></h4>
     <h5><i>state = {params.state} </i></h5>
     <h5><i>date = {params.date} </i></h5>
     <h5><i>version = {params.version} </i></h5>
	</div>
	</div>
     
);
}
}
export default UserComponent;