import React from 'react';
const RowJson = (props) =>{
    // passing information using props
    const details = (props.location)
    //JSON.stringify is used for JSON file
    return(
    <div>{JSON.stringify(details)}</div>
    )
}
export default RowJson