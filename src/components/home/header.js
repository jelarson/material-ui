import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  tpographyStyles: {
    flex: 1,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.tpographyStyles}>This is our Header!</Typography>
        <SettingsIcon />
      </Toolbar>
    </AppBar>
  )
}
