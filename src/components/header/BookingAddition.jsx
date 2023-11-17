import {TextField,Box,makeStyles,Button} from '@material-ui/core';
import { useState } from 'react';
import { addVenue,addPhotographer,addDecorator } from '../../service/api.js';

const useStyle=makeStyles({
    container:{
        display:'flex',
        alignItems:'center',
        backgroundImage:`url(${'https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_1280.png'})`,
        height:'100vh',
        width:'100vw',
        overflow:"hidden"
    },
    addbooking:{
        display:'flex',
        flex:1,
        marginTop:"100px",
        minHeight:"100%",
        minWidth:"100%",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        '& >*':{
            marginTop:20,
        },
        alignItems:'center',
        paddingBottom:80
    }
})

var bookingInitial={
    id:'',
    category:'',
    image:'',
    name:'',
    rating:0,
    location:'',
    fee:0
}

const BookingAddition =()=>{

        const classes=useStyle();

        const [booking,setBooking]=useState(bookingInitial);

        const onInputChange=(e)=>{
            setBooking({...booking,[e.target.name]:e.target.value});
        }
        const addB=async()=>{
            if(booking.category==="venue"){
                let response=await addVenue(booking);
                
                alert("Venue added Successfully");
                if(!response) return;}
        
            if(booking.category==="photographer"){
                let response=await addPhotographer(booking);
                alert("Photographer added Successfully");
                if(!response) return;}
        
            if(booking.category==="decorator"){
                let response=await addDecorator(booking);
                alert("Decorator added Successfully");
                if(!response) return;}
        }

        return(

        <Box className={classes.container}>    
            <Box className={classes.addbooking}>

                <TextField onChange={(e)=>onInputChange(e)} name='id' label='Id'/>
                <TextField onChange={(e)=>onInputChange(e)} name='category' label='Category'/>
                <TextField onChange={(e)=>onInputChange(e)} name='image' label='Image'/>
                <TextField onChange={(e)=>onInputChange(e)} name='name' label='Name'/>
                <TextField onChange={(e)=>onInputChange(e)} name='rating' label='rating'/>
                <TextField onChange={(e)=>onInputChange(e)} name='location' label='Location'/>
                <TextField onChange={(e)=>onInputChange(e)} name='fee' label='Fee'/>

                <Button variant="contained" onClick={()=>addB()} classname={classes.button} style={{background:'#e72e77',color:"#ffffff"}}>ADD BOOKING</Button>
            </Box>
        </Box>
    )
}

export default BookingAddition;