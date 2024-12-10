import React from 'react'

export default function Alert(props) {
    const capitalize = (words) => {
        let cap = words.toLowerCase();
        return cap.charAt(0).toUpperCase() + cap.slice(1);
    };
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  </div>
  )
}
