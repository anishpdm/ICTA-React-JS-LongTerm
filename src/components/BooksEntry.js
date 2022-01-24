import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Header from './Header';
import MyForm from './Reading';

const BooksEntry = () => {

    var [myValue,setmyValue]=MyForm({bookname:"",author:""})

const readValues=()=>{

    console.log(myValue)
axios.post("http://localhost:3000/read",myValue).then(
    (response)=>{
        console.log(response.data)
    }

)


}

  return <div>

      <Header />

<Grid container style={{padding:60}}>

<Grid item xs={12} sm={12} md={12} >

<TextField onChange={setmyValue} value={myValue.bookName} name="bookname" margin='normal' variant='outlined' fullWidth label='Enter book name' />

<TextField onChange={setmyValue} value={myValue.authorName} name="author" margin='normal' variant='outlined' fullWidth label='Enter author name' />

<Button onClick={readValues} variant='contained' fullWidth color='primary'> SUBMIT </Button>

</Grid>




</Grid>

  </div>;
};

export default BooksEntry;
