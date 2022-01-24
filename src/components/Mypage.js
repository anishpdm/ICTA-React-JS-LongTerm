import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const Mypage = () => {

const [myPage,setMyPage]=useState("Home Page")
var [data,setData]=useState([])
var [isLoading,setLOading]=useState(false)


const setToHomePage=()=>{
    loadDataFromApi()

    setMyPage("Home Page")
}
const setToContactPage=()=>{
    setMyPage("Contact Page")
}

const setToGalleryPage=()=>{
    setMyPage("Gallery Page")
}

const loadDataFromApi=()=>{
    setLOading(isLoading=true)
axios.get("http://localhost:3000/viewall").then(

(response)=>{
console.log(response.data)

setData(data=response.data)

setLOading(isLoading=false)
}

)
    

}


useEffect(()=>{
    loadDataFromApi()
    console.log("page reload")
},[] )

    return (
        <div >

            <Header/>

{/* <Button onClick={setToHomePage}   color='secondary' variant='contained'> Home page  </Button>

<Button onClick={setToGalleryPage}    color='primary' variant='contained'> Gallery page  </Button>

<Button onClick={setToContactPage}  color='secondary' variant='contained'> Contact page  </Button>
 */}

            {/* <Typography variant="h2"> ICT Academy {myPage} </Typography> */}

{isLoading ? <CircularProgress color='secondary'/> :


<Table>
<TableHead> 
    <TableRow>
        <TableCell> Book Name </TableCell>
        <TableCell> Author Name </TableCell>

    </TableRow>

</TableHead>


<TableBody>

{data.map( (value,index)=>{

return <TableRow>
<TableCell> {value.bookname} </TableCell>
<TableCell> {value.author}  </TableCell>
</TableRow>


} ) }



</TableBody>


</Table>

}



         

            
        </div>
    )
}

export default Mypage
