
import React from 'react';
import { withAuthorization } from '../Session'; 

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

// garantire accesso a utente autorizzato/registrato
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);

