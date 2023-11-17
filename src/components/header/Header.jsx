import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import HeaderButtons from './HeaderButtons';
import {Link} from 'react-router-dom';

import logo from "./logo.png"

const useStyle =makeStyles({
    header:{
        background:'#e72e77',
        height:65,

    },
    AppName:{
        textDecoration:'false',
        color:'white',
        fontSize:30,
        fontStyle:'italic',
        marginRight:40
    },
})

const Header =() =>{
    const classes=useStyle();
    return(
        <AppBar className={classes.header}>
           
           <Toolbar>
               <Link to='/' style={{textDecoration:'none'}}>
              <img src={logo} alt="logo_img"/>
              </Link>
            
              <HeaderButtons></HeaderButtons>
           </Toolbar>
       
        </AppBar>
    )
}

export default Header;