import {TextField,Box,makeStyles,Button} from '@material-ui/core';
import { useState } from 'react';
import { addProduct } from '../../service/api.js';

const useStyle=makeStyles({
    container:{
        display:'flex',
        alignItems:'center',
       paddingTop:"50px",
        backgroundImage:`url(${'https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_1280.png'})`,
        height:"100vh",
        width:"100vw"
    },
    addproduct:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        '& >*':{
            marginTop:20,
        },
        alignItems:'center',
        paddingBottom:130
    }
})

var productInitial={
    id:'',
    image:'',
    name:'',
    rating:0,
    type:'',
    price:0
}

const ProductAddition =()=>{

        const classes=useStyle();

        const [product,setProduct]=useState(productInitial);

        const onInputChange=(e)=>{
            setProduct({...product,[e.target.name]:e.target.value});
        }
        const addP=async()=>{
            let response=await addProduct(product);
            alert("Product added Successfully");
            if(!response) return;
        }

        return(

        <Box className={classes.container}>    
            <Box className={classes.addproduct}>

                <TextField onChange={(e)=>onInputChange(e)} name='id' label='Id'/>
                <TextField onChange={(e)=>onInputChange(e)} name='image' label='Image'/>
                <TextField onChange={(e)=>onInputChange(e)} name='name' label='Name'/>
                <TextField onChange={(e)=>onInputChange(e)} name='rating' label='rating'/>
                <TextField onChange={(e)=>onInputChange(e)} name='type' label='Type'/>
                <TextField onChange={(e)=>onInputChange(e)} name='price' label='Price'/>

                <Button variant="contained" onClick={()=>addP()} classname={classes.button} style={{background:"#e72e77",color:"#ffffff"}}>ADD PRODUCT</Button>
            </Box>
        </Box>
    )
}

export default ProductAddition;