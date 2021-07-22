import React,{useEffect, useState} from 'react';

import MaterialTable from 'material-table';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Paginacion() {
  

  const [data, setData]=useState([]);

  //la ruta http funciona sin problemas por que no lleva parametros
  /*
  const peticionGet =async() =>{
    await axios.get('https://www.creditos.hoztcreative.com/apiCreditos/paginacion/')
    .then(response=>{
    setData(response.data);
     console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })

  }*/



  
  // la ruta http no funciona con parametros
  const peticionGet =async() =>{
      
    await axios.get('https://www.creditos.hoztcreative.com/apiCreditos/paginacion/index.php?documento=1110498191')
    .then(response=>{
    setData(response.data);
     console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })
}

/*const peticionGet =async() =>{
    // Simple GET request using axios
    await axios.get('https://api.npms.io/v2/search?q=react')
        .then(response => this.setData({ totalReactPackages: response.data }));

}*/

  useEffect(()=>{
    peticionGet();

  },[])

    
  const columnas =[
    {
      title:"RUTA",
      field: "id_ubicacion"
    },
    {
      title:'NOMBRE',
      field:'pais'
    },
    {
      title:"APELLIDO",
      field: "departamento"
    },
    
    
  ];

    return (

        <div className="content-wrapper">
    
   
<MaterialTable
     
columns={columnas}
data={data}
pagination
fixedHeader


options={{
  actionsColumnIndex: -1
}}
options={{
 actionsCellStyle: {
 },

}}
localization={{
    header:{
    actions: 'ACCIONES'
    
  },

  
 
   
}}





/>


    
  </div>
    );
}

export default Paginacion
