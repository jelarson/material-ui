import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  tpographyStyles: {
    flex: 1,
  },
  appBarStyles: {
    backgroundColor: '#e12501',
    marginBottom: '15px',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBarStyles} position="static">
      <Toolbar>
        <Typography className={classes.tpographyStyles}>Formula 1 Drivers</Typography>
        <SettingsIcon />
      </Toolbar>
    </AppBar>
  )
}
