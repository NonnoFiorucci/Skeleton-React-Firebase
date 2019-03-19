import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SingOut';

import * as ROUTES from '../../costants/routes';
const Navigation =({authUser}) => (
<div>{authUser ? <NavigationAuth /> : <NavigationAuth />}</div>
)

const NavigationAuth = () => (
  
   <ul>
   
     
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>

   </ul>
  



);


const NavigationNonAuth = () => (
  <ul>
    <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>

  </ul>
)

export default Navigation;
