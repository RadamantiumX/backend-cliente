import React from 'react';
import MyRoutes from '../myRoutes/myRoutes';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navbr from "../components/Inicio/navbr"
function userMain() {
  return (
    <>
    <Navbr/>
      <MyRoutes/>
    </>
  )
}

export default userMain
