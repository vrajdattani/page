import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {postAction} from '../Actions/postAction';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
const FetchPost = () =>{
    const[id,setId]=useState(0);
    const dispatch = useDispatch();
    //useEffect is used for dispatch
    useEffect(()=>{
        //setTimeout is used for increment of  id
        setTimeout(()=>{
            setId(id+1);
            dispatch(postAction(id));
        },10000)
    },[id,dispatch])
    //useSelector is used for getting data
    const details = useSelector((state)=>{
        return state.data
    })
    //Columns name for fetching data from table
    const columns = [{
        Header:'Title',
        accessor:'title',
        style:{backgroundColor:'darkred'}
    },
    {
        Header:'Created_at',
        accessor:'created_at',
        style:{backgroundColor:'lightgreen'}
    },
    {
        Header:'Url',
        accessor:'url',
        style:{backgroundColor:'lightblue'}
    },
    {
        Header:'Author',
        accessor:'author',
        style:{backgroundColor:'yellow'}
    },
    {
        Header:'Action',
        Cell:props =>{
            return (
                <Link to={{pathname:'RowJson',state:props.original}}>
                <Button type='submit' onClick={()=>console.log(props)} variant='contained' color='primary'>Click Me</Button>
                </Link>
                )
        }
    }
    ]
    //ReactTable is combination of columns and row
    return(<div>
        
        <ReactTable columns={columns} data={details}/>
    </div>)
}
export default FetchPost