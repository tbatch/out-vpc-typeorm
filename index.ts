//import {createConnection, Connection} from "typeorm";
import {User} from "./models/User";
var user = new User();

//const connection: Connection = await createConnection();

import {Handler} from 'aws-lambda';

const func: Handler = (event, context, callback) => {
  if (!callback) {
    return;
  }
  var periodicTableJSON = {
       elements:[
           {name:"Hydrogen"},
           {name:"Helium"}
       ]
  };
  user.lastName = "Roosevelt";

    callback(null, {
        "statusCode": "200",
        "headers": {
            "Content-Type": ""
        },
        "body": periodicTableJSON 
    });

};

export default func;