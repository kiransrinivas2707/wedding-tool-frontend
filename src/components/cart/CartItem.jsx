import {Card,makeStyles,Box,Typography,Button} from '@material-ui/core';

const useStyle= makeStyles({
    component:{
        display:'flex',
        borderRadius:0,
        backgroundColor:'lightgray'
    },
    leftComponent:{
        margin:20,
        display:'flex',
        flexDirection:'column'
    },
    rightComponent:{
        margin:20,
        backgroundColor:'lightgray'
    },
    image:{
        height:150,
        width:100
    },
    remove:{
        marginTop:20,
        fontSize:16
    }
})

const CartItem =({item,removeItemFromCart})=>{

    const classes=useStyle();
    return(
        <Card style={{margin:5}}>
            <Box className={classes.component}>
                <Box className={classes.leftComponent}>
                    <img src={item.image} alt="productimage" className={classes.image}></img>
                </Box>

                <Box className={classes.rightComponent}>
                    <Typography>{item.name}</Typography>
                    <Typography style={{marginTop:6,color:'grey',fontSize:14}}>{item.type}</Typography>
                    <Typography style={{margin:'20px 0',fontWeight:'bolder'}}>Rs.{item.price}</Typography>
                    <Button classname={classes.remove} onClick={()=>removeItemFromCart(item.id)} style={{backgroundColor:"#e72e77",color:"#ffffff"}}>Remove</Button>
                </Box>
            </Box>

        </Card>
    )
}

export default CartItem;