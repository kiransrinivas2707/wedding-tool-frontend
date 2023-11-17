import {TextField,Box,makeStyles,Button} from '@material-ui/core';
import { useState } from 'react';
// import { updateProfile } from '../../service/api.js';
import axios from 'axios';

const url='https://wedding-tool-backend.onrender.com';

const useStyle=makeStyles({
    container:{
        display:'flex',
        alignItems:'center',
        marginTop:90,
        backgroundImage:`url(${''})`,
        backgroundRepeat:'no-repeat',
        
    },
    updateprofile:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& >*':{
            marginTop:20,
        },
        alignItems:'center',
        paddingBottom:130,

    }
})

var updateProfileInitial={
    category:'',
    oldvalue:'',
    newvalue:''
}

const UpdateProfile =()=>{

    const classes=useStyle();

    const [change,setChange]=useState(updateProfileInitial);

    const onInputChange=(e)=>{
        setChange({...change,[e.target.name]:e.target.value});
        console.log(change)
    }
    const Change =  () => {
        
            axios.post(`${url}/updateProfile`,change)
            .then((res)=>{
                if(res.status===200){
                    // If update is successful
                    alert("Updated successfully");
                    console.log("hi");
                    // Reset text field values to empty
                    setChange(updateProfileInitial);
                }
                else{
                    Promise.reject()
                }
            })
            
        .catch((error) =>{
            // Handle error if necessary
            console.error("Error updating profile:", error);
        })
    }
    

    return(

    <Box className={classes.container}>    
        <Box className={classes.updateprofile}>
            <TextField onChange={(e)=>onInputChange(e)} name='category' style={{width:"400px"}} value={change.category} label='first/lastname/email/password ?'/>
            <TextField onChange={(e)=>onInputChange(e)} name='oldvalue' style={{width:"400px"}} value={change.oldvalue} label='Old value'/>
            <TextField onChange={(e)=>onInputChange(e)} name='newvalue' style={{width:"400px"}} value={change.newvalue} label='New value'/>
            <Button variant="contained" onClick={()=>Change()} classname={classes.button} style={{background:'#e72e77',color:"white"}}>Update Profile</Button>
        </Box>
    </Box>
)
}

export default UpdateProfile;