import axios from "axios";
import React from "react";
//import {ImportToSheet} from "../../backend/server";
const SentForm = ({name},{phone}) =>  {
    console.log("SentForm(name: ",name,",phone: ",phone,")");
    const state ={
        name: name,
        phone:phone,
    }
    const submitHandler = () => {
        //e.preventDefault();
        console.log(state);  
        axios.post('https://sheet.best/api/sheets/b1dd0755-1c9d-4174-a937-baec646350c9', state)
        .then(response => {
          console.log(response);
        })
      }
    submitHandler();
}

export default SentForm;