import { Typography } from '@material-ui/core';
import React from 'react';
const RowJson = (props) =>{
    // passing information using props
    const details = (props.location)
    //JSON.stringify is used for JSON file
    return(
    <div>{JSON.stringify(details)}
    <Typography>Done</Typography>
    </div>
    )
}
export default RowJson