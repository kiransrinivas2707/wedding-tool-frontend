import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Typography,Box,makeStyles,Divider } from '@material-ui/core';
import {Link} from 'react-router-dom';

const responsive={
    desktop:{
        breakpoint:{max:3000,min:1024},
        items:2
    },
    tablet:{
        breakpoint:{max:1024,min:464},
        items:2
    },
    mobile:{ 
        breakpoint:{max:464,min:0},
        items:1
    },
};

const useStyle=makeStyles({
    component:{
        paddingBottom:20
    },
    text:{
        padding:'15px 20px',
        display:'flex',
        fontWeight:'bold',
        fontSize:20,
    },
    image:{
        height:200,
        width:350,
        border:'0px solid grey'
    },
    photographerText:{
        fontSize:14,
        marginTop:5,
        color:'black'
    },
})

const PhotographerSlide= ({photographers}) =>{
    const classes=useStyle();
    return(
        <Box className={classes.component}>
            <Typography className={classes.text} style={{color:"#e72e77"}}>Photography</Typography>
           
        <Carousel 
        responsive={responsive}
        centerMode={true}
        autoPlay={false}
        >
            {
                photographers.sort((a,b)=>b.rating - a.rating).map(photographer=>(
                    <Link to={`photographer/${photographer.id}`} style={{textDecoration:'none'}}>
                        <Box textAlign="center">
                            <img src={photographer.image} alt="photographer_image" className={classes.image} />
                            <Typography className={classes.photographerText} style={{fontWeight:'bolder',color:'purple'}}>{photographer.name}</Typography>
                            <Typography className={classes.photographerText}>{photographer.location}</Typography>
                            <Typography className={classes.photographerText}>Rs.{photographer.fee}</Typography>
                        </Box>
                    </Link>
                ))
            }

        </Carousel>
        </Box>

    )

}

export default PhotographerSlide;