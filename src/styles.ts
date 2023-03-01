import { createUseStyles } from "react-jss"

const useStyles=createUseStyles({
 
    icon:{
        margin:{right:20}
    },
    buttons:{
        margin:{top:40}
    },
    cardGrid:{
        padding:{top:20,bottom:20}
    },
    card:{
        height:"100%",
        display:"flex",
        flexDirection:"column"
        
    },
    cardMedia:{
        padding:{top:"56.25%"} //16:9
    },
    cardContent:{
        flexGrow:1
    },
    footer:{padding:{top:50,bottom:50}

    }
}
)
export default useStyles