import {Box,Button,makeStyles, Typography,MenuItem} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';

import LoginDialog from '../Login/Login.jsx';
import { useState,useContext } from 'react';
import {LoginContext} from '../../context/ContextProvider.jsx';

const useStyle =makeStyles({
    login:{
        background:'pink',
        textTransform:'none',
        fontWeight:600,
        padding:'5px 40px',
    },
    wrapper:{
        margin:'0 5% 0 auto',
        display:'flex',
        '& > *':{
            marginRight:50,
            alignItems:'center',
            textDecoration:'none',
            color:'white'
        }
    },
    container:{
        display:'flex'
    }

})

const HeaderButtons =()=>{
    const classes=useStyle();
    const [open,setOpen]=useState(false);
    const {profile,setProfile}=useContext(LoginContext);
    const openLoginDialog=()=>{
        setOpen(true);
    }
    const handleClose =()=>{
        setOpen(false);
    }

    const logout =()=>{
        setProfile(false);
    }

    return(
        <Box className={classes.wrapper}>
            <>{
                profile ?
                <Link to='/updateprofile' className={classes.container}>
                    <Typography>Update Profile</Typography>
                </Link> : null
            }</>
            { profile ? null:
                <Link><Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login}>Login</Button></Link>
            }
            <Link to='/bookinglist' className={classes.container}>
                <Typography>BookingList</Typography>
            </Link>
            <Link to='/cart' className={classes.container}>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Link>
            {
                profile ? <Link to="/">
                <MenuItem onClick={()=>{handleClose();logout();}} >Logout</MenuItem>
                </Link>:null
            }
            <LoginDialog open={open} setOpen={setOpen} setProfile={setProfile}/>
        </Box>
    )
}

export default HeaderButtons;