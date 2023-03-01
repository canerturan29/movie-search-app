import React from 'react'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { Typography, AppBar, CssBaseline,  Toolbar,} from '@mui/material'
import useStyles from './styles';
export default function Navbar() {
    const classes=useStyles()

  return (
    <div>
        <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <VideoCameraFrontIcon className={classes.icon}/>
                    <Typography  variant="h6">
                        Film Album
                    </Typography>
                </Toolbar>
            </AppBar>
    </div>
  )
}
