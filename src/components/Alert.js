import React from "react";

function Alert(props) {
  const capitalize = (word)=>{
    if(word){
      return word.toUpperCase().charAt(0)+ word.slice(1);
    }
  }
  return (
    props.alert &&<div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
